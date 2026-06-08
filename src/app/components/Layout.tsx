import { useEffect } from "react";
import { Link, Outlet, ScrollRestoration, useLocation } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import Footer from "./Footer";

const imgFooterFrame = new URL("../../../Frame 342441.png", import.meta.url).href;
const imgFocusedLogo = new URL("../../../FocusED..png", import.meta.url).href;

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Determine the page title suffix based on the pathname
    const path = location.pathname;
    let titleSuffix = "Home";

    if (path === "/about") {
      titleSuffix = "About";
    } else if (path === "/app") {
      titleSuffix = "Our App";
    } else if (path === "/contact") {
      titleSuffix = "Feedback";
    } else if (path === "/resources") {
      titleSuffix = "Resources";
    } else if (path.startsWith("/resources/")) {
      // For resource articles, capitalize the words from the slug or use "Article"
      const slug = path.replace("/resources/", "");
      titleSuffix = slug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else if (path === "/privacy") {
      titleSuffix = "Privacy";
    }

    document.title = `FocusED - ${titleSuffix}`;
  }, [location]);

  return (
    <>
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
          <div key={location.pathname} className="route-fade-slide">
            <Outlet />
          </div>
        </main>

        <div className="w-full flex justify-center py-16 mt-24">
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
