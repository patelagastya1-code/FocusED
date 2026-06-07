import svgPaths from "./svg-bmxbpo2smf";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[32px] tracking-[-0.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[38.4px]">To-Do List</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4947] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[21px]">4 items remaining today</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[170px]" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #191C1D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#acd1c0] content-stretch drop-shadow-[4px_4px_0px_#191c1d] flex items-center px-[18px] py-[14px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function HeaderCta() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header & CTA">
      <Container />
      <Button />
    </div>
  );
}

function HeaderCtaMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] pb-[32px] right-[16px] top-[32px]" data-name="Header & CTA:margin">
      <HeaderCta />
    </div>
  );
}

function FiltersMargin() {
  return <div className="absolute h-[66px] left-[16px] right-[16px] top-[128px]" data-name="Filters:margin" />;
}

function Heading1() {
  return (
    <div className="h-[21.59px] relative shrink-0 w-[148.38px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[33px] text-[#191c1d] text-[18px] top-[10.8px] tracking-[1.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[21.6px]">MATHEMATICS</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f8f9fa] relative shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[12px]">2 Due</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#d3817c] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#191c1d] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[14px] pt-[12px] px-[16px] relative size-full">
          <Heading1 />
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <g id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[26px] relative shrink-0 w-[24px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <BackgroundBorder1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[24px]">Complete Algebra Worksheet</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#d3817c] content-stretch flex flex-col items-start px-[10px] py-[4px] relative shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#231b00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[12px]">High Priority</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4947] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[21px]">Due Tomorrow</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder2 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function LabelTaskItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label - Task Item 1">
      <div aria-hidden className="absolute border-[#191c1d] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-start pb-[18px] pt-[16px] px-[16px] relative size-full">
        <Margin />
        <Container5 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <LabelTaskItem />
      </div>
    </div>
  );
}

function GroupMathematics() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[6px_6px_0px_#191c1d] flex flex-col items-start left-0 p-[2px] right-0 top-0" data-name="Group: Mathematics">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <BackgroundHorizontalBorder />
      <Container3 />
    </div>
  );
}

function Heading2() {
  return <div className="h-[22px] relative shrink-0 w-[129px]" data-name="Heading 2" />;
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f8f9fa] relative shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[12px]">1 Due</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#6be4ff] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#191c1d] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[14px] pt-[12px] px-[16px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                  <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #1D1B20)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[18px] tracking-[1.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[21.6px]">ENGLISH</p>
          </div>
          <Heading2 />
          <BackgroundBorder3 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <g id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="Margin">
      <BackgroundBorder4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[24px]">Write Essay Draft</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4947] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[21px]">Due Friday</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function LabelTaskItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label - Task Item 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Margin1 />
        <Container10 />
      </div>
    </div>
  );
}

function GroupEnglish() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[6px_6px_0px_#191c1d] flex flex-col items-start left-0 p-[2px] right-0 top-[153px]" data-name="Group: English">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <BackgroundHorizontalBorder1 />
      <LabelTaskItem1 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f8f9fa] border-2 border-[#191c1d] border-solid h-[24px] left-[293px] top-1/2 w-[50.42px]" data-name="Background+Border">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] text-[#191c1d] text-[12px] top-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[12px]">1 Due</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="bg-[#d2fa94] h-[50px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#191c1d] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute left-[16px] overflow-clip size-[24px] top-[12px]" data-name="arrow_drop_down">
          <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
              <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #1D1B20)" id="icon" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[48px] text-[#191c1d] text-[18px] top-[24px] tracking-[1.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[21.6px]">Enterprise Comp</p>
        </div>
        <BackgroundBorder5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <g id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="Margin">
      <BackgroundBorder6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[24px]">Write Essay Draft</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4947] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[21px]">Due Friday</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function LabelTaskItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label - Task Item 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Margin2 />
        <Container15 />
      </div>
    </div>
  );
}

function GroupEnglish1() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch drop-shadow-[6px_6px_0px_#191c1d] flex flex-col items-start left-1/2 p-[2px] top-[304px] w-[358px]" data-name="Group: English">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <BackgroundHorizontalBorder2 />
      <LabelTaskItem2 />
    </div>
  );
}

