import imgTopIllustration from "../../../Frame 342439.png";
import imgBottomIllustration from "../../../Illustration_11.png";

export function About() {
  return (
    <div className="w-full flex flex-col items-center py-24 px-4 md:px-0 space-y-24">
      <section className="w-full max-w-[1240px] bg-white rounded-[60px] p-10 md:p-16 shadow-sm border border-gray-50 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 lg:max-w-[620px]">
            <span className="font-display font-medium text-sm uppercase text-primary mb-20 tracking-wide">
              About Us
            </span>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.05] text-primary mb-8">
              Who are we?
            </h1>
            <div className="font-sans text-lg md:text-[22px] leading-relaxed text-primary space-y-6">
              <p>
                FocusED is a digital awareness campaign and productivity platform built for Australian high school students, commissioned by Headspace — Australia's National Youth Mental Health Foundation.
              </p>
              <p>
                We built FocusED because the problem is real and the existing tools aren't enough. Australian teenagers average six and a half hours of non-educational screen time every day. Attention spans have declined by 68% in two decades. And the apps engineered to keep you scrolling are getting better at their job every year — while the resources available to help students push back have barely kept pace.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-[520px] rounded-[40px] overflow-hidden">
            <img src={imgTopIllustration} alt="About us illustration" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1240px] bg-[#F9E6D0] rounded-[60px] p-10 md:p-16 shadow-sm border border-[#F2E3CC] overflow-hidden relative min-h-[600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col items-start">
            <h2 className="font-display font-bold text-4xl md:text-[45px] leading-[1.05] text-primary mb-8 max-w-[380px]">
              Why does FocusED Exist?
            </h2>
          </div>
          
          <div className="font-sans text-lg md:text-[22px] leading-relaxed text-primary space-y-8">
            <p>
              FocusED exists to close that gap. Not by telling you to put your phone down and hope for the best, but by giving you the research to understand what's actually happening to your focus, and the tools to do something about it.
            </p>
            <p>
              The platform has two parts. The website you're reading now publishes science-backed articles and data-driven content that makes the research accessible — no academic journals, no jargon, just clear information that's actually useful. The FocusED app gives you a focus timer, real-time study rooms to keep you accountable alongside your peers, integrated app-blocking to remove distractions during your sessions, and a to-do list to set your goals before every study block. This combination makes sure students can both understand why distraction happens and take immediate action to protect their focus.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-[560px] h-[560px] overflow-hidden">
          <img src={imgBottomIllustration} alt="FocusED exists illustration" className="w-full h-full object-contain" />
        </div>
      </section>
    </div>
  );
}
