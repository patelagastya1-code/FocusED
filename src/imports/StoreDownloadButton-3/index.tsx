import svgPaths from "./svg-5mhfcj4075";

function Playstore() {
  return (
    <div className="absolute h-[24px] left-[7px] top-[7px] w-[21px]" data-name="Playstore">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
        <g id="Playstore">
          <path d={svgPaths.p3e6f9e80} fill="var(--fill-0, #EA4335)" id="path94" />
          <path d={svgPaths.p8018300} fill="var(--fill-0, #FBBC04)" id="path98" />
          <path d={svgPaths.p17386100} fill="var(--fill-0, #4285F4)" id="path102" />
          <path d={svgPaths.p25fa7f00} fill="var(--fill-0, #34A853)" id="path106" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[35px] top-[4px]" data-name="Content">
      <p className="[word-break:break-word] font-['Product_Sans:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[10px] text-black uppercase w-[min-content]">GET IT ON</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[15px] relative w-[74px]" data-name="path90">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 15">
              <path d={svgPaths.p3d8e9c00} fill="var(--fill-0, black)" id="path90" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StoreDownloadButton() {
  return (
    <div className="bg-white border border-black border-solid overflow-clip relative rounded-[6px] size-full" data-name="Store download button">
      <Playstore />
      <Content />
    </div>
  );
}