function TaskListContainer() {
  return (
    <div className="absolute h-[525px] left-[3px] right-0 top-[6px]" data-name="Task List Container">
      <GroupMathematics />
      <GroupEnglish />
      <GroupEnglish1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[531px] left-[13px] overflow-clip top-[188px] w-[361px]">
      <TaskListContainer />
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f8f9fa] border-2 border-[#191c1d] border-solid h-[24px] left-[293px] top-1/2 w-[50.42px]" data-name="Background+Border">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] text-[#191c1d] text-[12px] top-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[12px]">1 Due</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder3() {
  return (
    <div className="bg-[#ffff6b] h-[50px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#191c1d] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute left-[16px] overflow-clip size-[24px] top-[12px]" data-name="arrow_drop_down">
          <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
              <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #1D1B20)" id="icon" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[48px] text-[#191c1d] text-[18px] top-[24px] tracking-[1.8px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[21.6px]">Literature</p>
        </div>
        <BackgroundBorder7 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <g id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="Margin">
      <BackgroundBorder8 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[24px]">Write Essay Draft</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4947] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[21px]">Due Friday</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function LabelTaskItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label - Task Item 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Margin3 />
        <Container20 />
      </div>
    </div>
  );
}

function GroupEnglish2() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[6px_6px_0px_#191c1d] flex flex-col items-start left-[16px] p-[2px] right-[16px] top-[649px]" data-name="Group: English">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <BackgroundHorizontalBorder3 />
      <LabelTaskItem3 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[858px] left-0 overflow-clip right-[3px] top-[66px]" data-name="Main Content">
      <HeaderCtaMargin />
      <FiltersMargin />
      <Frame />
      <GroupEnglish2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e9da74] content-stretch flex flex-col items-center justify-center px-[18px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[12px]">ALL</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center px-[18px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center tracking-[0.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[12px]">ENGLISH</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center px-[18px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center tracking-[0.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[12px]">Enterprise Comp</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center px-[18px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center tracking-[0.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[12px]">Literature</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center overflow-x-auto overflow-y-clip relative shrink-0 w-[384px]">
      <Button1 />
      <div className="bg-white content-stretch drop-shadow-[2px_2px_0px_#191c1d] flex flex-col items-center justify-center px-[18px] py-[10px] relative shrink-0" data-name="Button">
        <div aria-hidden className="absolute border-2 border-[#191c1d] border-solid inset-0 pointer-events-none" />
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center tracking-[0.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[12px]">MATHEMATICS</p>
        </div>
      </div>
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[202px] w-[580.3px]">
      <Frame1 />
    </div>
  );
}

function Margin4() {
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

function Container24() {
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
      <Margin4 />
      <Container24 />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[88.19px] top-1/2">
      <Link />
    </div>
  );
}

function Margin5() {
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

function Container25() {
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
      <Margin5 />
      <Container25 />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[13px] top-[calc(50%+1px)]">
      <Link1 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Margin">
          <path d={svgPaths.p1b2fa180} fill="var(--fill-0, #F7F6EE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f6ee] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
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
      <Margin6 />
      <Container26 />
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[162.98px] top-1/2">
      <Link2 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[19.075px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.075">
        <g id="Margin">
          <path d={svgPaths.p348f1c40} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
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
      <Margin7 />
      <Container27 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[237.78px] top-1/2">
      <Link3 />
    </div>
  );
}

function Margin8() {
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

function Container28() {
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
      <Margin8 />
      <Container28 />
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[312.58px] top-1/2">
      <Link4 />
    </div>
  );
}

export default function ToDoList() {
  return (
    <div className="bg-[#f7f6ee] overflow-clip relative rounded-[60px] size-full" data-name="To-Do list">
      <div className="absolute h-[852px] left-0 top-0 w-[393px]" data-name="iPhone 16">
        <div className="absolute h-[912px] left-[-30px] top-[-30px] w-[453px]" data-name="iPhone 16" />
      </div>
      <MainContent />
      <Frame2 />
      <div className="-translate-x-1/2 absolute bg-black border-[#191c1d] border-solid border-t-2 bottom-0 h-[80px] left-1/2 w-[393px]" data-name="Bottom Nav Bar (Mobile)">
        <div className="absolute bg-[#f7f6ee] border border-[#f7f6ee] border-solid left-[243px] rounded-[10px] size-[55px] top-[10px]" />
        <Group1 />
        <Group />
        <Group2 />
        <Group3 />
        <Group4 />
      </div>
    </div>
  );
}