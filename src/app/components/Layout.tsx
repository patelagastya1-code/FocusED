import { Link, Outlet, ScrollRestoration } from "react-router";
import imgFooterFrame from "../../../Frame 342441.png";
import imgFocusedLogo from "../../../FocusED..png";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FAFAFA] overflow-x-hidden scale-90 origin-top">
      <ScrollRestoration />
      <header className="w-full max-w-[1440px] px-8 md:px-[100px] py-8 flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-12 text-primary font-display font-regular text-lg">
          <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <Link to="/about" className="hover:opacity-80 transition-opacity">About</Link>
          <Link to="/app" className="hover:opacity-80 transition-opacity">Our App</Link>
        </div>
        
        <Link to="/" className="hover:opacity-80 transition-opacity absolute left-1/2 -translate-x-1/2">
          <img src={imgFocusedLogo} alt="FocusED Logo" className="h-16 md:h-20 w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-8 lg:gap-12 text-primary font-display font-regular text-lg">
          <Link to="/contact" className="hover:opacity-80 transition-opacity">Feedback</Link>
          <Link to="/resources" className="hover:opacity-80 transition-opacity">Resources</Link>
          <Link to="/privacy" className="hover:opacity-80 transition-opacity">Privacy</Link>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1440px] flex flex-col">
        <Outlet />
      </main>

      <footer className="w-full max-w-[1440px] px-8 md:px-[100px] py-16 mt-24">
        <div className="relative rounded-[60px] overflow-hidden min-h-[360px] shadow-sm">
          <img src={imgFooterFrame} alt="Footer illustration" className="absolute inset-0 w-full h-full object-cover" />

          <div className="absolute inset-y-0 left-0 w-full md:w-[44%] bg-primary/95 text-white p-10 md:p-16 flex flex-col justify-center gap-8">
            <div className="max-w-[360px]">
              <h2 className="font-display font-bold text-5xl md:text-[60px] leading-none">FocusED</h2>
              <p className="font-sans text-base text-white/80 mt-4">
                Navigate the site with real links placed over the footer art.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-base font-sans">
              <Link to="/" className="block hover:text-[#F9E6D0] transition-colors">Home</Link>
              <Link to="/privacy" className="block hover:text-[#F9E6D0] transition-colors">Privacy</Link>
              <Link to="/resources" className="block hover:text-[#F9E6D0] transition-colors">Resources</Link>
              <Link to="/app" className="block hover:text-[#F9E6D0] transition-colors">Our App</Link>
              <Link to="/about" className="block hover:text-[#F9E6D0] transition-colors">About</Link>
              <Link to="/contact" className="block hover:text-[#F9E6D0] transition-colors">Feedback</Link>
              <a href="https://google.com" target="_blank" rel="noreferrer" className="block hover:text-[#F9E6D0] transition-colors">YouTube</a>
              <a href="https://google.com" target="_blank" rel="noreferrer" className="block hover:text-[#F9E6D0] transition-colors">Facebook</a>
              <a href="https://google.com" target="_blank" rel="noreferrer" className="block hover:text-[#F9E6D0] transition-colors">Instagram</a>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 w-full md:w-[56%] flex items-center justify-center p-10 md:p-16">
            <div className="w-full max-w-[420px] bg-white/0"></div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
