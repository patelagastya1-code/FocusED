import { Link, Outlet, ScrollRestoration } from "react-router";
import { useEffect } from "react";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FAFAFA] overflow-x-hidden">
      <ScrollRestoration />
      <header className="w-full max-w-[1440px] px-8 md:px-[100px] py-8 flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-12 text-primary font-display font-regular text-lg">
          <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <Link to="/about" className="hover:opacity-80 transition-opacity">About</Link>
          <Link to="/app" className="hover:opacity-80 transition-opacity">Our App</Link>
        </div>
        
        <Link to="/" className="font-display font-bold text-4xl md:text-[50px] leading-none text-primary absolute left-1/2 -translate-x-1/2">
          FocusED
        </Link>

        <div className="flex items-center gap-8 lg:gap-12 text-primary font-display font-regular text-lg">
          <Link to="/contact" className="hover:opacity-80 transition-opacity">Contact</Link>
          <Link to="/resources" className="hover:opacity-80 transition-opacity">Resources</Link>
          <Link to="/privacy" className="hover:opacity-80 transition-opacity">Privacy</Link>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1440px] flex flex-col">
        <Outlet />
      </main>

      <footer className="w-full max-w-[1440px] px-8 md:px-[100px] py-16 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="bg-white rounded-[40px] p-12 flex-1 flex flex-col gap-6 w-full max-w-[550px]">
             <h3 className="font-display font-bold text-[32px] text-primary">FocusED</h3>
             <div className="flex gap-16 font-sans text-primary text-lg">
                <div className="flex flex-col gap-4">
                  <Link to="/about" className="hover:underline">About</Link>
                  <Link to="/resources" className="hover:underline">Services</Link>
                  <Link to="/contact" className="hover:underline">Therapists</Link>
                  <Link to="/resources" className="hover:underline">Resources</Link>
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="#" className="hover:underline">Instagram</a>
                  <a href="#" className="hover:underline">Facebook</a>
                  <a href="#" className="hover:underline">YouTube</a>
                  <a href="#" className="hover:underline">LinkedIn</a>
                </div>
                <div className="flex flex-col gap-4">
                  <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                </div>
             </div>
          </div>

          <div className="bg-primary text-white rounded-[40px] p-12 flex-1 flex flex-col justify-between h-full min-h-[300px] w-full max-w-[550px] relative overflow-hidden">
            <h3 className="font-display font-bold text-[40px] leading-tight max-w-[300px] z-10 relative">
              Download FocusED on both Play Store & App Store
            </h3>
            
            {/* Decorative elements from footer in figma */}
            <div className="absolute top-8 right-8 text-[#54A076]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></svg>
            </div>
            <div className="absolute bottom-32 right-12 text-[#E9DA74]">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></svg>
            </div>
            
            <button className="bg-white text-primary rounded-full py-4 px-8 font-display font-semibold text-xl w-fit mt-8 z-10 relative hover:bg-gray-100 transition-colors">
              Find Support Now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
