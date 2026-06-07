import imgFrame342446 from "../../../Frame 342446.png";
import AppStoreButton from "../../imports/StoreDownloadButton-2";
import PlayStoreButton from "../../imports/StoreDownloadButton-3";

export function AppPage() {
  return (
    <div className="w-full flex flex-col items-center py-24 space-y-24 px-4 md:px-0">

      <section className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 flex flex-col max-w-[600px]">
          <span className="font-display font-medium text-sm uppercase text-primary mb-6 tracking-wide">
            Introducing FocusED App
          </span>
          <h1 className="font-display font-bold text-5xl md:text-[64px] leading-[1.1] text-primary mb-8">
            Your pocket-sized focus companion.
          </h1>
          <p className="font-sans text-xl md:text-[24px] leading-relaxed text-primary mb-10">
            We've taken everything we know about attention span recovery and built it into an app that actively fights distraction.
          </p>
          <div className="flex gap-4">
             <div className="w-[130px] h-[40px]">
               <AppStoreButton />
             </div>
             <div className="w-[130px] h-[40px]">
               <PlayStoreButton />
             </div>
          </div>
        </div>
        <div className="flex-none w-full md:w-[450px] lg:w-[580px] relative flex justify-center lg:justify-end">
          <div className="w-full overflow-hidden flex items-end justify-center">
            <img src={imgFrame342446} alt="FocusED app screens" className="block max-w-full h-auto object-contain w-[95%] md:w-[120%] lg:w-[135%]" />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1240px] bg-[#F9E6D0] rounded-[60px] p-12 md:p-24">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-[50px] text-primary">Core Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[40px] p-8 flex flex-col shadow-sm">
             <h3 className="font-display font-bold text-2xl text-primary mb-4">Competitive Timers</h3>
             <p className="font-sans text-lg text-primary">Study rooms with live leaderboards to keep you motivated and accountable.</p>
          </div>
          <div className="bg-white rounded-[40px] p-8 flex flex-col shadow-sm">
             <h3 className="font-display font-bold text-2xl text-primary mb-4">App Blocker</h3>
             <p className="font-sans text-lg text-primary">Automatically activates during sessions, blocking distracting apps so you can focus.</p>
          </div>
          <div className="bg-white rounded-[40px] p-8 flex flex-col shadow-sm">
             <h3 className="font-display font-bold text-2xl text-primary mb-4">Personalized To-Do List</h3>
             <p className="font-sans text-lg text-primary">Your tasks saved to your account and accessible from any device.</p>
          </div>
          <div className="bg-white rounded-[40px] p-8 flex flex-col shadow-sm">
             <h3 className="font-display font-bold text-2xl text-primary mb-4">Invite Friends</h3>
             <p className="font-sans text-lg text-primary">Compete with friends to see who studies the most and climb the leaderboard together.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
