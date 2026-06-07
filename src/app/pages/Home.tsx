import { Link } from "react-router";
import imgIllustration10 from "../../imports/Home/ec7ec719c624ae29f50a46fe884bb915d0f47d75.png";
import imgIllustration3 from "../../imports/Home/a3d273411a9a667e81bf8bedcf244da4e139e67c.png";
import imgIllustration2 from "../../imports/Home/c9d50e6e52f66a493afc4225349c4604272f0a18.png";
import imgIllustration1 from "../../imports/Home/a2481e9d4634fd5a842373368dc9517605988a93.png";
import AppBlocker from "../../imports/AppBlocker-1";

export function Home() {
  return (
    <div className="w-full flex flex-col items-center pb-24 space-y-32">
      
      {/* Hero Section */}
      <section className="w-full max-w-[1240px] px-4 md:px-0 mt-8 relative">
        <div className="bg-[#F9E6D0] w-full rounded-[70px] overflow-hidden relative flex flex-col items-center justify-center py-[150px] min-h-[668px]">
          {/* Background Illustrations */}
          <div className="absolute left-[-47px] top-[108px] w-[380px] h-[618px] opacity-80 lg:opacity-100 hidden md:block">
            <img src={imgIllustration2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute right-0 top-0 w-[406px] h-[668px] opacity-80 lg:opacity-100 hidden md:block">
            <img src={imgIllustration1} alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] px-8">
            <h1 className="font-display font-bold text-5xl md:text-[70px] leading-[1.1] text-primary mb-6">
              Your phone is winning.<br/>Take back your focus.
            </h1>
            <p className="font-sans text-xl md:text-[24px] text-primary mb-10">
              Commissioned by Headspace
            </p>
            <Link to="/resources" className="bg-primary text-white font-display font-semibold text-xl px-10 py-4 rounded-full hover:bg-opacity-90 transition-all">
              Resources
            </Link>
          </div>
        </div>
      </section>

      {/* About / Problem Section */}
      <section className="w-full max-w-[1240px] px-4 md:px-0 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 flex flex-col max-w-[480px]">
          <span className="font-display font-medium text-sm uppercase text-primary mb-6 tracking-wide">
            What is the Problem?
          </span>
          <h2 className="font-display font-bold text-4xl md:text-[40px] leading-[1.1] text-primary mb-8">
            Australian students are losing the battle for their own attention.
          </h2>
          <div className="font-sans text-lg md:text-[22px] leading-relaxed text-primary space-y-6">
            <p>
              The data is clear. screen time is rising, academic performance is falling, and the tools students need to address this have never existed.
            </p>
            <p>
              But this isn't about blame. It's about understanding what's happening, why it's happening, and giving every student in the country a genuine way to do something about it.
            </p>
          </div>
        </div>
        <div className="flex-1 w-full max-w-[550px] aspect-square lg:aspect-auto lg:h-[564px] bg-primary rounded-[60px] relative overflow-hidden flex items-end justify-center">
          <div className="w-[415px] h-[493px] relative z-10">
            <img src={imgIllustration3} alt="Distracted student illustration" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full max-w-[1240px] px-4 md:px-0 flex flex-col items-center">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-display font-medium text-sm uppercase text-primary mb-4 tracking-wide">
            The Solution
          </span>
          <h2 className="font-display font-bold text-4xl md:text-[52px] text-primary mb-6">
            Resources
          </h2>
          <p className="font-sans text-xl md:text-[22px] text-primary max-w-[800px]">
            Read our latest research to understand where the problem stems from and how to fight against it!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Card 1 */}
          <div className="bg-[#F9E6D0] rounded-[60px] p-12 flex flex-col h-[455px] relative overflow-hidden group">
            <h3 className="font-display font-semibold text-3xl md:text-[40px] leading-tight text-primary max-w-[360px] relative z-10 mb-6">
              Mindfulness & Meditation
            </h3>
            <p className="font-sans text-lg md:text-[20px] text-primary max-w-[300px] relative z-10 mb-auto">
              Guided meditation sessions and stress management techniques.
            </p>
            <Link to="/resources/mindfulness" className="border border-primary text-primary font-display font-semibold text-xl px-8 py-3 rounded-full w-fit hover:bg-primary hover:text-white transition-all relative z-10 mt-6">
              Learn more
            </Link>
            <div className="absolute right-[-20px] bottom-[-20px] w-[230px] h-[320px] transform group-hover:scale-105 transition-transform">
              <img src={imgIllustration10} alt="" className="w-full h-full object-contain rotate-180 -scale-y-100" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[60px] p-12 flex flex-col h-[455px] relative overflow-hidden group border border-gray-100 shadow-sm">
            <h3 className="font-display font-semibold text-3xl md:text-[40px] leading-tight text-primary max-w-[360px] relative z-10 mb-6">
              One-on-One Therapy
            </h3>
            <p className="font-sans text-lg md:text-[20px] text-primary max-w-[300px] relative z-10 mb-auto">
              Virtual and in-person therapy sessions with licensed professionals.
            </p>
            <Link to="/resources/therapy" className="border border-primary text-primary font-display font-semibold text-xl px-8 py-3 rounded-full w-fit hover:bg-primary hover:text-white transition-all relative z-10 mt-6">
              Learn more
            </Link>
            <div className="absolute right-[-20px] bottom-[-20px] w-[230px] h-[320px] transform group-hover:scale-105 transition-transform">
              <img src={imgIllustration10} alt="" className="w-full h-full object-contain rotate-180 -scale-y-100 filter hue-rotate-[160deg]" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[rgba(0,55,62,0.13)] rounded-[60px] p-12 flex flex-col h-[455px] relative overflow-hidden group">
             <h3 className="font-display font-semibold text-3xl md:text-[40px] leading-tight text-primary max-w-[360px] relative z-10 mb-6">
              Digital Detox Guides
            </h3>
            <p className="font-sans text-lg md:text-[20px] text-primary max-w-[300px] relative z-10 mb-auto">
              Actionable steps to disconnect from screens and reconnect with reality.
            </p>
            <Link to="/resources/detox" className="border border-primary text-primary font-display font-semibold text-xl px-8 py-3 rounded-full w-fit hover:bg-primary hover:text-white transition-all relative z-10 mt-6">
              Learn more
            </Link>
            <div className="absolute right-[-20px] bottom-[-20px] w-[230px] h-[320px] transform group-hover:scale-105 transition-transform">
              <img src={imgIllustration10} alt="" className="w-full h-full object-contain rotate-180 -scale-y-100 filter hue-rotate-[-45deg]" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FDF7F1] rounded-[60px] p-12 flex flex-col h-[455px] relative overflow-hidden group border border-gray-100 shadow-sm">
            <h3 className="font-display font-semibold text-3xl md:text-[40px] leading-tight text-primary max-w-[360px] relative z-10 mb-6">
              Focus Workshops
            </h3>
            <p className="font-sans text-lg md:text-[20px] text-primary max-w-[300px] relative z-10 mb-auto">
              Interactive sessions designed to build better study habits and routines.
            </p>
            <Link to="/resources/workshops" className="border border-primary text-primary font-display font-semibold text-xl px-8 py-3 rounded-full w-fit hover:bg-primary hover:text-white transition-all relative z-10 mt-6">
              Learn more
            </Link>
            <div className="absolute right-[-20px] bottom-[-20px] w-[230px] h-[320px] transform group-hover:scale-105 transition-transform">
              <img src={imgIllustration10} alt="" className="w-full h-full object-contain rotate-180 -scale-y-100 filter hue-rotate-[45deg]" />
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="w-full max-w-[1240px] px-4 md:px-0">
        <div className="bg-white rounded-[60px] p-12 lg:p-24 flex flex-col lg:flex-row items-end gap-16 lg:gap-24 relative overflow-hidden shadow-sm border border-gray-50">
          <div className="flex-1 flex flex-col z-10">
            <span className="font-display font-medium text-sm uppercase text-primary mb-6 tracking-wide">
              Our App
            </span>
            <h2 className="font-display font-bold text-4xl md:text-[40px] leading-[1.1] text-primary mb-8 max-w-[560px]">
              Study together. Block distractions. Actually focus.
            </h2>
            <p className="font-sans text-lg md:text-[22px] leading-relaxed text-primary mb-12 max-w-[480px]">
              The FocusED app turns awareness into action with a competitive timer, real-time study rooms, a personalised to-do list, and an app blocker that activates the moment your session starts!
            </p>
            <Link to="/app" className="bg-primary text-white font-display font-semibold text-xl px-10 py-4 rounded-full hover:bg-opacity-90 transition-all w-fit">
              Download
            </Link>
          </div>
          <div className="flex-1 relative z-10 flex justify-center lg:justify-end">
             <div className="w-[393px] h-[426px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full">
                  <AppBlocker />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-[1240px] px-4 md:px-0 flex flex-col items-center">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-display font-medium text-sm uppercase text-primary mb-4 tracking-wide">
            Contact
          </span>
          <h2 className="font-display font-bold text-4xl md:text-[52px] text-primary mb-6">
            We're Here to Support You
          </h2>
          <p className="font-sans text-xl md:text-[22px] text-primary max-w-[600px]">
            Whether you have questions, need help getting started, or want to give us feedback on our resources, reach out anytime.
          </p>
        </div>

        <div className="bg-white rounded-[50px] p-12 lg:p-[70px] flex flex-col lg:flex-row gap-16 w-full shadow-sm border border-gray-50">
          <div className="flex-1 flex flex-col gap-8">
            <h3 className="font-display font-semibold text-3xl text-primary mb-2">
              Contact Details:
            </h3>
            <div className="flex flex-col gap-6 font-sans text-xl text-primary">
              <p>
                <span className="font-bold">Email:</span> Contact@focusED.com
              </p>
              <p>
                <span className="font-bold">Phone:</span> +1 (123) 456-7890
              </p>
              <p>
                <span className="font-bold">Address:</span> 123 Wellness Way, Calm City, CA 90210
              </p>
            </div>
          </div>
          
          <div className="flex-1 bg-[#FDF7F1] rounded-[50px] p-10 lg:p-12 flex flex-col items-center">
            <h3 className="font-display font-semibold text-3xl text-primary mb-12 text-center w-full">
              Send Us a Message
            </h3>
            <form className="w-full max-w-[450px] flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col border-b border-primary pb-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-none outline-none font-sans text-xl text-primary placeholder:text-primary/30"
                />
              </div>
              <div className="flex flex-col border-b border-primary pb-2">
                <input 
                  type="text" 
                  placeholder="Message" 
                  className="bg-transparent border-none outline-none font-sans text-xl text-primary placeholder:text-primary/30"
                />
              </div>
              <button className="bg-primary text-white font-display font-semibold text-xl px-10 py-4 rounded-full hover:bg-opacity-90 transition-all w-full mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
    </div>
  );
}
