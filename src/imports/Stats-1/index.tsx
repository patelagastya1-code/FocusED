import svgPaths from "./svg-kx838xbbe1";
import imgUntitledDesign411 from "./eba9b2dd42448fdf5acbabbae154f66e86c20643.png";

function Button() {
  return (
    <div className="bg-[#191c1d] flex-[1_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[14px]">Leaderboard</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f8f9fa] flex-[1_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[14px]">My Stats</p>
        </div>
      </div>
    </div>
  );
}

function ToggleBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex items-start left-[18px] p-[2px] right-[17px] top-[84px]" data-name="Toggle Bar">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none shadow-[4px_4px_0px_0px_#191c1d]" />
      <Button />
      <div className="bg-[#191c1d] relative self-stretch shrink-0 w-[2px]" data-name="Vertical Divider" />
      <Button1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-[97px]" data-name="Heading 3">
      <div aria-hidden className="absolute border-[#191c1d] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#191c1d] text-[18px] top-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[21.6px]">Year 11 RHS</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 right-[23px] top-0" data-name="Container">
      <Heading />
    </div>
  );
}

function SectionSubjectsGrid() {
  return (
    <div className="absolute h-[27px] left-[20px] right-[270px] top-[207px]" data-name="Section - Subjects Grid">
      <Container />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#b2f746] content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center left-[27px] px-[26px] py-[10px] top-[141px] w-[104px]" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">Daily</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#b2f746] content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center left-[145px] px-[26px] py-[10px] top-[141px] w-[104px]" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">Weekly</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#b2f746] content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center left-[263px] px-[26px] py-[10px] top-[141px] w-[104px]" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">Monthly</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[27px] top-[141px]">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%-41.5px)] rounded-[50px] top-[calc(50%-209px)] w-[48px]" data-name="Frame" />;
}

function Button5() {
  return (
    <div className="bg-[#191c1d] flex-[1_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[14px]">Leaderboard</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f8f9fa] flex-[1_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[14px]">My Stats</p>
        </div>
      </div>
    </div>
  );
}

function ToggleBar1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex items-start left-[18px] p-[2px] right-[17px] top-[84px]" data-name="Toggle Bar">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none shadow-[4px_4px_0px_0px_#191c1d]" />
      <Button5 />
      <div className="bg-[#191c1d] relative self-stretch shrink-0 w-[2px]" data-name="Vertical Divider" />
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#acd1c0] content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center left-[27px] px-[26px] py-[10px] top-[141px] w-[104px]" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">Daily</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center left-[145px] px-[26px] py-[10px] top-[141px] w-[104px]" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">Weekly</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center left-[263px] px-[26px] py-[10px] top-[141px] w-[104px]" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">Monthly</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute border-[#191c1d] border-b-2 border-solid h-[28px] left-[245px] top-[200px] w-[132px]" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#191c1d] text-[18px] top-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[21.6px]">Thu, 7/5/26</p>
      </div>
      <div className="absolute left-[104px] overflow-clip size-[24px] top-0" data-name="Calendar">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-6.25%_-6.94%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 22.5">
              <path d={svgPaths.p9f16c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[27px] top-[141px]">
      <Button7 />
      <Button8 />
      <Button9 />
      <Heading1 />
    </div>
  );
}

function LabelTaskItem() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Label - Task Item 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
    </div>
  );
}

function GroupEnglish() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[6px_6px_0px_#191c1d] flex flex-col h-[494px] items-start left-[18px] p-[2px] right-[17px] top-px" data-name="Group: English">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <LabelTaskItem />
    </div>
  );
}

function Rank() {
  return <div className="col-1 h-[22px] ml-[12px] mt-[21px] relative row-1 w-[14px]" data-name="Rank" />;
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.pa4de500} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center ml-[4.5px] mt-[4px] relative row-1 size-[23px] text-[14px] text-black text-center" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
    </div>
  );
}

