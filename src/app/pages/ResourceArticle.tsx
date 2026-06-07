import { useParams, Link } from "react-router";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const articlesData: Record<string, any> = {
  mindfulness: {
    title: "Mindfulness & Meditation: Rewiring the Distracted Brain",
    date: "June 2, 2026",
    content: (
      <>
        <p className="mb-6">The modern smartphone is designed to fracture our attention. Every notification is a carefully calibrated disruption, pulling us away from deep work. Mindfulness and meditation offer a powerful counter-strategy by literally rewiring our brain's response to these stimuli.</p>
        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">The Science of Attention</h3>
        <p className="mb-6">Regular meditation has been shown to increase the density of the prefrontal cortex, the area of the brain responsible for executive function and focus. When we meditate, we are essentially performing "reps" for our attention span.</p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Reduced Reactivity:</strong> Learn to pause before picking up the phone when a notification chimes.</li>
          <li><strong>Increased Awareness:</strong> Notice when you've mindlessly opened an app and consciously choose to close it.</li>
          <li><strong>Stress Reduction:</strong> Lower baseline cortisol levels make you less susceptible to doomscrolling.</li>
        </ul>
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 mb-8 my-10">
          <h4 className="text-xl font-display font-semibold mb-6 text-center">Stress & Distraction Levels Over 8 Weeks of Practice</h4>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { week: "Wk 1", stress: 85, focus: 20 },
                { week: "Wk 2", stress: 78, focus: 35 },
                { week: "Wk 4", stress: 60, focus: 55 },
                { week: "Wk 6", stress: 45, focus: 70 },
                { week: "Wk 8", stress: 30, focus: 85 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="stress" stroke="#F7941E" strokeWidth={3} name="Stress Level" />
                <Line type="monotone" dataKey="focus" stroke="#00373E" strokeWidth={3} name="Focus Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <p>By implementing just 10 minutes of daily mindfulness, students report a significant decrease in impulsive phone usage. Start small: before unlocking your device, take three deep breaths and ask yourself what your intention is.</p>
      </>
    )
  },
  therapy: {
    title: "One-on-One Therapy: Treating Digital Dependency",
    date: "May 15, 2026",
    content: (
      <>
        <p className="mb-6">While 'screen time' is often treated as a simple bad habit, for many, it functions as a behavioral addiction. Therapy provides a structured, personalized environment to uncover the root causes of our digital dependency, which is often an escape mechanism from anxiety or academic pressure.</p>
        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">Beyond the Surface Problem</h3>
        <p className="mb-6">Therapists specialized in digital wellbeing don't just tell you to put your phone away. They help you understand <em>why</em> you pick it up in the first place.</p>
        <div className="bg-[#FDF7F1] p-8 rounded-[40px] mb-8 my-10">
          <h4 className="text-xl font-display font-semibold mb-6 text-center">Impact of Screen Time on Academic Performance</h4>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { hours: "< 2hrs", gpa: 88 },
                { hours: "2-4hrs", gpa: 82 },
                { hours: "4-6hrs", gpa: 75 },
                { hours: "6-8hrs", gpa: 65 },
                { hours: "> 8hrs", gpa: 58 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="hours" />
                <YAxis domain={[40, 100]} />
                <Tooltip cursor={{fill: 'rgba(0,0,0,0.05)'}} />
                <Bar dataKey="gpa" fill="#00373E" radius={[8, 8, 0, 0]} name="Average Grade (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Cognitive Behavioral Therapy (CBT) to reframe thoughts about FOMO.</li>
          <li>Identifying personal triggers (e.g., studying difficult subjects) that lead to phone use.</li>
          <li>Building healthy coping mechanisms that don't involve a screen.</li>
        </ul>
        <p>Therapy turns the abstract goal of "using my phone less" into concrete, manageable behavioral shifts.</p>
      </>
    )
  },
  detox: {
    title: "The 7-Day Digital Detox Protocol",
    date: "April 28, 2026",
    content: (
      <>
        <p className="mb-6">A digital detox isn't about throwing your phone in the ocean; it's about resetting your baseline dopamine levels. When we are constantly bombarded by high-dopamine stimuli (reels, likes, messages), normal activities like reading a book or studying feel intolerably boring.</p>
        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">The Dopamine Reset</h3>
        <p className="mb-6">By systematically removing triggers for a set period, your brain's reward system recalibrates. You'll find that your ability to focus on complex tasks naturally returns.</p>
        <div className="bg-[rgba(0,55,62,0.05)] p-8 rounded-[40px] mb-8 my-10 border border-[#00373E]/10">
          <h4 className="text-xl font-display font-semibold mb-6 text-center">Dopamine Spikes by Activity Type</h4>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={[
                { time: "Reading", dopamine: 50 },
                { time: "Studying", dopamine: 40 },
                { time: "Social Media", dopamine: 150 },
                { time: "Short Video Apps", dopamine: 200 },
                { time: "Video Games", dopamine: 180 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="dopamine" stroke="#E9DA74" fill="#E9DA74" name="Dopamine Release (%)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <h4 className="text-xl font-display font-semibold mt-8 mb-4">Your 3-Step Starter Guide:</h4>
        <ol className="list-decimal pl-6 mb-8 space-y-2">
          <li><strong>The Grayscale Shift:</strong> Change your phone's display to black and white. It instantly makes the device less appealing.</li>
          <li><strong>Notification Purge:</strong> Turn off ALL non-human notifications. If an app wants your attention, it shouldn't get it.</li>
          <li><strong>The Bedroom Ban:</strong> Buy a cheap alarm clock and charge your phone in the kitchen overnight.</li>
        </ol>
      </>
    )
  },
  workshops: {
    title: "Focus Workshops: Building the Skill of Deep Work",
    date: "April 10, 2026",
    content: (
      <>
        <p className="mb-6">Focus is not an inherent trait; it is a trainable skill. Just as you wouldn't expect to run a marathon without training, you cannot expect to study intensely for four hours without building up the capacity.</p>
        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">The Deep Work Framework</h3>
        <p className="mb-6">Our workshops teach the principles of Deep Work, popularized by Cal Newport. It involves pushing your cognitive capabilities to their limit in a distraction-free state.</p>
        
        <div className="bg-[#F9E6D0] p-8 rounded-[40px] mb-8 my-10">
          <h4 className="text-xl font-display font-semibold mb-6 text-center">Continuous Focus Span After Workshop Training</h4>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { week: "Start", span: 15 },
                { week: "Week 2", span: 25 },
                { week: "Week 4", span: 45 },
                { week: "Week 6", span: 75 },
                { week: "Week 8", span: 90 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" />
                <YAxis name="Minutes" />
                <Tooltip />
                <Line type="step" dataKey="span" stroke="#00373E" strokeWidth={4} dot={{r: 6}} name="Minutes of Deep Focus" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Time Blocking:</strong> Scheduling every minute of your day to remove the friction of choice.</li>
          <li><strong>Environmental Design:</strong> Setting up a workspace that cues your brain it's time to work.</li>
          <li><strong>The Pomodoro Evolution:</strong> Moving beyond 25-minute sprints to sustained 90-minute deep work blocks.</li>
        </ul>
        <p>In our collaborative sessions, students practice these techniques in real-time, holding each other accountable and sharing what works for their unique study styles.</p>
      </>
    )
  }
};

const allArticlesList = [
  { id: "mindfulness", title: "Mindfulness & Meditation" },
  { id: "therapy", title: "One-on-One Therapy" },
  { id: "detox", title: "Digital Detox Guides" },
  { id: "workshops", title: "Focus Workshops" }
];

export function ResourceArticle() {
  const { id } = useParams();
  const article = articlesData[id || ""] || articlesData["mindfulness"];
  
  const otherArticles = allArticlesList.filter(a => a.id !== id);

  return (
    <div className="w-full flex justify-center py-16 px-4 md:px-0">
      <div className="max-w-[1240px] w-full flex flex-col lg:flex-row gap-16">
        
        {/* Main Article Content */}
        <article className="flex-1 max-w-[800px]">
          <Link to="/resources" className="text-primary/60 hover:text-primary font-sans mb-8 flex items-center gap-2 transition-colors">
            ← Back to Resources
          </Link>
          <span className="font-display font-medium text-sm text-primary/60 tracking-wide uppercase">
            {article.date}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-[50px] text-primary leading-tight mt-4 mb-10">
            {article.title}
          </h1>
          
          <div className="font-sans text-lg md:text-[20px] text-primary leading-relaxed text-justify">
            {article.content}
          </div>
        </article>

        {/* Sidebar: Access to other 3 resources */}
        <aside className="w-full lg:w-[350px] shrink-0">
          <div className="sticky top-8 bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm">
            <h3 className="font-display font-semibold text-2xl text-primary mb-6 border-b border-gray-100 pb-4">
              More Resources
            </h3>
            <div className="flex flex-col gap-6">
              {otherArticles.map((other) => (
                <Link key={other.id} to={`/resources/${other.id}`} className="group flex flex-col gap-2">
                  <span className="font-display font-medium text-xl text-primary group-hover:underline">
                    {other.title}
                  </span>
                  <span className="font-sans text-primary/60 text-sm flex items-center gap-1 group-hover:text-primary transition-colors">
                    Read now →
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 bg-[#F9E6D0] rounded-[24px] p-6 text-center flex flex-col items-center">
              <h4 className="font-display font-bold text-xl text-primary mb-2">Need direct support?</h4>
              <p className="font-sans text-sm text-primary mb-4">Speak with a professional about managing screen time.</p>
              <Link to="/contact" className="bg-primary text-white font-display text-sm font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-opacity">
                Contact Us
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
