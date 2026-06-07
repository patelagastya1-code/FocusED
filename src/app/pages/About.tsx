import imgIllustration3 from "../../imports/Home/a3d273411a9a667e81bf8bedcf244da4e139e67c.png";

export function About() {
  return (
    <div className="w-full flex flex-col items-center py-24 px-4 md:px-0 space-y-24">
      
      <section className="w-full max-w-[1240px] text-center flex flex-col items-center">
        <span className="font-display font-medium text-sm uppercase text-primary mb-6 tracking-wide">
          Our Mission
        </span>
        <h1 className="font-display font-bold text-5xl md:text-[70px] leading-[1.1] text-primary mb-8 max-w-[900px]">
          We believe attention is your most valuable asset.
        </h1>
        <p className="font-sans text-xl md:text-[24px] text-primary max-w-[800px] leading-relaxed">
          FocusED was born out of a simple observation: students aren't failing because they lack intelligence or motivation. They are failing because the modern digital ecosystem is engineered to steal their focus.
        </p>
      </section>

      <section className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-16 lg:gap-24 bg-white rounded-[60px] p-12 md:p-24 shadow-sm border border-gray-50">
        <div className="flex-1 w-full max-w-[500px] aspect-square lg:aspect-auto lg:h-[500px] bg-primary rounded-[40px] relative overflow-hidden flex items-center justify-center">
          <img src={imgIllustration3} alt="Distracted student" className="w-[80%] h-auto object-contain" />
        </div>
        <div className="flex-1 flex flex-col">
          <h2 className="font-display font-bold text-4xl md:text-[45px] leading-[1.1] text-primary mb-8">
            The Story Behind FocusED
          </h2>
          <div className="font-sans text-lg md:text-[22px] leading-relaxed text-primary space-y-6">
            <p>
              In 2024, a group of educators and psychologists noticed a sharp decline in deep work capabilities among university students. Screen time was up, but meaningful engagement was down.
            </p>
            <p>
              We partnered with Headspace to commission research into the exact mechanisms of digital distraction. What we found was startling: it wasn't about willpower. It was about brain chemistry fighting against billion-dollar algorithms.
            </p>
            <p>
              FocusED was created to level the playing field. By combining therapeutic resources with practical software tools, we give students a genuine way to fight back.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1000px] text-center">
        <h2 className="font-display font-bold text-3xl md:text-[40px] text-primary mb-8">
          Backed by Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-[#FDF7F1] p-10 rounded-[40px] flex flex-col items-center">
              <span className="font-display font-bold text-[60px] text-primary">85%</span>
              <p className="font-sans text-xl text-primary">of students report feeling "addicted" to their devices during study sessions.</p>
           </div>
           <div className="bg-[rgba(0,55,62,0.13)] p-10 rounded-[40px] flex flex-col items-center">
              <span className="font-display font-bold text-[60px] text-primary">2.5x</span>
              <p className="font-sans text-xl text-primary">increase in continuous focus time after using FocusED methods for 30 days.</p>
           </div>
        </div>
      </section>

    </div>
  );
}