function Person() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[38px] mt-[8px] relative row-1 w-[165px]" data-name="Person">
      <Group14 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#4f4f4f] text-[14.4px] whitespace-nowrap">Tim</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[48px] ml-0 mt-0 relative rounded-[12px] row-1 w-[343px]" />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] ml-[284px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-right whitespace-nowrap">36 pts</p>
      <Rank />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] ml-[16px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-center text-shadow-[0px_0px_13px_rgba(0,0,0,0.25)] whitespace-nowrap">4</p>
      <Person />
    </div>
  );
}

function Rank1() {
  return <div className="col-1 h-[22px] ml-[12px] mt-[21px] relative row-1 w-[14px]" data-name="Rank" />;
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.pa4de500} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center ml-[4.5px] mt-[4px] relative row-1 size-[23px] text-[14px] text-black text-center" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
    </div>
  );
}

function Person1() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[38px] mt-[8px] relative row-1 w-[165px]" data-name="Person">
      <Group15 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#4f4f4f] text-[14.4px] whitespace-nowrap">Nathan</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[48px] ml-0 mt-0 relative rounded-[12px] row-1 w-[343px]" />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] ml-[284px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-right whitespace-nowrap">35 pts</p>
      <Rank1 />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] ml-[17px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-center text-shadow-[0px_0px_13px_rgba(0,0,0,0.25)] whitespace-nowrap">5</p>
      <Person1 />
    </div>
  );
}

function Rank2() {
  return <div className="col-1 h-[22px] ml-[12px] mt-[21px] relative row-1 w-[14px]" data-name="Rank" />;
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.pa4de500} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center ml-[4.5px] mt-[4px] relative row-1 size-[23px] text-[14px] text-black text-center" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
    </div>
  );
}

function Person2() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[38px] mt-[8px] relative row-1 w-[165px]" data-name="Person">
      <Group16 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#303030] text-[14.4px] whitespace-nowrap">You</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#e9da74] col-1 h-[48px] ml-0 mt-0 relative rounded-[12px] row-1 w-[343px]" />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] ml-[284px] mt-[13px] relative row-1 text-[#303030] text-[14.4px] text-right whitespace-nowrap">34 pts</p>
      <Rank2 />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] ml-[17px] mt-[13px] relative row-1 text-[#303030] text-[14.4px] text-center text-shadow-[0px_0px_13px_rgba(0,0,0,0.25)] whitespace-nowrap">6</p>
      <Person2 />
    </div>
  );
}

function Rank3() {
  return <div className="col-1 h-[22px] ml-[12px] mt-[21px] relative row-1 w-[14px]" data-name="Rank" />;
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.pa4de500} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center ml-[4.5px] mt-[4px] relative row-1 size-[23px] text-[14px] text-black text-center" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
    </div>
  );
}

function Person3() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[38px] mt-[8px] relative row-1 w-[165px]" data-name="Person">
      <Group17 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#4f4f4f] text-[14.4px] whitespace-nowrap">Mary</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[48px] ml-0 mt-0 relative rounded-[12px] row-1 w-[343px]" />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] ml-[284px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-right whitespace-nowrap">33 pts</p>
      <Rank3 />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] ml-[17px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-center text-shadow-[0px_0px_13px_rgba(0,0,0,0.25)] whitespace-nowrap">7</p>
      <Person3 />
    </div>
  );
}

function Rank4() {
  return <div className="col-1 h-[22px] ml-[12px] mt-[21px] relative row-1 w-[14px]" data-name="Rank" />;
}

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.pa4de500} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center ml-[4.5px] mt-[4px] relative row-1 size-[23px] text-[14px] text-black text-center" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
    </div>
  );
}

function Person4() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[38px] mt-[8px] relative row-1 w-[165px]" data-name="Person">
      <Group18 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#4f4f4f] text-[14.4px] whitespace-nowrap">Bob</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[48px] ml-0 mt-0 relative rounded-[12px] row-1 w-[343px]" />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] ml-[284px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-right whitespace-nowrap">32 pts</p>
      <Rank4 />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] ml-[16px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-center text-shadow-[0px_0px_13px_rgba(0,0,0,0.25)] whitespace-nowrap">8</p>
      <Person4 />
    </div>
  );
}

