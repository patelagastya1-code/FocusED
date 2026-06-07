import { useState, type ReactNode } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Slider } from "../ui/slider";
import { Smartphone, Zap, ScrollText, Star, BookOpen, Trophy, RotateCcw } from "lucide-react";

const BAR_COLORS = ["#22c55e", "#84cc16", "#F7941E", "#f97316", "#ef4444"];

const screenTimeData = {
  maths: [
    { bracket: "Under 1hr", score: 100, label: "< 1 hr" },
    { bracket: "1-2 hrs", score: 95, label: "1–2 hrs" },
    { bracket: "2-4 hrs", score: 87, label: "2–4 hrs" },
    { bracket: "4-6 hrs", score: 79, label: "4–6 hrs" },
    { bracket: "6+ hrs", score: 68, label: "6+ hrs" },
  ],
  english: [
    { bracket: "Under 1hr", score: 100, label: "< 1 hr" },
    { bracket: "1-2 hrs", score: 94, label: "1–2 hrs" },
    { bracket: "2-4 hrs", score: 86, label: "2–4 hrs" },
    { bracket: "4-6 hrs", score: 78, label: "4–6 hrs" },
    { bracket: "6+ hrs", score: 67, label: "6+ hrs" },
  ],
  science: [
    { bracket: "Under 1hr", score: 100, label: "< 1 hr" },
    { bracket: "1-2 hrs", score: 96, label: "1–2 hrs" },
    { bracket: "2-4 hrs", score: 88, label: "2–4 hrs" },
    { bracket: "4-6 hrs", score: 80, label: "4–6 hrs" },
    { bracket: "6+ hrs", score: 69, label: "6+ hrs" },
  ],
};

function CustomBarTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { score: number; label: string } }> }) {
  if (!active || !payload?.[0]) return null;
  const { score, label } = payload[0].payload;
  const drop = 100 - score;
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm text-sm">
      <p className="font-display font-semibold text-primary">{label}</p>
      <p className="text-primary/80">Score index: {score}%</p>
      {drop > 0 && <p className="text-red-600 font-medium">{drop}% below baseline</p>}
    </div>
  );
}

