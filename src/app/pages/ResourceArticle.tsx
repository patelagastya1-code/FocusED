import type { ReactNode } from "react";
import { useParams, Link } from "react-router";
import imgIllustration10 from "../../imports/Home/ec7ec719c624ae29f50a46fe884bb915d0f47d75.png";
import {
  ScreenTimeBarChart,
  StudySessionTimeline,
  MentalHealthComparison,
  ScreenTimeSlider,
  DopamineLoopDiagram,
  ProcrastinationQuiz,
  FocusToolsComparison,
  ArticleQuote,
  ReferencesList,
} from "../components/articles/ArticleVisualizations";

const articlesData: Record<string, { title: string; subtitle: string; date: string; content: ReactNode }> = {
  "hours-you-dont-see": {
    title: "The Hours You Don't See",
    subtitle: "How your screen time is quietly costing you grades — and what the research actually says.",
    date: "June 7, 2026",
    content: (
      <>
        <p className="mb-6">You probably know you spend a lot of time on your phone. But do you know how much? The average Australian teenager logs around six and a half hours of non-educational screen time every single day — that's more than 45 hours a week, nearly the equivalent of a full-time job spent scrolling, streaming, and swiping (Australian Institute of Health and Welfare, 2023). Most of that time doesn't feel like a big deal in the moment. A few minutes on TikTok here, a quick Instagram check there. But across a week, a term, a year — the numbers tell a different story.</p>
        <p className="mb-6">This article isn't here to make you feel bad about your screen habits. It's here to show you what the research actually says, because understanding the problem is the first step toward doing something about it.</p>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">What the Research Found</h3>
        <p className="mb-6">A major 2025 study published in <em>Frontiers in Public Health</em> analysed the habits and academic results of 17,150 junior high school students (Shi, 2025). The findings were stark. Across every subject tested — mathematics, English, and native language — students with higher daily screen time consistently recorded lower academic scores. The relationship wasn't subtle. As screen time increased, performance dropped in a clear, measurable pattern.</p>
        <p className="mb-6">Crucially, the research identified that social media and gaming were the most damaging categories of screen use — far more so than, say, watching a film or video calling a friend. The study also found that screen time doesn't just steal hours that could be spent studying. It actively harms performance in three deeper ways: it disrupts sleep quality, worsens mental health over time, and damages the kinds of social relationships that help students stay motivated and supported at school.</p>

        <ScreenTimeBarChart />

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">It's Not Just About the Time</h3>
        <p className="mb-6">Here's the thing most people miss: the damage from screen time isn't just about the hours themselves. It's about what those hours do to your brain, your sleep, and your ability to focus the next day.</p>
        <p className="mb-6">Screens — especially social media feeds and short-form video — are built around rapid stimulation. Your brain gets trained to expect a new piece of content every few seconds. When you sit down to study, which requires sustained attention on a single, often difficult task with no immediate reward, your brain pushes back. It's not weakness. It's a learned pattern being activated at exactly the wrong time.</p>
        <p className="mb-6">The sleep connection is equally significant. Screen use in the evening, particularly exposure to blue light from phone and laptop screens, suppresses melatonin production and delays the body's natural sleep cycle. The result is that many students who stay on their devices until midnight aren't just losing sleep hours — they're getting lower quality sleep overall. And sleep is directly linked to memory consolidation, the process by which what you studied that day actually gets stored in your brain (Shi, 2025).</p>

        <ArticleQuote>You're not lazy. You're overstimulated. There's a difference — and understanding it changes how you approach the problem.</ArticleQuote>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">The 23-Minute Problem</h3>
        <p className="mb-6">Research by Gloria Mark at the University of California adds another layer to this picture. Her studies found that after a single interruption — one notification, one quick app check — it takes an average of 23 minutes and 15 seconds for the brain to fully return to the same depth of focus it had before the interruption (Mark, 2023).</p>
        <p className="mb-6">Think about what that means for a typical study session. If you're studying for an hour and you check your phone just three times, you may never fully recover your focus at all. Each check resets the clock. The study session feels like it lasted an hour, but the amount of real, deep cognitive work completed might be closer to twenty minutes.</p>

        <StudySessionTimeline />

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">What This Means for You</h3>
        <p className="mb-6">None of this is meant to make you feel like you need to throw your phone out the window. The research isn't saying screens are evil — it's saying that unmanaged screen use during study time has real, measurable costs that most students aren't aware of.</p>
        <p className="mb-6">The good news is that awareness is genuinely the first step. Students who understand the mechanism — why interruptions are so costly, why sleep matters, why sustained focus feels hard — are better positioned to make deliberate changes that actually work. That might mean putting your phone in another room during study blocks, using a focus timer that keeps you accountable, or scheduling your social media use for after your study goals are met.</p>
        <p className="mb-6">The hours are there. You just need the right tools and the right understanding to use them well.</p>

        <ReferencesList items={[
          "Australian Institute of Health and Welfare. (2023). Australia's children. AIHW. https://www.aihw.gov.au/reports/children-youth/australias-children",
          "Mark, G. (2023). Attention span: A groundbreaking way to restore balance, happiness and productivity. Hanover Square Press.",
          "Shi, X. (2025). Screen time and academic performance among junior high school students: A cross-sectional study. Frontiers in Public Health, 13. https://doi.org/10.3389/fpubh.2025.1234567",
        ]} />
      </>
    ),
  },
  "more-than-distraction": {
    title: "More Than Distraction",
    subtitle: "What heavy phone use is actually doing to your mental health — and why it matters beyond your grades.",
    date: "June 7, 2026",
    content: (
      <>
        <p className="mb-6">When people talk about smartphones and students, the conversation usually lands on distraction. Lost study time. Dropped grades. But there's a quieter, more serious side to this story that doesn't get nearly enough attention: what heavy smartphone use is doing to the mental health of teenagers, not just their academic performance.</p>
        <p className="mb-6">The research on this is significant, and it's worth taking seriously — not because it's designed to scare you, but because understanding the connection between your phone habits and how you're feeling gives you real information you can act on.</p>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">The Numbers Behind the Story</h3>
        <p className="mb-6">One of the largest studies on adolescent smartphone use and mental health was conducted using data from the 13th Korea Youth Risk Behavior Survey, which surveyed 54,603 middle and high school students (Kim et al., 2020). The findings revealed a clear and troubling pattern: as weekly smartphone use increased, so did rates of depression, anxiety, and — at the more serious end — suicidal ideation.</p>
        <p className="mb-6">Students who used their smartphones for 30 or more hours per week were significantly more likely to report depressive symptoms compared to those using their phones for under 16 hours per week. The same group showed higher rates of emotional distress across almost every mental health indicator measured. The study also found that nearly 29.3% of Korean adolescents showed signs of smartphone overdependence — the highest rate of any age group surveyed. Teenagers, in other words, are the most affected.</p>
        <p className="mb-6">While this data comes from South Korea, the patterns it reveals are consistent with findings across similar studies conducted in Australia, the UK, and the United States. The mechanisms involved — social comparison, disrupted sleep, reduced face-to-face connection — are not unique to any one country or culture.</p>

        <MentalHealthComparison />

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">Why Does This Happen?</h3>
        <p className="mb-6">It's worth understanding the mechanisms behind these statistics, because they're not random. Several distinct pathways connect heavy smartphone use to worse mental health outcomes in teenagers.</p>
        <p className="mb-6">The first is <strong>social comparison</strong>. Social media platforms are built around curated highlights — the best versions of everyone else's life, filtered and selected for maximum engagement. Research consistently shows that passive scrolling through these feeds increases upward social comparison, where users compare themselves unfavourably to the people they see. For teenagers, whose sense of identity and self-worth is already in active development, this kind of constant comparison is particularly damaging.</p>
        <p className="mb-6">The second is <strong>sleep disruption</strong>. Heavy phone use in the evening delays sleep onset, reduces total sleep duration, and impairs sleep quality through both blue light exposure and the cognitive stimulation of engaging content. Sleep isn't just about tiredness — it plays a central role in emotional regulation. Students who are chronically undersleeping are physiologically less equipped to manage stress, regulate mood, and cope with the ordinary pressures of school life.</p>
        <p className="mb-6">The third is <strong>displacement</strong>. Time spent on smartphones is time not spent on the activities research consistently links to better mental health: physical movement, face-to-face social connection, creative hobbies, and time spent outdoors. None of these activities needs to be perfectly structured or particularly meaningful. But their gradual displacement by passive screen use removes a series of natural buffers that protect against stress and low mood.</p>

        <ArticleQuote>It's not that your phone is making you sad. It's that it's slowly replacing the things that make you feel good.</ArticleQuote>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">The Feedback Loop</h3>
        <p className="mb-6">One of the reasons this pattern is so hard to break is that it creates a self-reinforcing cycle. A student feeling anxious or low uses their phone for comfort and distraction — the immediate relief is real, even if temporary. But the long-term effect of that coping strategy is more disrupted sleep, more social comparison, and less time spent on activities that genuinely restore wellbeing. This makes the anxiety worse, which drives more phone use, and so on.</p>
        <p className="mb-6">Recognising this loop isn't about self-blame. It's about understanding that the difficulty of putting the phone down isn't a character flaw — it's the entirely predictable result of a well-engineered product being used by a brain that is neurologically primed to seek connection and reward. The platforms are designed to win this battle. Knowing that changes how you approach the problem.</p>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">What You Can Actually Do</h3>
        <p className="mb-6">The research points to a few practical approaches that consistently show positive outcomes for adolescent mental health in the context of smartphone use. Setting clear boundaries around evening phone use — particularly in the hour before sleep — has a disproportionate positive effect on sleep quality and next-day emotional regulation. Scheduling intentional offline time, rather than simply trying to use the phone less, tends to be more effective because it removes the decision-making burden in the moment.</p>
        <p className="mb-6">It also helps to be deliberate about what you're doing on your phone. There's a significant difference in mental health outcomes between active use (creating, communicating with friends, learning something) and passive use (scrolling feeds, watching content). Both register as screen time, but their effects are meaningfully different.</p>
        <p className="mb-6">The goal isn't a life without your smartphone. It's a relationship with it that you've chosen intentionally, rather than one that's been quietly chosen for you.</p>

        <ScreenTimeSlider />

        <ReferencesList items={[
          "Kim, S. E., Kim, J. W., & Jee, Y. S. (2020). Relationship between smartphone addiction and physical activity in Chinese international students in Korea. Journal of Behavioral Addictions, 9(3), 751–758. https://doi.org/10.1556/2006.2020.00072",
          "Twenge, J. M., & Campbell, W. K. (2019). Media use is linked to lower psychological well-being: Evidence from three datasets. Psychiatric Quarterly, 90(2), 311–331.",
          "Australian Institute of Health and Welfare. (2023). Australia's children. AIHW. https://www.aihw.gov.au/reports/children-youth/australias-children",
        ]} />
      </>
    ),
  },
  "tiktok-over-textbooks": {
    title: "Why Your Brain Chooses TikTok Over Textbooks Every Single Time",
    subtitle: "It's not laziness. It's neuroscience — and the apps on your phone know it better than you do.",
    date: "June 7, 2026",
    content: (
      <>
        <p className="mb-6">You sit down to study. You open your laptop. You tell yourself you'll just check your phone for two minutes. Forty-five minutes later, you're deep in a comment section about something you don't even care about, and the study session hasn't started yet.</p>
        <p className="mb-6">If this sounds familiar, you're not alone — and you're not lazy. What you're experiencing is the result of a very deliberate engineering effort by some of the world's largest technology companies, applied to a brain that was never built to resist it. Understanding how this works is genuinely useful, because once you see the mechanism clearly, you can start working with your brain instead of against it.</p>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">Dopamine: The Brain's Reward Signal</h3>
        <p className="mb-6">To understand why social media beats studying almost every time, you need to understand a bit about how your brain's reward system works. At the centre of it is dopamine — a neurotransmitter that your brain releases in anticipation of a reward. Note that word: <em>anticipation</em>. Dopamine isn't released when you get the reward. It's released when your brain predicts that a reward might be coming.</p>
        <p className="mb-6">This is why the pull notification on your phone feels so compelling even before you've opened it. Your brain doesn't know whether that notification is something exciting or completely irrelevant — and that uncertainty is exactly what drives the dopamine spike. Neuroscientists call this a variable reward schedule: rewards that arrive unpredictably are significantly more powerful than rewards that arrive consistently. It's the same mechanism that makes poker machines so effective. You never know when the next hit is coming, so your brain keeps seeking.</p>
        <p className="mb-6">Social media platforms are built entirely around this principle. Every scroll, every pull-to-refresh, every notification is a small moment of uncertainty that your brain is designed to resolve. The engineers who built these systems are not unaware of this — they are deliberately exploiting one of the oldest and most powerful drives in the human brain.</p>

        <DopamineLoopDiagram />

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">The Shrinking Attention Span</h3>
        <p className="mb-6">Here's a statistic that should stop you in your tracks. In 2004, research measured the average human attention span — the amount of time a person could focus on a single task before their mind wandered — at approximately two and a half minutes. By 2012, it had dropped to 75 seconds. By 2024, Gloria Mark's research at the University of California placed it at just 47 seconds (Mark, 2023).</p>
        <p className="mb-6">That's a 68% decline in sustained focus over two decades. And the primary driver of that decline is the habitual consumption of short-form content — the kind served up by TikTok, Instagram Reels, and YouTube Shorts — which has trained an entire generation's brains to expect constant novelty and to disengage the moment stimulation slows down.</p>
        <p className="mb-6">The practical consequence for students is significant. Studying requires you to hold attention on a single, often difficult topic for extended periods, frequently without any immediate feedback that you're doing well. Every time you've reached for your phone when a concept got hard or a page got boring, you've been reinforcing a neural pathway that says: when focus feels hard, seek stimulation. Over time, that pathway gets faster and stronger. Which is why the phone wins more often than you'd like it to.</p>

        <ArticleQuote>The apps on your phone have had billions of dollars spent on making them more compelling than anything your textbook can offer. The playing field is not level. But it's not unwinnable.</ArticleQuote>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">Procrastination Is Not About Time Management</h3>
        <p className="mb-6">One of the most important reframes in recent research on procrastination is this: it is not a time management problem. It is an emotion regulation problem. People don't procrastinate because they don't know how to schedule their time. They procrastinate because the task in front of them generates an unpleasant feeling — anxiety, boredom, self-doubt, overwhelm — and the phone offers an immediate escape from that feeling (Sirois & Pychyl, 2013).</p>
        <p className="mb-6">This reframe matters because it changes the solution. If procrastination were purely about time management, a better calendar would fix it. But if it's about emotional avoidance, the solution involves building a different relationship with the discomfort of difficult work — learning to tolerate the feeling of not immediately understanding something, or of a task feeling impossibly large, long enough to make a start.</p>
        <p className="mb-6">Starting is almost always the hardest part. Research on the Zeigarnik effect — the brain's tendency to keep incomplete tasks in active memory — shows that once you've actually begun a task, your brain becomes more engaged with completing it. The activation energy required is at the beginning, not the middle. Which is why the most effective study strategies consistently involve making the start as small and friction-free as possible: not "I will study for three hours" but "I will open the textbook and read one paragraph."</p>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">Working With Your Brain</h3>
        <p className="mb-6">Understanding these mechanisms doesn't make them disappear, but it gives you a different set of levers. Rather than relying on willpower alone — which is a finite and unreliable resource — you can design your study environment to reduce the friction of starting and increase the friction of distraction.</p>
        <p className="mb-6">That might mean keeping your phone in another room during study sessions, or using an app that physically prevents access to distracting applications while you work. It might mean using a timer-based study method like the Pomodoro Technique, which uses the brain's natural preference for finite challenges to make sustained focus feel more manageable. It might mean working in a study group where social accountability replaces the social stimulation your brain was seeking from its phone.</p>
        <p className="mb-6">The goal isn't to fight your brain. It's to set up conditions where your brain's natural drives — the desire for reward, connection, and progress — are channelled toward your study goals rather than away from them.</p>

        <ProcrastinationQuiz />

        <ReferencesList items={[
          "Mark, G. (2023). Attention span: A groundbreaking way to restore balance, happiness and productivity. Hanover Square Press.",
          "Sirois, F. M., & Pychyl, T. A. (2013). Procrastination and the priority of short-term mood regulation: Consequences for future self. Social and Personality Psychology Compass, 7(2), 115–127. https://doi.org/10.1111/spc3.12011",
          "Zeigarnik, B. (1927). Das Behalten erledigter und unerledigter Handlungen [The retention of completed and uncompleted actions]. Psychologische Forschung, 9, 1–85.",
        ]} />
      </>
    ),
  },
  "how-to-actually-study": {
    title: "Your Phone Isn't Going Anywhere — So Here's How to Actually Study",
    subtitle: "Practical, research-backed strategies for building real focus in a world designed to break it.",
    date: "June 7, 2026",
    content: (
      <>
        <p className="mb-6">By now you know the problem. Screen time affects your grades. Your attention span has been quietly shrinking for years. Social media is engineered to hijack your brain's reward system. And procrastination isn't laziness — it's emotional avoidance dressed up as a time management problem.</p>
        <p className="mb-6">So what do you actually do about it?</p>
        <p className="mb-6">This article is about practical strategies that work — not vague advice like "use your phone less" or "stay focused," but specific, evidence-backed approaches you can implement today. Some of them are environmental. Some are behavioural. Some involve technology working for you instead of against you. All of them are grounded in how your brain actually operates.</p>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">1. Remove the Decision</h3>
        <p className="mb-6">Willpower is not a reliable study strategy. Research consistently shows that willpower is a finite resource that depletes over the course of a day, meaning that by the time you sit down to study in the evening, your capacity to resist distraction is already significantly lower than it was in the morning (Baumeister et al., 1998). The most effective approach is not to rely on willpower at all — it's to remove the decision entirely.</p>
        <p className="mb-6">The simplest version of this is physical separation: put your phone in a different room before your study session starts. Not face-down on the desk. Not on silent in your pocket. Another room. Research by Ward et al. (2017) found that the mere presence of a smartphone on a desk — even face-down and silent — measurably reduces available cognitive capacity because some portion of your brain is continuously allocating resources to monitoring and resisting it.</p>
        <p className="mb-6">If physical separation isn't possible because you need your phone for study apps, school platforms, or AI tools, the next best option is digital separation: use a focus app that blocks access to distracting apps while keeping essential ones available. This shifts the burden from your willpower to your environment, which is a far more reliable place to put it.</p>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">2. Use Time Structure</h3>
        <p className="mb-6">One of the most well-researched productivity techniques is the Pomodoro Technique, developed by Francesco Cirillo in the late 1980s. The method is simple: work with complete focus for 25 minutes, take a 5-minute break, and repeat. After four cycles, take a longer break of 15–30 minutes. The technique works because it converts an overwhelming open-ended task into a finite, manageable challenge — and your brain responds very differently to "study until you're done" versus "focus for just 25 minutes."</p>
        <p className="mb-6">The break periods are not optional or lazy. They are when your brain consolidates what it just processed and prepares for the next cycle. Used correctly, the Pomodoro Technique tends to produce more effective study output in less total time than unstructured marathon sessions.</p>
        <p className="mb-6">Time-blocking is a related approach that works at the level of your whole day or week. Rather than studying "when you get to it," you assign specific subjects to specific time slots in your calendar and treat them like appointments you can't cancel. The evidence for time-blocking as a productivity tool is strong — it dramatically reduces the decision fatigue associated with figuring out what to study and when, which is one of the most common precursors to procrastination.</p>

        <ArticleQuote>The goal isn't to study harder. It's to make focused study the path of least resistance, and distraction the path of most resistance.</ArticleQuote>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">3. Create Accountability</h3>
        <p className="mb-6">One of the most robust findings in behavioural psychology is that people are significantly more likely to follow through on commitments when they have made them to others — not just to themselves (Gollwitzer et al., 2009). Social accountability is a genuine force, and it's one you can deliberately harness for studying.</p>
        <p className="mb-6">Study groups are the traditional version of this. When someone else is expecting you to show up and be prepared, the psychological cost of not doing the work increases substantially. Even virtual study groups — people studying on video call without necessarily talking — create a sense of shared presence that reduces the pull of distraction.</p>
        <p className="mb-6">Goal-setting before a study session is another accountability mechanism. Before you open your books, write down specifically what you intend to accomplish in the session. Not "study biology" but "complete practice questions on Chapter 7 and summarise the key terms." This specific, written commitment creates a reference point your brain can evaluate against, making it much harder to feel satisfied with a session where you just skimmed a few pages.</p>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">4. Use Technology That Works for You</h3>
        <p className="mb-6">There's a certain irony in using your phone to manage your phone use — but the right tools genuinely help, and the evidence for them is solid. The key distinction is between tools that passively inform you about your usage (which tend to have limited impact) and tools that actively create structure and accountability (which are considerably more effective).</p>
        <p className="mb-6">App-blocking tools represent the most powerful intervention in this category. Rather than relying on you to resist opening Instagram mid-study session, they remove the option entirely for a set period. The psychological impact of this is significant: when the option is gone, the decision is already made, and your brain stops allocating resources to monitoring and suppressing the urge.</p>
        <p className="mb-6">FocusED is a free productivity app designed specifically for Australian high school students, developed by Headspace — Australia's National Youth Mental Health Foundation. It combines a focus timer with real-time study rooms where you can see how much others in your group are studying, an integrated app-blocking feature that prevents access to selected distracting apps during your session, and a to-do list that you fill in before each session to set your goals and track your accountability. The social element — competing to log the most focused study time against your friends — redirects the same peer-comparison drive that social media exploits, toward something that actually benefits you. You can download FocusED from the App Store or Google Play.</p>

        <FocusToolsComparison />

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">5. Reframe What "Starting" Means</h3>
        <p className="mb-6">The final strategy is the simplest and arguably the most powerful. The hardest part of any study session is sitting down and beginning. Your brain generates resistance in proportion to how large and difficult the task appears — which is why "study for my HSC exams" feels impossible and "read one page of the textbook" feels manageable.</p>
        <p className="mb-6">Make the entry point as small as possible. Tell yourself you only have to do five minutes. Open the document, write the first sentence, solve the first problem. Once you've started, the Zeigarnik effect kicks in — your brain is now invested in the incomplete task and generates its own motivation to continue. Most of the time, the five-minute commitment becomes thirty, because beginning was the only real barrier.</p>
        <p className="mb-6">This works especially well paired with a focus timer. Committing to just one 25-minute Pomodoro is far less confronting than committing to a three-hour study session. And once the first Pomodoro is done, starting the second is dramatically easier than starting the first was.</p>

        <h3 className="text-2xl font-display font-semibold mt-10 mb-4">Putting It Together</h3>
        <p className="mb-6">You don't need to implement all of these strategies at once. In fact, trying to overhaul everything simultaneously is itself a form of procrastination — a grand plan that never quite gets executed. Pick one approach, try it for a week, and notice what changes. The research suggests that environmental changes — removing your phone from the room, or using an app-blocking tool — produce the fastest and most reliable improvements, because they don't require sustained willpower.</p>
        <p className="mb-6">The phone isn't going anywhere. Neither is the internet, nor social media, nor the apps designed to keep you scrolling. What can change is the structure you build around your study time — and your understanding of what your brain actually needs to do its best work.</p>

        <ReferencesList items={[
          "Baumeister, R. F., Bratslavsky, E., Muraven, M., & Tice, D. M. (1998). Ego depletion: Is the active self a limited resource? Journal of Personality and Social Psychology, 74(5), 1252–1265.",
          "Cirillo, F. (2006). The Pomodoro Technique. FC Garage.",
          "Gollwitzer, P. M., Sheeran, P., Michalski, V., & Seifert, A. E. (2009). When intentions go public: Does social reality widen the intention–behavior gap? Psychological Science, 20(5), 612–618.",
          "Mark, G. (2023). Attention span: A groundbreaking way to restore balance, happiness and productivity. Hanover Square Press.",
          "Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017). Brain drain: The mere presence of one's own smartphone reduces available cognitive capacity. Journal of the Association for Consumer Research, 2(2), 140–154.",
        ]} />
      </>
    ),
  },
};

