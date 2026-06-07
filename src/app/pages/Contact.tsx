export function Contact() {
  return (
    <div className="w-full flex justify-center py-24 px-4 md:px-0">
      <div className="max-w-[1240px] w-full flex flex-col items-center">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-display font-medium text-sm uppercase text-primary mb-4 tracking-wide">
            Get in touch
          </span>
          <h1 className="font-display font-bold text-5xl md:text-[60px] text-primary mb-6">
            We're Here to Support You
          </h1>
          <p className="font-sans text-xl md:text-[22px] text-primary max-w-[600px]">
            Whether you have questions, need help getting started, or want to give us feedback on our resources, reach out anytime.
          </p>
        </div>

        <div className="bg-white rounded-[50px] p-12 lg:p-[70px] flex flex-col lg:flex-row gap-16 w-full shadow-sm border border-gray-50">
          <div className="flex-1 flex flex-col gap-8">
            <h3 className="font-display font-semibold text-3xl text-primary mb-2">
              Contact Details:
            </h3>
            <div className="flex flex-col gap-8 font-sans text-xl text-primary">
              <div>
                <p className="font-bold mb-1 text-2xl">Email</p>
                <p>Contact@focusED.com</p>
                <p className="text-sm opacity-70 mt-1">We aim to respond within 24 hours.</p>
              </div>
              <div>
                <p className="font-bold mb-1 text-2xl">Phone</p>
                <p>+1 (123) 456-7890</p>
                <p className="text-sm opacity-70 mt-1">Mon-Fri, 9am - 5pm PST.</p>
              </div>
              <div>
                <p className="font-bold mb-1 text-2xl">Address</p>
                <p>123 Wellness Way,<br/>Calm City, CA 90210</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#F9E6D0] rounded-[24px]">
              <h4 className="font-display font-bold text-xl mb-2">Crisis Support</h4>
              <p className="font-sans text-sm mb-0">If you are experiencing a mental health crisis, please call your local emergency services or the National Suicide Prevention Lifeline immediately.</p>
            </div>
          </div>
          
          <div className="flex-1 bg-[#FDF7F1] rounded-[50px] p-10 lg:p-12 flex flex-col items-center">
            <h3 className="font-display font-semibold text-3xl text-primary mb-12 text-center w-full">
              Send Us a Message
            </h3>
            <form className="w-full max-w-[450px] flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col border-b border-primary pb-2">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="bg-transparent border-none outline-none font-sans text-xl text-primary placeholder:text-primary/30"
                />
              </div>
              <div className="flex flex-col border-b border-primary pb-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-none outline-none font-sans text-xl text-primary placeholder:text-primary/30"
                />
              </div>
              <div className="flex flex-col border-b border-primary pb-2">
                <select className="bg-transparent border-none outline-none font-sans text-xl text-primary/70 appearance-none">
                  <option value="">Select a topic...</option>
                  <option value="app">App Support</option>
                  <option value="therapy">Therapy Inquiry</option>
                  <option value="feedback">General Feedback</option>
                </select>
              </div>
              <div className="flex flex-col border-b border-primary pb-2">
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="bg-transparent border-none outline-none font-sans text-xl text-primary placeholder:text-primary/30 resize-none"
                />
              </div>
              <button className="bg-primary text-white font-display font-semibold text-xl px-10 py-4 rounded-full hover:bg-opacity-90 transition-all w-full mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