export function ScreenTimeBarChart() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[40px] shadow-sm border border-gray-100 my-10">
      <h4 className="text-xl font-display font-semibold mb-2 text-center">How Screen Time Affects Academic Scores</h4>
      <p className="text-sm text-primary/60 text-center mb-6">Source: Shi (2025), Frontiers in Public Health</p>
      <Tabs defaultValue="maths">
        <TabsList className="bg-[#FDF7F1] rounded-full p-1 mb-6 mx-auto flex w-fit">
          <TabsTrigger value="maths" className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-display">Maths</TabsTrigger>
          <TabsTrigger value="english" className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-display">English</TabsTrigger>
          <TabsTrigger value="science" className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-display">Science</TabsTrigger>
        </TabsList>
        {(["maths", "english", "science"] as const).map((subject) => (
          <TabsContent key={subject} value={subject}>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={screenTimeData[subject]} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="label" tick={{ fill: "#00373E", fontSize: 12 }} />
                  <YAxis domain={[60, 105]} tick={{ fill: "#00373E" }} label={{ value: "Score index (%)", angle: -90, position: "insideLeft", fill: "#00373E", fontSize: 12 }} />
                  <Tooltip content={<CustomBarTooltip />} cursor={{ fill: "rgba(0,55,62,0.05)" }} />
                  <Bar dataKey="score" radius={[8, 8, 0, 0]} animationDuration={800} label={{ position: "top", fill: "#00373E", fontSize: 13, fontWeight: 600 }}>
                    {screenTimeData[subject].map((_, i) => (
                      <Cell key={i} fill={BAR_COLORS[i]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <p className="text-xs text-primary/50 text-center mt-4">Data derived from Shi (2025). Percentage drops are illustrative of the reported negative correlation.</p>
    </div>
  );
}

const CHECK_MINUTES = [5, 14, 23, 34, 43, 52];
const RECOVERY = 23.25;

export function StudySessionTimeline() {
  const segments: { start: number; end: number; type: "building" | "deep" | "recovery" }[] = [];
  let cursor = 0;

  CHECK_MINUTES.forEach((checkMin) => {
    if (checkMin > cursor) {
      const mid = cursor + (checkMin - cursor) / 2;
      segments.push({ start: cursor, end: mid, type: "building" });
      segments.push({ start: mid, end: checkMin, type: "deep" });
    }
    segments.push({ start: checkMin, end: Math.min(60, checkMin + RECOVERY), type: "recovery" });
    cursor = Math.min(60, checkMin + RECOVERY);
  });
  if (cursor < 60) {
    segments.push({ start: cursor, end: 60, type: "building" });
  }

  const typeColor = { building: "#d1d5db", deep: "#22c55e", recovery: "#ef4444" };
  const typeLabel = { building: "Building focus", deep: "Deep focus", recovery: "Recovery after interruption" };

  return (
    <div className="bg-[#FDF7F1] p-6 md:p-8 rounded-[40px] border border-gray-100 my-10">
      <h4 className="text-xl font-display font-semibold mb-2 text-center">The Cost of One Study Session with Phone Interruptions</h4>
      <p className="text-sm text-primary/60 text-center mb-6">60-minute session · 6 phone checks · Source: Mark (2023)</p>

      <div className="relative h-16 bg-gray-100 rounded-2xl overflow-hidden mb-3">
        {segments.map((seg, i) => (
          <div
            key={i}
            className="absolute top-0 h-full opacity-90"
            style={{
              left: `${(seg.start / 60) * 100}%`,
              width: `${((seg.end - seg.start) / 60) * 100}%`,
              backgroundColor: typeColor[seg.type],
            }}
          />
        ))}
        {CHECK_MINUTES.map((min) => (
          <div key={min} className="absolute top-0 h-full w-0.5 bg-primary z-10" style={{ left: `${(min / 60) * 100}%` }}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-primary whitespace-nowrap">📱 {min}m</div>
          </div>
        ))}
        <div className="absolute bottom-1 left-2 text-xs text-primary/70 font-medium">0 min</div>
        <div className="absolute bottom-1 right-2 text-xs text-primary/70 font-medium">60 min</div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-6 text-sm">
        {(["building", "deep", "recovery"] as const).map((t) => (
          <div key={t} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: typeColor[t] }} />
            <span className="text-primary/80">{typeLabel[t]}</span>
          </div>
        ))}
      </div>

      <div className="bg-primary/10 rounded-2xl p-5 text-center">
        <p className="font-display font-bold text-2xl text-primary">60 minutes studied. ~11 minutes of real focus.</p>
        <p className="text-sm text-primary/60 mt-2">Recovery time per check: 23 mins 15 secs (Mark, 2023)</p>
      </div>
    </div>
  );
}

const mentalHealthMetrics = [
  { label: "Depressive symptoms", low: 12, high: 27, icon: "😔" },
  { label: "Anxiety indicators", low: 14, high: 31, icon: "😰" },
  { label: "Significant sleep disruption", low: 18, high: 42, icon: "😴" },
  { label: "Suicidal ideation", low: 8, high: 19, icon: "⚠️" },
];

export function MentalHealthComparison() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[40px] shadow-sm border border-gray-100 my-10">
      <h4 className="text-xl font-display font-semibold mb-6 text-center">Mental Health Outcomes: Low vs High Smartphone Use</h4>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <div className="bg-green-50 rounded-3xl p-5 border border-green-200">
          <h5 className="font-display font-semibold text-center text-green-800 mb-5 text-sm md:text-base">Under 16 hrs/week</h5>
          {mentalHealthMetrics.map((m) => (
            <div key={m.label} className="mb-4 last:mb-0">
              <div className="flex items-center gap-2 mb-1">
                <span>{m.icon}</span>
                <span className="text-xs md:text-sm text-primary/80">{m.label}</span>
              </div>
              <p className="font-display font-bold text-2xl text-green-700">{m.low}%</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 rounded-3xl p-5 border border-red-200">
          <h5 className="font-display font-semibold text-center text-red-800 mb-5 text-sm md:text-base">30+ hrs/week</h5>
          {mentalHealthMetrics.map((m) => (
            <div key={m.label} className="mb-4 last:mb-0">
              <div className="flex items-center gap-2 mb-1">
                <span>{m.icon}</span>
                <span className="text-xs md:text-sm text-primary/80">{m.label}</span>
              </div>
              <p className="font-display font-bold text-2xl text-red-600">{m.high}%</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-primary/50 text-center mt-6">Source: Kim et al. (2020), Korea Youth Risk Behavior Survey. Figures are illustrative of directional findings.</p>
    </div>
  );
}

const usageBands = [
  { max: 2, color: "#22c55e", bg: "bg-green-50 border-green-200", label: "Low risk", message: "At this level, research suggests smartphone use is unlikely to significantly impact mental health outcomes. You're in a healthy range — keep prioritising offline connection and sleep." },
  { max: 4, color: "#F7941E", bg: "bg-amber-50 border-amber-200", label: "Moderate", message: "Around 2–4 hours daily, some students begin reporting mild sleep disruption and increased social comparison. Kim et al. (2020) found effects become more noticeable as weekly use climbs past 16 hours." },
  { max: 6, color: "#f97316", bg: "bg-orange-50 border-orange-200", label: "Elevated", message: "At 4–6 hours daily (28–42 hrs/week), research links higher rates of anxiety and depressive symptoms. Evening phone use in this range often disrupts sleep — a key driver of next-day emotional regulation." },
  { max: 12, color: "#ef4444", bg: "bg-red-50 border-red-200", label: "High", message: "Students using smartphones 30+ hours per week showed significantly higher rates of depression, anxiety, and emotional distress in Kim et al. (2020). This doesn't mean you're broken — it means your habits may be working against your wellbeing." },
];

export function ScreenTimeSlider() {
  const [hours, setHours] = useState([3]);

  const daily = hours[0];
  const weekly = daily * 7;
  const band = usageBands.find((b) => daily <= b.max) ?? usageBands[usageBands.length - 1];

  return (
    <div className="bg-[rgba(0,55,62,0.05)] p-6 md:p-8 rounded-[40px] border border-[#00373E]/10 my-10">
      <h4 className="text-xl font-display font-semibold mb-6 text-center">Your Screen Time, Your Risk</h4>

      <div className="mb-2 flex justify-between text-sm text-primary/70">
        <span>0 hrs/day</span>
        <span>12+ hrs/day</span>
      </div>
      <Slider
        value={hours}
        onValueChange={setHours}
        min={0}
        max={12}
        step={0.5}
        className="mb-6"
      />

      <div className="text-center mb-6">
        <p className="font-display font-bold text-3xl text-primary">{daily} hrs/day</p>
        <p className="text-primary/70 mt-1">= {weekly} hrs/week</p>
      </div>

      <div className={`rounded-2xl p-5 border ${band.bg}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: band.color }} />
          <span className="font-display font-semibold text-primary">{band.label}</span>
        </div>
        <p className="text-primary/90 leading-relaxed">{band.message}</p>
      </div>

      <p className="text-xs text-primary/50 text-center mt-4 italic">This tool is for awareness only, not diagnosis.</p>
    </div>
  );
}

export function DopamineLoopDiagram() {
  const loopNodes = [
    { label: "Trigger", sub: "Notification / urge", icon: Smartphone },
    { label: "Anticipation", sub: "Dopamine spike", icon: Zap },
    { label: "Action", sub: "Open app, scroll", icon: ScrollText },
    { label: "Variable Reward", sub: "Likes or nothing", icon: Star },
  ];
  const studyNodes = [
    { label: "Effort", sub: "Sit down, begin", icon: BookOpen },
    { label: "Sustained Focus", sub: "Stay with difficulty", icon: BookOpen },
    { label: "Delayed Reward", sub: "Understanding / results", icon: Trophy },
  ];

  return (
    <div className="bg-white p-6 md:p-8 rounded-[40px] shadow-sm border border-gray-100 my-10">
      <h4 className="text-xl font-display font-semibold mb-6 text-center">The Dopamine Loop: Social Media vs Studying</h4>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-50 rounded-3xl p-6 border border-red-100">
          <h5 className="font-display font-semibold text-red-800 text-center mb-6">Social Media</h5>
          <div className="relative flex flex-col items-center gap-3">
            {loopNodes.map((node, i) => (
              <div key={node.label} className="flex flex-col items-center">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-red-200 flex items-center gap-3 w-full max-w-[220px]">
                  <node.icon className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-sm text-primary">{node.label}</p>
                    <p className="text-xs text-primary/60">{node.sub}</p>
                  </div>
                </div>
                {i < loopNodes.length - 1 && <div className="text-red-400 text-lg">↓</div>}
              </div>
            ))}
            <div className="text-red-400 text-lg">↺ Repeat</div>
          </div>
        </div>

        <div className="bg-green-50 rounded-3xl p-6 border border-green-100">
          <h5 className="font-display font-semibold text-green-800 text-center mb-6">Studying</h5>
          <div className="flex flex-col items-center gap-6 justify-center min-h-[280px]">
            {studyNodes.map((node, i) => (
              <div key={node.label} className="flex flex-col items-center w-full">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-green-200 flex items-center gap-3 w-full max-w-[220px]">
                  <node.icon className="w-5 h-5 text-green-600 shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-sm text-primary">{node.label}</p>
                    <p className="text-xs text-primary/60">{node.sub}</p>
                  </div>
                </div>
                {i < studyNodes.length - 1 && (
                  <div className="flex items-center gap-2 my-2 text-green-500 text-xs">— longer delay —</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center font-display font-medium text-primary mt-6 italic">
        Social media is a loop. Studying is a long game. Your brain is wired to prefer the loop — but you can learn to override it.
      </p>
    </div>
  );
}

type QuizAnswers = Record<number, number>;

const quizQuestions = [
  {
    question: "When you sit down to study, what usually happens first?",
    options: [
      { text: "I feel overwhelmed and avoid starting", profile: "avoider" },
      { text: "I spend ages organising instead of doing", profile: "perfectionist" },
      { text: "I check my phone 'just for a second'", profile: "scroller" },
    ],
  },
  {
    question: "When a task feels boring or hard, you tend to…",
    options: [
      { text: "Put it off and do something easier", profile: "avoider" },
      { text: "Wait until you can do it perfectly", profile: "perfectionist" },
      { text: "Reach for your phone for stimulation", profile: "scroller" },
    ],
  },
  {
    question: "How do you feel about unfinished study tasks?",
    options: [
      { text: "Anxious — I'd rather not think about them", profile: "avoider" },
      { text: "Frustrated — they should have been done right", profile: "perfectionist" },
      { text: "Distracted — something on my phone seems more interesting", profile: "scroller" },
    ],
  },
  {
    question: "Your ideal study session looks like…",
    options: [
      { text: "Avoiding it until the pressure forces you to start", profile: "avoider" },
      { text: "Having the perfect setup before you begin", profile: "perfectionist" },
      { text: "Studying with your phone nearby for 'breaks'", profile: "scroller" },
    ],
  },
  {
    question: "When you miss a study goal, you usually…",
    options: [
      { text: "Feel guilty and avoid studying the next day", profile: "avoider" },
      { text: "Criticise yourself for not being disciplined enough", profile: "perfectionist" },
      { text: "Scroll to take your mind off it", profile: "scroller" },
    ],
  },
];

const profiles = {
  avoider: {
    title: "The Avoider",
    icon: "🙈",
    description: "You procrastinate because difficult tasks trigger uncomfortable feelings — anxiety, boredom, or overwhelm. Your brain seeks relief, and your phone offers it instantly.",
    tip: "Make the start impossibly small: commit to just one paragraph or five minutes. Starting breaks the avoidance loop.",
  },
  perfectionist: {
    title: "The Perfectionist",
    icon: "✨",
    description: "You delay starting because the task feels like it needs to be done perfectly. The fear of not meeting your own standards becomes bigger than the task itself.",
    tip: "Give yourself permission to produce a rough first draft. Done is better than perfect — you can refine later.",
  },
  scroller: {
    title: "The Scroller",
    icon: "📱",
    description: "You've built a habit of reaching for your phone whenever focus feels hard. Variable rewards from social media have trained your brain to prefer quick stimulation over sustained effort.",
    tip: "Put your phone in another room during study sessions. Remove the option entirely rather than relying on willpower.",
  },
};

export function ProcrastinationQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [result, setResult] = useState<keyof typeof profiles | null>(null);

  const handleAnswer = (profile: string) => {
    const newAnswers = { ...answers, [step]: profile };
    setAnswers(newAnswers);

    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      const counts = { avoider: 0, perfectionist: 0, scroller: 0 };
      Object.values(newAnswers).forEach((p) => {
        counts[p as keyof typeof counts]++;
      });
      const winner = (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]) as keyof typeof profiles;
      setResult(winner);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    const profile = profiles[result];
    return (
      <div className="bg-[#F9E6D0] p-6 md:p-8 rounded-[40px] my-10">
        <h4 className="text-xl font-display font-semibold mb-6 text-center">Your Procrastination Profile</h4>
        <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
          <span className="text-5xl mb-4 block">{profile.icon}</span>
          <h5 className="font-display font-bold text-2xl text-primary mb-4">{profile.title}</h5>
          <p className="text-primary/90 mb-6 leading-relaxed">{profile.description}</p>
          <div className="bg-[#FDF7F1] rounded-2xl p-5 text-left">
            <p className="font-display font-semibold text-primary mb-2">Your tailored tip:</p>
            <p className="text-primary/90">{profile.tip}</p>
          </div>
          <button
            onClick={reset}
            className="mt-6 inline-flex items-center gap-2 border border-primary text-primary font-display font-semibold px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            <RotateCcw className="w-4 h-4" /> Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const q = quizQuestions[step];

  return (
    <div className="bg-[#F9E6D0] p-6 md:p-8 rounded-[40px] my-10">
      <h4 className="text-xl font-display font-semibold mb-2 text-center">How Procrastination-Prone Are You?</h4>
      <p className="text-sm text-primary/60 text-center mb-6">Question {step + 1} of {quizQuestions.length}</p>
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <p className="font-display font-semibold text-lg text-primary mb-6">{q.question}</p>
        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.profile)}
              className="text-left border border-gray-200 rounded-2xl px-5 py-4 hover:border-primary hover:bg-[#FDF7F1] transition-all font-sans text-primary"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
      <p className="text-xs text-primary/50 text-center mt-4">No data collected — fully client-side.</p>
    </div>
  );
}

const withoutSegments = [
  { label: "Opening apps / socials", minutes: 8, color: "#9ca3af" },
  { label: "Attempting to focus", minutes: 12, color: "#d1d5db" },
  { label: "Distracted by notifications", minutes: 10, color: "#f97316" },
  { label: "Recovering focus", minutes: 15, color: "#ef4444" },
  { label: "Actual deep work", minutes: 15, color: "#fca5a5" },
];

const withSegments = [
  { label: "Goal-setting on to-do list", minutes: 3, color: "#86efac" },
  { label: "Deep work — apps blocked", minutes: 47, color: "#22c55e" },
  { label: "Short break", minutes: 10, color: "#4ade80" },
];

function SessionBar({ segments, total }: { segments: typeof withoutSegments; total: number }) {
  return (
    <div className="flex h-12 rounded-xl overflow-hidden w-full">
      {segments.map((seg) => (
        <div
          key={seg.label}
          className="flex items-center justify-center text-white text-[10px] md:text-xs font-medium px-1"
          style={{ width: `${(seg.minutes / total) * 100}%`, backgroundColor: seg.color, minWidth: seg.minutes > 5 ? undefined : "2rem" }}
          title={`${seg.label}: ${seg.minutes} min`}
        >
          {seg.minutes >= 8 && <span className="truncate">{seg.minutes}m</span>}
        </div>
      ))}
    </div>
  );
}

export function FocusToolsComparison() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[40px] shadow-sm border border-gray-100 my-10">
      <h4 className="text-xl font-display font-semibold mb-6 text-center">Study Session: Without vs With Focus Tools</h4>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <h5 className="font-display font-semibold text-gray-600 mb-4 text-center">Without focus tools</h5>
          <SessionBar segments={withoutSegments} total={60} />
          <div className="mt-3 space-y-1">
            {withoutSegments.map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-xs text-primary/70">
                <div className="w-3 h-3 rounded shrink-0" style={{ backgroundColor: s.color }} />
                <span>{s.label} ({s.minutes} min)</span>
              </div>
            ))}
          </div>
          <p className="font-display font-bold text-red-600 text-center mt-4">~15 min of real focus</p>
        </div>
        <div>
          <h5 className="font-display font-semibold text-primary mb-4 text-center">With FocusED</h5>
          <SessionBar segments={withSegments} total={60} />
          <div className="mt-3 space-y-1">
            {withSegments.map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-xs text-primary/70">
                <div className="w-3 h-3 rounded shrink-0" style={{ backgroundColor: s.color }} />
                <span>{s.label} ({s.minutes} min)</span>
              </div>
            ))}
          </div>
          <p className="font-display font-bold text-green-600 text-center mt-4">~47 min of real focus</p>
        </div>
      </div>
      <div className="mt-8 bg-primary text-white rounded-2xl py-4 px-6 text-center">
        <p className="font-display font-bold text-xl">3× more focused study time</p>
      </div>
    </div>
  );
}

export function ArticleQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="bg-[#FDF7F1] border-l-4 border-primary px-6 py-5 rounded-r-2xl my-8 italic font-display text-lg text-primary leading-relaxed">
      {children}
    </blockquote>
  );
}

export function ReferencesList({ items }: { items: string[] }) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-display font-semibold mb-4">References</h3>
      <ol className="list-decimal pl-6 space-y-2 text-sm text-primary/80">
        {items.map((ref, i) => (
          <li key={i}>{ref}</li>
        ))}
      </ol>
    </div>
  );
}