function Rank5() {
  return <div className="col-1 h-[22px] ml-[12px] mt-[21px] relative row-1 w-[14px]" data-name="Rank" />;
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.pa4de500} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center ml-[4.5px] mt-[4px] relative row-1 size-[23px] text-[14px] text-black text-center" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
    </div>
  );
}

function Person5() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[38px] mt-[8px] relative row-1 w-[165px]" data-name="Person">
      <Group19 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#4f4f4f] text-[14.4px] whitespace-nowrap">Jim</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[48px] ml-0 mt-0 relative rounded-[12px] row-1 w-[343px]" />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] ml-[285px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-right whitespace-nowrap">31 pts</p>
      <Rank5 />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] ml-[17px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-center text-shadow-[0px_0px_13px_rgba(0,0,0,0.25)] whitespace-nowrap">9</p>
      <Person5 />
    </div>
  );
}

function Rank6() {
  return <div className="col-1 h-[22px] ml-[12px] mt-[21px] relative row-1 w-[14px]" data-name="Rank" />;
}

function Group20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.pa4de500} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center ml-[4.5px] mt-[4px] relative row-1 size-[23px] text-[14px] text-black text-center" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
    </div>
  );
}

function Person6() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center ml-[38px] mt-[8px] relative row-1 w-[165px]" data-name="Person">
      <Group20 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#4f4f4f] text-[14.4px] whitespace-nowrap">Pat</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[48px] ml-0 mt-0 relative rounded-[12px] row-1 w-[343px]" />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] ml-[284px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-right whitespace-nowrap">30 pts</p>
      <Rank6 />
      <p className="[word-break:break-word] col-1 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] ml-[13px] mt-[13px] relative row-1 text-[#4f4f4f] text-[14.4px] text-center text-shadow-[0px_0px_13px_rgba(0,0,0,0.25)] whitespace-nowrap">10</p>
      <Person6 />
    </div>
  );
}

function AutoLayoutVertical() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[285px] items-start leading-[0] left-[25px] top-[11px]" data-name="Auto Layout Vertical">
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute h-[496px] left-[calc(50%+1px)] overflow-clip top-[511px] w-[393px]">
      <GroupEnglish />
      <AutoLayoutVertical />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[13px] text-black text-center whitespace-nowrap">2:13:47</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[2px] items-center left-[calc(50%-92.5px)] top-[378px] w-[110px]">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[14.4px] text-black text-center w-[109px]">Jack</p>
      <Frame1 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[49px] top-[302px]">
      <div className="absolute left-[67px] size-[74px] top-[302px]">
        <div className="absolute inset-[-4.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
            <circle cx="40" cy="40" id="Ellipse 56" r="38.5" stroke="var(--stroke-0, #B4B4B4)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[13px] text-black text-center whitespace-nowrap">2:13:47</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[2px] items-center left-[calc(50%+0.5px)] top-[340px] w-[110px]">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[14.4px] text-black text-center w-[109px]">John</p>
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[13px] text-black text-center whitespace-nowrap">2:13:47</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[2px] items-center left-[calc(50%+96.5px)] top-[384px] w-[110px]">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[14.4px] text-black text-center w-[109px]">Jerry</p>
      <Frame6 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[238px] top-[306px]">
      <div className="absolute left-[256px] size-[74px] top-[306px]">
        <div className="absolute inset-[-4.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
            <circle cx="40" cy="40" id="Ellipse 56" r="38.5" stroke="var(--stroke-0, #AD8A56)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Group24() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+48.5px)] top-[266px]">
      <div className="absolute left-[160px] size-[74px] top-[266px]">
        <div className="absolute inset-[-4.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
            <circle cx="40" cy="40" id="Ellipse 56" r="38.5" stroke="var(--stroke-0, #C9B037)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Frame4 />
      <Group25 />
    </div>
  );
}

