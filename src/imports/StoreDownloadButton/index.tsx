import svgPaths from "./svg-9utee5omm5";

function Apple() {
  return (
    <div className="absolute h-[24px] left-[7px] top-[7px] w-[20px]" data-name="Apple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g id="Apple">
          <path d={svgPaths.p39414c00} fill="var(--fill-0, black)" id="<Path>" />
          <path d={svgPaths.p279a94f0} fill="var(--fill-0, black)" id="<Path>_2" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-start left-[35px] not-italic text-black top-1/2 w-[78px]" data-name="Content">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[9px] relative shrink-0 text-[9px] w-full">Download on the</p>
      <p className="font-['SF_Compact_Display:Medium',sans-serif] leading-none relative shrink-0 text-[18px] tracking-[-0.47px] w-full">App Store</p>
    </div>
  );
}

export default function StoreDownloadButton() {
  return (
    <div className="bg-white border border-black border-solid overflow-clip relative rounded-[6px] size-full" data-name="Store download button">
      <Apple />
      <Content />
    </div>
  );
}