import { Link } from "react-router";
import imgIllustration10 from "../../imports/Home/ec7ec719c624ae29f50a46fe884bb915d0f47d75.png";

export function Resources() {
  const articles = [
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

  return (
    <div className="w-full flex flex-col items-center py-24 space-y-16">
      <div className="text-center flex flex-col items-center">
        <span className="font-display font-medium text-sm uppercase text-primary mb-4 tracking-wide">
          Our Collection
        </span>
        <h1 className="font-display font-bold text-5xl md:text-[60px] text-primary mb-6">
          Read our resources!
        </h1>
        <p className="font-sans text-xl md:text-[22px] text-primary max-w-[800px] text-center">
          Explore our expert-backed resources designed to help you understand your phone habits and reclaim your attention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1240px] px-4 md:px-0">
        {articles.map((article) => (
          <div key={article.id} className={`${article.bg} rounded-[60px] p-12 flex flex-col h-[455px] relative overflow-hidden group border border-gray-100 shadow-sm`}>
            <h3 className="font-display font-semibold text-3xl md:text-[40px] leading-tight text-primary max-w-[360px] relative z-10 mb-6">
              {article.title}
            </h3>
            <p className="font-sans text-lg md:text-[20px] text-primary max-w-[300px] relative z-10 mb-auto">
              {article.desc}
            </p>
            <Link to={`/resources/${article.id}`} className="border border-primary text-primary font-display font-semibold text-xl px-8 py-3 rounded-full w-fit hover:bg-primary hover:text-white transition-all relative z-10 mt-6">
              Read Article
            </Link>
            <div className="absolute right-[-20px] bottom-[-20px] w-[230px] h-[320px] transform group-hover:scale-105 transition-transform">
              <img src={imgIllustration10} alt="" className={`w-full h-full object-contain rotate-180 -scale-y-100 ${article.filter}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