function Group22() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+2px)] top-[266px]">
      <Group23 />
      <Group24 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[67px] top-[302px]">
      <div className="absolute left-[67px] size-[74px] top-[302px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
          <path d={svgPaths.pf930140} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[104px] size-[53.188px] text-[14px] text-black text-center top-[337.84px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[256px] top-[306px]">
      <div className="absolute left-[256px] size-[74px] top-[306px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
          <path d={svgPaths.pf930140} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[293px] size-[53.188px] text-[14px] text-black text-center top-[341.84px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[160px] top-[266px]">
      <div className="absolute left-[160px] size-[74px] top-[266px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
          <path d={svgPaths.pf930140} fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[197px] size-[53.188px] text-[14px] text-black text-center top-[301.84px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[14px]">A</p>
      </div>
      <Group28 />
    </div>
  );
}

function Group21() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+2px)] top-[266px]">
      <Group22 />
      <Group26 />
      <Group27 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Margin">
          <path d={svgPaths.p33f99400} fill="var(--fill-0, #F7F6EE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f6ee] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[12px]">Groups</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[88.19px] p-[6px] top-[calc(50%+1px)] w-[64px]" data-name="Link">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <Margin />
      <Container1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[88.19px] top-1/2">
      <Link />
    </div>
  );
}

function Margin1() {
  return (
    <div className="mb-[-2px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Home">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
            <div className="absolute inset-[-4.8%_-5.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6 18.2667">
                <path d={svgPaths.p2808da00} id="Icon" stroke="var(--stroke-0, #F7F6EE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f6ee] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[12px]">Home</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[13px] pb-[6px] pt-[2px] px-[6px] top-[calc(50%+2px)] w-[64px]" data-name="Link">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <Margin1 />
      <Container2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[13px] top-[calc(50%+1px)]">
      <Link1 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Margin">
          <path d={svgPaths.p1b2fa180} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[12px]">Stats</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[162.98px] p-[6px] top-[calc(50%+1px)] w-[64px]" data-name="Link">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <Margin2 />
      <Container3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[162.98px] top-1/2">
      <Link2 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[19.075px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.075">
        <g id="Margin">
          <path d={svgPaths.p348f1c40} fill="var(--fill-0, #F7F6EE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f6ee] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[12px]">To-Do</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[237.78px] p-[6px] top-[calc(50%+1px)] w-[64px]" data-name="Link">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <Margin3 />
      <Container4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[237.78px] top-1/2">
      <Link3 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20.1px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 24">
        <g id="Margin">
          <path d={svgPaths.p1589e300} fill="var(--fill-0, #F7F6EE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f6ee] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[12px]">Settings</p>
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[312.58px] p-[6px] top-[calc(50%+1px)] w-[64px]" data-name="Link">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <Margin4 />
      <Container5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[312.58px] top-1/2">
      <Link4 />
    </div>
  );
}

export default function Stats() {
  return (
    <div className="bg-[#f7f6ee] overflow-clip relative rounded-[60px] size-full" data-name="Stats">
      <div className="absolute h-[141px] left-[56px] top-[374px] w-[281px]" data-name="Untitled design (41) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUntitledDesign411} />
      </div>
      <ToggleBar />
      <SectionSubjectsGrid />
      <Group />
      <Frame />
      <ToggleBar1 />
      <Group1 />
      <Frame7 />
      <Group21 />
      <div className="-translate-x-1/2 absolute bg-black border-[#191c1d] border-solid border-t-2 bottom-0 h-[80px] left-1/2 w-[393px]" data-name="Bottom Nav Bar (Mobile)">
        <div className="absolute bg-[#f7f6ee] border border-[#f7f6ee] border-solid left-[168px] rounded-[10px] size-[55px] top-[10px]" />
        <Group3 />
        <Group2 />
        <Group4 />
        <Group5 />
        <Group6 />
      </div>
    </div>
  );
}