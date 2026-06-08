import type { MouseEvent } from "react";
import { Link } from "react-router";
import imgIllustration from "./illustration.png";
import imgFocusedLogo from "../../../FocusED..png";

export default function Footer() {
  const handleDownloadClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const columns = [
    [
      { label: "Home", to: "/" },
      { label: "Resources", to: "/resources" },
      { label: "About", to: "/about" },
    ],
    [
      { label: "Privacy", to: "/privacy" },
      { label: "Our App", to: "/app" },
      { label: "Feedback", to: "/contact" },
    ],
    [
      { label: "Youtube", href: "https://google.com" },
      { label: "Facebook", href: "https://google.com" },
      { label: "Instagram", href: "https://google.com" },
    ],
  ];

  return (
    <footer className="w-full max-w-[1263px] mx-auto bg-[#00373e] rounded-[40px] sm:rounded-[50px] pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16 px-8 sm:px-12 lg:px-16 text-white flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 select-none">
      {/* Left Column: Brand Logo, Name and Navigation Links */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 w-full lg:w-auto">
        <h2
          className="text-5xl sm:text-6xl lg:text-[98px] font-extrabold leading-none font-['Bricolage_Grotesque',sans-serif] tracking-[0.5px]"
          style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
        >
          FocusED
        </h2>
        <img src={imgFocusedLogo} alt="FocusED Logo" className="h-28 sm:h-36 w-auto object-contain" />

        <div className="grid grid-cols-3 gap-x-8 sm:gap-x-16 gap-y-4">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3">
              {col.map((link) => {
                const isExternal = 'href' in link;
                const className = "cursor-pointer hover:text-gray-300 transition-colors text-[18px] font-normal font-['Bricolage_Grotesque',sans-serif] tracking-[0.5px] block";
                const style = { fontVariationSettings: '"opsz" 14, "wdth" 100' };

                if (isExternal) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={className}
                      style={style}
                    >
                      {link.label}
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={link.label}
                      to={link.to}
                      className={className}
                      style={style}
                    >
                      {link.label}
                    </Link>
                  );
                }
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: CTA Section (Illustration, Text, Download Button) */}
      <div className="w-full lg:w-auto flex justify-center lg:justify-end">
        <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12 max-w-xl">
          {/* Illustration */}
          <div className="w-[180px] h-[190px] sm:w-[228px] sm:h-[243px] shrink-0 relative">
            <img
              alt="Illustration"
              className="w-full h-full object-contain pointer-events-none"
              src={imgIllustration}
            />
          </div>

          {/* CTA Content */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6 max-w-[360px]">
            <p
              className="text-2xl sm:text-[38px] font-bold leading-tight font-['Bricolage_Grotesque',sans-serif] tracking-[0.5px]"
              style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
            >
              Download FocusED on both Play Store & App Store
            </p>

            <button
              onClick={handleDownloadClick}
              className="relative inline-flex items-center justify-center h-[54px] w-[227px] rounded-[100px] bg-white text-[#00373e] hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer font-semibold text-[20px] tracking-[0.5px] font-['Bricolage_Grotesque',sans-serif]"
              style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