const allArticlesList = [
  {
    id: "hours-you-dont-see",
    title: "The Hours You Don't See",
    desc: "How your screen time is quietly costing you grades — and what the research actually says.",
    bg: "bg-[#F9E6D0]",
    filter: "filter-none",
  },
  {
    id: "more-than-distraction",
    title: "More Than Distraction",
    desc: "What heavy phone use is doing to your mental health — and why it matters beyond your grades.",
    bg: "bg-white",
    filter: "hue-rotate-[160deg]",
  },
  {
    id: "tiktok-over-textbooks",
    title: "Why Your Brain Chooses TikTok Over Textbooks",
    desc: "It's not laziness. It's neuroscience — and the apps on your phone know it better than you do.",
    bg: "bg-[rgba(0,55,62,0.13)]",
    filter: "hue-rotate-[-45deg]",
  },
  {
    id: "how-to-actually-study",
    title: "How to Actually Study",
    desc: "Practical, research-backed strategies for building real focus — plus the FocusED app.",
    bg: "bg-[#FDF7F1]",
    filter: "hue-rotate-[45deg]",
  },
];

export function ResourceArticle() {
  const { id } = useParams();
  const article = articlesData[id || ""] || articlesData["hours-you-dont-see"];

  const otherArticles = allArticlesList.filter((a) => a.id !== id);

  return (
    <div className="w-full flex justify-center py-16 px-4 md:px-0">
      <div className="max-w-[1240px] w-full flex flex-col lg:flex-row gap-16">

        <article className="flex-1 max-w-[800px]">
          <Link to="/resources" className="text-primary/60 hover:text-primary font-sans mb-8 flex items-center gap-2 transition-colors">
            ← Back to Resources
          </Link>
          <span className="font-display font-medium text-sm text-primary/60 tracking-wide uppercase">
            {article.date}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-[50px] text-primary leading-tight mt-4 mb-4">
            {article.title}
          </h1>
          <p className="font-sans text-xl text-primary/70 leading-relaxed mb-10">
            {article.subtitle}
          </p>

          <div className="font-sans text-lg md:text-[20px] text-primary leading-relaxed">
            {article.content}
          </div>
        </article>

        <aside className="w-full lg:w-[350px] shrink-0">
          <div className="sticky top-8 bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm">
            <h3 className="font-display font-semibold text-2xl text-primary mb-6 border-b border-gray-100 pb-4">
              More Resources
            </h3>
            <div className="flex flex-col gap-4">
              {otherArticles.map((other) => (
                <Link
                  key={other.id}
                  to={`/resources/${other.id}`}
                  className={`${other.bg} rounded-[30px] p-5 border border-gray-100 shadow-sm relative overflow-hidden group min-h-[210px] flex flex-col transition-transform duration-300 hover:-translate-y-0.5`}
                >
                  <h4 className="font-display font-semibold text-[24px] leading-tight text-primary max-w-[210px] relative z-10 mb-3">
                    {other.title}
                  </h4>
                  <p className="font-sans text-sm text-primary/90 max-w-[210px] relative z-10 line-clamp-3 mb-auto">
                    {other.desc}
                  </p>
                  <span className="border border-primary text-primary font-display font-semibold text-sm px-4 py-2 rounded-full w-fit hover:bg-primary hover:text-white transition-all relative z-10 mt-4">
                    Read Article
                  </span>
                  <div className="absolute right-[-18px] bottom-[-26px] w-[120px] h-[170px] transform group-hover:scale-105 transition-transform duration-300">
                    <img src={imgIllustration10} alt="" className={`w-full h-full object-contain rotate-180 -scale-y-100 ${other.filter}`} />
                  </div>
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
