import svgPaths from "./svg-o2efeo8sf";

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[28px] relative shrink-0 text-[#e8b02a] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Ibadah Tracker
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[18px] relative shrink-0 w-[191px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Bismillah</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[78px] relative shrink-0 w-[207px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] px-[8px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="HomeIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="HomeIcon">
          <path d={svgPaths.p2213f00} id="Vector" stroke="#58A700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 18.3333V10H12.5V18.3333" id="Vector_2" stroke="#58A700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(88,204,2,0.12)] relative rounded-[8px] shrink-0 w-[207px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(88,204,2,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[13px] py-[11px] relative size-full">
        <HomeIcon />
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#58a700] text-[14px] text-center whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function ChecklistIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChecklistIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="ChecklistIcon">
          <path d={svgPaths.p3fe63d80} id="Vector" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2e9f900} id="Vector_2" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[13px] py-[11px] relative rounded-[8px] shrink-0 w-[207px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ChecklistIcon />
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#6d8a76] text-[14px] text-center whitespace-nowrap">Checklist</p>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function HistoryIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="HistoryIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="HistoryIcon">
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p19dc1ac0} id="Vector_2" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 5.83333V10L12.5 11.6667" id="Vector_3" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[13px] py-[11px] relative rounded-[8px] shrink-0 w-[207px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <HistoryIcon />
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#6d8a76] text-[14px] text-center whitespace-nowrap">Histori</p>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function SettingsIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SettingsIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_377)" id="SettingsIcon">
          <path d={svgPaths.p3b27f100} id="Vector" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p32590000} id="Vector_2" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_377">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[13px] py-[11px] relative rounded-[8px] shrink-0 w-[207px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <SettingsIcon />
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#6d8a76] text-[14px] text-center whitespace-nowrap">Settings</p>
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[682_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button />
        <ButtonMargin />
        <ButtonMargin1 />
        <ButtonMargin2 />
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#e9f3e3] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="flex-[147_0_0] h-[20px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">yassar daffa</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[207px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
        <Container4 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p2898b000} fill="#6B7280" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function StreakBadge() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[8px] top-0" data-name="StreakBadge">
      <Icon />
      <Text />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <StreakBadge />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#dbe8d2] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container3 />
        <ContainerMargin />
      </div>
    </div>
  );
}

function SidebarNav() {
  return (
    <div className="bg-white h-[895px] relative shrink-0 w-[240px]" data-name="SidebarNav">
      <div aria-hidden className="absolute border-[#dbe8d2] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] pr-[17px] py-[24px] relative size-full">
        <Container />
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[167.719px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[32px] relative shrink-0 text-[#1f3b28] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Ibadah Hari Ini
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[167.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Heading1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g id="Icon">
          <path d={svgPaths.p262df400} fill="#6B7280" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[33px] relative shrink-0 text-[#6b7280] text-[22px] text-right whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function StreakBadge1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[35.75px] top-0" data-name="StreakBadge">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StreakBadge1 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[94.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] text-right whitespace-nowrap">Terpanjang: 1 hari</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[94.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container9 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Rekap Harian</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#6d8a76] text-[14px] whitespace-nowrap">7 dari 9 selesai</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[28px] relative shrink-0 text-[#58a700] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          78%
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container12() {
  return <div className="bg-gradient-to-r from-[#6cc02e] h-[6px] relative rounded-[33554400px] shrink-0 to-[#58a700] w-[547.547px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="bg-[#e9f3e3] content-stretch flex flex-col h-[6px] items-start overflow-clip relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Belum dikerjakan:</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e04a3f] text-[12px] whitespace-nowrap">Kajian</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e04a3f] text-[12px] whitespace-nowrap">Tahajud</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[28px] relative shrink-0 w-[702px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start pt-[6px] relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[56px] relative shrink-0 w-[702px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Paragraph4 />
        <Container14 />
      </div>
    </div>
  );
}

function RekapHarian() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="RekapHarian">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#dbe8d2,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container10 />
        <ContainerMargin1 />
        <Container13 />
      </div>
    </div>
  );
}

function RekapHarianMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="RekapHarian:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <RekapHarian />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[188px] relative shrink-0 w-[736px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading2 />
        <RekapHarianMargin />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Kontribusi Ibadah</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Agt</p>
      </div>
    </div>
  );
}

function Container19() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container20() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container21() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container22() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container23() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Sep</p>
      </div>
    </div>
  );
}

function Container24() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container25() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container26() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container27() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Okt</p>
      </div>
    </div>
  );
}

function Container28() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container29() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container30() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container31() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Nov</p>
      </div>
    </div>
  );
}

function Container32() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container33() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container34() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container35() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container36() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Des</p>
      </div>
    </div>
  );
}

function Container37() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container38() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container39() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container40() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Jan</p>
      </div>
    </div>
  );
}

function Container41() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container42() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container43() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container44() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Feb</p>
      </div>
    </div>
  );
}

function Container45() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container46() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container47() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container48() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Mar</p>
      </div>
    </div>
  );
}

function Container49() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container50() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container51() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container52() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container53() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Apr</p>
      </div>
    </div>
  );
}

function Container54() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container55() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container56() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container57() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Mei</p>
      </div>
    </div>
  );
}

function Container58() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container59() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container60() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container61() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container62() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Jun</p>
      </div>
    </div>
  );
}

function Container63() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container64() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container65() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container66() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Jul</p>
      </div>
    </div>
  );
}

function Container67() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container68() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container69() {
  return <div className="h-full relative shrink-0 w-[15px]" data-name="Container" />;
}

function Container70() {
  return (
    <div className="h-full relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[9px] whitespace-nowrap">Agt</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[12px] min-w-[795px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start min-w-[inherit] pl-[28px] relative size-full">
        <Container18 />
        <Container19 />
        <Container20 />
        <Container21 />
        <Container22 />
        <Container23 />
        <Container24 />
        <Container25 />
        <Container26 />
        <Container27 />
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
        <Container32 />
        <Container33 />
        <Container34 />
        <Container35 />
        <Container36 />
        <Container37 />
        <Container38 />
        <Container39 />
        <Container40 />
        <Container41 />
        <Container42 />
        <Container43 />
        <Container44 />
        <Container45 />
        <Container46 />
        <Container47 />
        <Container48 />
        <Container49 />
        <Container50 />
        <Container51 />
        <Container52 />
        <Container53 />
        <Container54 />
        <Container55 />
        <Container56 />
        <Container57 />
        <Container58 />
        <Container59 />
        <Container60 />
        <Container61 />
        <Container62 />
        <Container63 />
        <Container64 />
        <Container65 />
        <Container66 />
        <Container67 />
        <Container68 />
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[12px] relative shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[8px] whitespace-nowrap">Min</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[12px] opacity-0 relative shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[8px] whitespace-nowrap">Sen</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[12px] relative shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[8px] whitespace-nowrap">Sel</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[12px] opacity-0 relative shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[8px] whitespace-nowrap">Rab</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[12px] relative shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[8px] whitespace-nowrap">Kam</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[12px] opacity-0 relative shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[8px] whitespace-nowrap">Jum</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[12px] relative shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6d8a76] text-[8px] whitespace-nowrap">Sab</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[105px] relative shrink-0 w-[26px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start pr-[4px] relative size-full">
        <Container73 />
        <Container74 />
        <Container75 />
        <Container76 />
        <Container77 />
        <Container78 />
        <Container79 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[105px] relative shrink-0 w-[795px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="105" preserveAspectRatio="none" viewBox="0 0 795 105" width="795">
        <g id="Icon">
          <path d={svgPaths.p37491300} fill="#58A700" id="Vector" />
          <path d={svgPaths.p10ee3700} fill="#EAF1E5" id="Vector_2" />
          <path d={svgPaths.p34f4a000} fill="#EAF1E5" id="Vector_3" />
          <path d={svgPaths.p38d71700} fill="#EAF1E5" id="Vector_4" />
          <path d={svgPaths.p17f56600} fill="#EAF1E5" id="Vector_5" />
          <path d={svgPaths.p39bc7280} fill="#EAF1E5" id="Vector_6" />
          <path d={svgPaths.p3b72dc00} fill="#EAF1E5" id="Vector_7" />
          <path d={svgPaths.p395e3200} fill="#EAF1E5" id="Vector_8" />
          <path d={svgPaths.p26ee0c00} fill="#EAF1E5" id="Vector_9" />
          <path d={svgPaths.p1e0562c0} fill="#EAF1E5" id="Vector_10" />
          <path d={svgPaths.p3a1590f0} fill="#EAF1E5" id="Vector_11" />
          <path d={svgPaths.p112d2af2} fill="#EAF1E5" id="Vector_12" />
          <path d={svgPaths.p3910c600} fill="#EAF1E5" id="Vector_13" />
          <path d={svgPaths.p9af2680} fill="#EAF1E5" id="Vector_14" />
          <path d={svgPaths.p9819a00} fill="#EAF1E5" id="Vector_15" />
          <path d={svgPaths.p288647f0} fill="#EAF1E5" id="Vector_16" />
          <path d={svgPaths.p30c68380} fill="#EAF1E5" id="Vector_17" />
          <path d={svgPaths.p27cea5c0} fill="#EAF1E5" id="Vector_18" />
          <path d={svgPaths.pb2dd500} fill="#EAF1E5" id="Vector_19" />
          <path d={svgPaths.p2deb1300} fill="#EAF1E5" id="Vector_20" />
          <path d={svgPaths.p1ed97c80} fill="#EAF1E5" id="Vector_21" />
          <path d={svgPaths.p141b1180} fill="#EAF1E5" id="Vector_22" />
          <path d={svgPaths.p17d0ea00} fill="#EAF1E5" id="Vector_23" />
          <path d={svgPaths.pe8b300} fill="#EAF1E5" id="Vector_24" />
          <path d={svgPaths.p144be7f0} fill="#EAF1E5" id="Vector_25" />
          <path d={svgPaths.p25572980} fill="#EAF1E5" id="Vector_26" />
          <path d={svgPaths.p3420780} fill="#EAF1E5" id="Vector_27" />
          <path d={svgPaths.p30827f00} fill="#EAF1E5" id="Vector_28" />
          <path d={svgPaths.p4b1f680} fill="#EAF1E5" id="Vector_29" />
          <path d={svgPaths.p15c32e80} fill="#EAF1E5" id="Vector_30" />
          <path d={svgPaths.p2dd77380} fill="#EAF1E5" id="Vector_31" />
          <path d={svgPaths.p1da36c80} fill="#EAF1E5" id="Vector_32" />
          <path d={svgPaths.p32e11000} fill="#EAF1E5" id="Vector_33" />
          <path d={svgPaths.p3a3ae180} fill="#EAF1E5" id="Vector_34" />
          <path d={svgPaths.p1a0ec680} fill="#EAF1E5" id="Vector_35" />
          <path d={svgPaths.pfc6e9f0} fill="#EAF1E5" id="Vector_36" />
          <path d={svgPaths.p3ccd0300} fill="#EAF1E5" id="Vector_37" />
          <path d={svgPaths.pbc9da00} fill="#EAF1E5" id="Vector_38" />
          <path d={svgPaths.p24bdfe00} fill="#EAF1E5" id="Vector_39" />
          <path d={svgPaths.p2df8e900} fill="#EAF1E5" id="Vector_40" />
          <path d={svgPaths.p2c2e8580} fill="#EAF1E5" id="Vector_41" />
          <path d={svgPaths.p1efede80} fill="#EAF1E5" id="Vector_42" />
          <path d={svgPaths.pcb38400} fill="#EAF1E5" id="Vector_43" />
          <path d={svgPaths.p125a47c0} fill="#EAF1E5" id="Vector_44" />
          <path d={svgPaths.pf130680} fill="#EAF1E5" id="Vector_45" />
          <path d={svgPaths.p1857d00} fill="#EAF1E5" id="Vector_46" />
          <path d={svgPaths.p19b7c080} fill="#EAF1E5" id="Vector_47" />
          <path d={svgPaths.p34225080} fill="#EAF1E5" id="Vector_48" />
          <path d={svgPaths.p3adfb430} fill="#EAF1E5" id="Vector_49" />
          <path d={svgPaths.p23169600} fill="#EAF1E5" id="Vector_50" />
          <path d={svgPaths.p22d99500} fill="#EAF1E5" id="Vector_51" />
          <path d={svgPaths.p2a6a9480} fill="#EAF1E5" id="Vector_52" />
          <path d={svgPaths.pa799d80} fill="#EAF1E5" id="Vector_53" />
          <path d={svgPaths.p39b0100} fill="#EAF1E5" id="Vector_54" />
          <path d={svgPaths.pc1833c0} fill="#EAF1E5" id="Vector_55" />
          <path d={svgPaths.p3ca61700} fill="#EAF1E5" id="Vector_56" />
          <path d={svgPaths.p3e107800} fill="#EAF1E5" id="Vector_57" />
          <path d={svgPaths.p38768600} fill="#EAF1E5" id="Vector_58" />
          <path d={svgPaths.p30b5e540} fill="#EAF1E5" id="Vector_59" />
          <path d={svgPaths.p1ae65500} fill="#EAF1E5" id="Vector_60" />
          <path d={svgPaths.p1412a080} fill="#EAF1E5" id="Vector_61" />
          <path d={svgPaths.p4775f00} fill="#EAF1E5" id="Vector_62" />
          <path d={svgPaths.p20145e80} fill="#EAF1E5" id="Vector_63" />
          <path d={svgPaths.p3feb2c00} fill="#EAF1E5" id="Vector_64" />
          <path d={svgPaths.p18249000} fill="#EAF1E5" id="Vector_65" />
          <path d={svgPaths.p3961f180} fill="#EAF1E5" id="Vector_66" />
          <path d={svgPaths.p3c6b980} fill="#EAF1E5" id="Vector_67" />
          <path d={svgPaths.p35a62c80} fill="#EAF1E5" id="Vector_68" />
          <path d={svgPaths.p20d9d00} fill="#EAF1E5" id="Vector_69" />
          <path d={svgPaths.p19999600} fill="#EAF1E5" id="Vector_70" />
          <path d={svgPaths.pa359000} fill="#EAF1E5" id="Vector_71" />
          <path d={svgPaths.p2c3f3e00} fill="#EAF1E5" id="Vector_72" />
          <path d={svgPaths.p35716f80} fill="#EAF1E5" id="Vector_73" />
          <path d={svgPaths.p37167880} fill="#EAF1E5" id="Vector_74" />
          <path d={svgPaths.p1ad6a8c0} fill="#EAF1E5" id="Vector_75" />
          <path d={svgPaths.p1cca58f0} fill="#EAF1E5" id="Vector_76" />
          <path d={svgPaths.p14428900} fill="#EAF1E5" id="Vector_77" />
          <path d={svgPaths.p3ffc00} fill="#EAF1E5" id="Vector_78" />
          <path d={svgPaths.p2dd07830} fill="#EAF1E5" id="Vector_79" />
          <path d={svgPaths.p1d43200} fill="#EAF1E5" id="Vector_80" />
          <path d={svgPaths.p38e20380} fill="#EAF1E5" id="Vector_81" />
          <path d={svgPaths.p7c07080} fill="#EAF1E5" id="Vector_82" />
          <path d={svgPaths.p9b8f480} fill="#EAF1E5" id="Vector_83" />
          <path d={svgPaths.p1c900300} fill="#EAF1E5" id="Vector_84" />
          <path d={svgPaths.p3e81f680} fill="#EAF1E5" id="Vector_85" />
          <path d={svgPaths.p3faac080} fill="#EAF1E5" id="Vector_86" />
          <path d={svgPaths.p1fdcab00} fill="#EAF1E5" id="Vector_87" />
          <path d={svgPaths.p15c14e00} fill="#EAF1E5" id="Vector_88" />
          <path d={svgPaths.p15404b80} fill="#EAF1E5" id="Vector_89" />
          <path d={svgPaths.p1440a780} fill="#EAF1E5" id="Vector_90" />
          <path d={svgPaths.p3940400} fill="#EAF1E5" id="Vector_91" />
          <path d={svgPaths.p3be8f180} fill="#EAF1E5" id="Vector_92" />
          <path d={svgPaths.p263fdd80} fill="#EAF1E5" id="Vector_93" />
          <path d={svgPaths.pce0c600} fill="#EAF1E5" id="Vector_94" />
          <path d={svgPaths.p17cc1500} fill="#EAF1E5" id="Vector_95" />
          <path d={svgPaths.p20d02180} fill="#EAF1E5" id="Vector_96" />
          <path d={svgPaths.p2dd608c0} fill="#EAF1E5" id="Vector_97" />
          <path d={svgPaths.p21ab0c80} fill="#EAF1E5" id="Vector_98" />
          <path d={svgPaths.pfd7e340} fill="#EAF1E5" id="Vector_99" />
          <path d={svgPaths.p37206f40} fill="#EAF1E5" id="Vector_100" />
          <path d={svgPaths.p3698800} fill="#EAF1E5" id="Vector_101" />
          <path d={svgPaths.p25f2700} fill="#EAF1E5" id="Vector_102" />
          <path d={svgPaths.p2653bfc0} fill="#EAF1E5" id="Vector_103" />
          <path d={svgPaths.p31c13a00} fill="#EAF1E5" id="Vector_104" />
          <path d={svgPaths.p11aa4e80} fill="#EAF1E5" id="Vector_105" />
          <path d={svgPaths.p4368a80} fill="#EAF1E5" id="Vector_106" />
          <path d={svgPaths.p178a5200} fill="#EAF1E5" id="Vector_107" />
          <path d={svgPaths.p1953e200} fill="#EAF1E5" id="Vector_108" />
          <path d={svgPaths.p18f60900} fill="#EAF1E5" id="Vector_109" />
          <path d={svgPaths.p56ddc00} fill="#EAF1E5" id="Vector_110" />
          <path d={svgPaths.p2b371500} fill="#EAF1E5" id="Vector_111" />
          <path d={svgPaths.pe3c4300} fill="#EAF1E5" id="Vector_112" />
          <path d={svgPaths.p5c3e280} fill="#EAF1E5" id="Vector_113" />
          <path d={svgPaths.p13928500} fill="#EAF1E5" id="Vector_114" />
          <path d={svgPaths.pbd27800} fill="#EAF1E5" id="Vector_115" />
          <path d={svgPaths.p2f56c970} fill="#EAF1E5" id="Vector_116" />
          <path d={svgPaths.p2b148400} fill="#EAF1E5" id="Vector_117" />
          <path d={svgPaths.p13d61f00} fill="#EAF1E5" id="Vector_118" />
          <path d={svgPaths.p19d4a480} fill="#EAF1E5" id="Vector_119" />
          <path d={svgPaths.p170f9a80} fill="#EAF1E5" id="Vector_120" />
          <path d={svgPaths.p31b14b00} fill="#EAF1E5" id="Vector_121" />
          <path d={svgPaths.p3a0ac380} fill="#EAF1E5" id="Vector_122" />
          <path d={svgPaths.p1e788b80} fill="#EAF1E5" id="Vector_123" />
          <path d={svgPaths.pc330270} fill="#EAF1E5" id="Vector_124" />
          <path d={svgPaths.p1c0f6d80} fill="#EAF1E5" id="Vector_125" />
          <path d={svgPaths.p32bcc300} fill="#EAF1E5" id="Vector_126" />
          <path d={svgPaths.p32d28e00} fill="#EAF1E5" id="Vector_127" />
          <path d={svgPaths.p27e29600} fill="#EAF1E5" id="Vector_128" />
          <path d={svgPaths.p29ce1000} fill="#EAF1E5" id="Vector_129" />
          <path d={svgPaths.p2d8d8f70} fill="#EAF1E5" id="Vector_130" />
          <path d={svgPaths.p10790a80} fill="#EAF1E5" id="Vector_131" />
          <path d={svgPaths.p39e6f8c0} fill="#EAF1E5" id="Vector_132" />
          <path d={svgPaths.p7498500} fill="#EAF1E5" id="Vector_133" />
          <path d={svgPaths.p3fccfb00} fill="#EAF1E5" id="Vector_134" />
          <path d={svgPaths.p2b57e500} fill="#EAF1E5" id="Vector_135" />
          <path d={svgPaths.p3fcbdb00} fill="#EAF1E5" id="Vector_136" />
          <path d={svgPaths.p993a180} fill="#EAF1E5" id="Vector_137" />
          <path d={svgPaths.pf76bc80} fill="#EAF1E5" id="Vector_138" />
          <path d={svgPaths.p25f3eb00} fill="#EAF1E5" id="Vector_139" />
          <path d={svgPaths.pb57b200} fill="#EAF1E5" id="Vector_140" />
          <path d={svgPaths.p3dd6c680} fill="#EAF1E5" id="Vector_141" />
          <path d={svgPaths.pd1b8900} fill="#EAF1E5" id="Vector_142" />
          <path d={svgPaths.p17507ac0} fill="#EAF1E5" id="Vector_143" />
          <path d={svgPaths.p38186680} fill="#EAF1E5" id="Vector_144" />
          <path d={svgPaths.p1cb19470} fill="#EAF1E5" id="Vector_145" />
          <path d={svgPaths.p1a7bfc80} fill="#EAF1E5" id="Vector_146" />
          <path d={svgPaths.p11153f00} fill="#EAF1E5" id="Vector_147" />
          <path d={svgPaths.p18496300} fill="#EAF1E5" id="Vector_148" />
          <path d={svgPaths.p26a5d600} fill="#EAF1E5" id="Vector_149" />
          <path d={svgPaths.p3a762240} fill="#EAF1E5" id="Vector_150" />
          <path d={svgPaths.p30e49800} fill="#EAF1E5" id="Vector_151" />
          <path d={svgPaths.p3270a100} fill="#EAF1E5" id="Vector_152" />
          <path d={svgPaths.p17abe400} fill="#EAF1E5" id="Vector_153" />
          <path d={svgPaths.p2d516d00} fill="#EAF1E5" id="Vector_154" />
          <path d={svgPaths.p1aa81040} fill="#EAF1E5" id="Vector_155" />
          <path d={svgPaths.p139b7b00} fill="#EAF1E5" id="Vector_156" />
          <path d={svgPaths.p1e488900} fill="#EAF1E5" id="Vector_157" />
          <path d={svgPaths.p1d8e1700} fill="#EAF1E5" id="Vector_158" />
          <path d={svgPaths.p8d8d200} fill="#EAF1E5" id="Vector_159" />
          <path d={svgPaths.p32a2c5e0} fill="#EAF1E5" id="Vector_160" />
          <path d={svgPaths.p3f430500} fill="#EAF1E5" id="Vector_161" />
          <path d={svgPaths.p24211cc0} fill="#EAF1E5" id="Vector_162" />
          <path d={svgPaths.p3dc41e80} fill="#EAF1E5" id="Vector_163" />
          <path d={svgPaths.p1e03dd00} fill="#EAF1E5" id="Vector_164" />
          <path d={svgPaths.p34048500} fill="#EAF1E5" id="Vector_165" />
          <path d={svgPaths.p3410200} fill="#EAF1E5" id="Vector_166" />
          <path d={svgPaths.p3243f800} fill="#EAF1E5" id="Vector_167" />
          <path d={svgPaths.p3f282a00} fill="#EAF1E5" id="Vector_168" />
          <path d={svgPaths.p35a89b00} fill="#EAF1E5" id="Vector_169" />
          <path d={svgPaths.p39007b00} fill="#EAF1E5" id="Vector_170" />
          <path d={svgPaths.pcda1780} fill="#EAF1E5" id="Vector_171" />
          <path d={svgPaths.p2daf7a00} fill="#EAF1E5" id="Vector_172" />
          <path d={svgPaths.p2b82e600} fill="#EAF1E5" id="Vector_173" />
          <path d={svgPaths.p34ee41f0} fill="#EAF1E5" id="Vector_174" />
          <path d={svgPaths.p31e8fe40} fill="#EAF1E5" id="Vector_175" />
          <path d={svgPaths.p39d649c0} fill="#EAF1E5" id="Vector_176" />
          <path d={svgPaths.p2b198a80} fill="#EAF1E5" id="Vector_177" />
          <path d={svgPaths.p13565280} fill="#EAF1E5" id="Vector_178" />
          <path d={svgPaths.p10d65900} fill="#EAF1E5" id="Vector_179" />
          <path d={svgPaths.p37ca1380} fill="#EAF1E5" id="Vector_180" />
          <path d={svgPaths.p3034abf0} fill="#EAF1E5" id="Vector_181" />
          <path d={svgPaths.p3968c9f0} fill="#EAF1E5" id="Vector_182" />
          <path d={svgPaths.p39168800} fill="#EAF1E5" id="Vector_183" />
          <path d={svgPaths.p1cb0a600} fill="#EAF1E5" id="Vector_184" />
          <path d={svgPaths.p29057f00} fill="#EAF1E5" id="Vector_185" />
          <path d={svgPaths.pa089300} fill="#EAF1E5" id="Vector_186" />
          <path d={svgPaths.p3099900} fill="#EAF1E5" id="Vector_187" />
          <path d={svgPaths.p165f5380} fill="#EAF1E5" id="Vector_188" />
          <path d={svgPaths.pee44400} fill="#EAF1E5" id="Vector_189" />
          <path d={svgPaths.p30e6c980} fill="#EAF1E5" id="Vector_190" />
          <path d={svgPaths.p1f1a2380} fill="#EAF1E5" id="Vector_191" />
          <path d={svgPaths.p2e62b080} fill="#EAF1E5" id="Vector_192" />
          <path d={svgPaths.p37e87740} fill="#EAF1E5" id="Vector_193" />
          <path d={svgPaths.p3409c080} fill="#EAF1E5" id="Vector_194" />
          <path d={svgPaths.p7c2c900} fill="#EAF1E5" id="Vector_195" />
          <path d={svgPaths.p3e6dd480} fill="#EAF1E5" id="Vector_196" />
          <path d={svgPaths.p306934c0} fill="#EAF1E5" id="Vector_197" />
          <path d={svgPaths.p9548df0} fill="#EAF1E5" id="Vector_198" />
          <path d={svgPaths.p2d79100} fill="#EAF1E5" id="Vector_199" />
          <path d={svgPaths.p242d9400} fill="#EAF1E5" id="Vector_200" />
          <path d={svgPaths.p13016e00} fill="#EAF1E5" id="Vector_201" />
          <path d={svgPaths.pd073d40} fill="#EAF1E5" id="Vector_202" />
          <path d={svgPaths.p1cd98680} fill="#EAF1E5" id="Vector_203" />
          <path d={svgPaths.pa80bc80} fill="#EAF1E5" id="Vector_204" />
          <path d={svgPaths.p265c40e0} fill="#EAF1E5" id="Vector_205" />
          <path d={svgPaths.p38b09a80} fill="#EAF1E5" id="Vector_206" />
          <path d={svgPaths.p9346100} fill="#EAF1E5" id="Vector_207" />
          <path d={svgPaths.p391f0500} fill="#EAF1E5" id="Vector_208" />
          <path d={svgPaths.p20ed0700} fill="#EAF1E5" id="Vector_209" />
          <path d={svgPaths.p1c01c280} fill="#EAF1E5" id="Vector_210" />
          <path d={svgPaths.p1d4db980} fill="#EAF1E5" id="Vector_211" />
          <path d={svgPaths.pf587600} fill="#EAF1E5" id="Vector_212" />
          <path d={svgPaths.p384f1e00} fill="#EAF1E5" id="Vector_213" />
          <path d={svgPaths.p19776c80} fill="#EAF1E5" id="Vector_214" />
          <path d={svgPaths.pde67f00} fill="#EAF1E5" id="Vector_215" />
          <path d={svgPaths.p37e80a00} fill="#EAF1E5" id="Vector_216" />
          <path d={svgPaths.p3fad2fa0} fill="#EAF1E5" id="Vector_217" />
          <path d={svgPaths.p1e71a470} fill="#EAF1E5" id="Vector_218" />
          <path d={svgPaths.p139f5200} fill="#EAF1E5" id="Vector_219" />
          <path d={svgPaths.pe860400} fill="#EAF1E5" id="Vector_220" />
          <path d={svgPaths.p36393e00} fill="#EAF1E5" id="Vector_221" />
          <path d={svgPaths.p4854600} fill="#EAF1E5" id="Vector_222" />
          <path d={svgPaths.p2eb76700} fill="#EAF1E5" id="Vector_223" />
          <path d={svgPaths.p2559e00} fill="#EAF1E5" id="Vector_224" />
          <path d={svgPaths.p19801ec0} fill="#EAF1E5" id="Vector_225" />
          <path d={svgPaths.p35339900} fill="#EAF1E5" id="Vector_226" />
          <path d={svgPaths.p34624e00} fill="#EAF1E5" id="Vector_227" />
          <path d={svgPaths.pbe2d600} fill="#EAF1E5" id="Vector_228" />
          <path d={svgPaths.p10c04000} fill="#EAF1E5" id="Vector_229" />
          <path d={svgPaths.p16177b00} fill="#EAF1E5" id="Vector_230" />
          <path d={svgPaths.p200b8400} fill="#EAF1E5" id="Vector_231" />
          <path d={svgPaths.pf675800} fill="#EAF1E5" id="Vector_232" />
          <path d={svgPaths.p2b986300} fill="#EAF1E5" id="Vector_233" />
          <path d={svgPaths.p16687780} fill="#EAF1E5" id="Vector_234" />
          <path d={svgPaths.p1e303100} fill="#EAF1E5" id="Vector_235" />
          <path d={svgPaths.p11016c00} fill="#EAF1E5" id="Vector_236" />
          <path d={svgPaths.pf63e000} fill="#EAF1E5" id="Vector_237" />
          <path d={svgPaths.p35e0c070} fill="#EAF1E5" id="Vector_238" />
          <path d={svgPaths.p11054140} fill="#EAF1E5" id="Vector_239" />
          <path d={svgPaths.p3a1bef80} fill="#EAF1E5" id="Vector_240" />
          <path d={svgPaths.p2d408b40} fill="#EAF1E5" id="Vector_241" />
          <path d={svgPaths.p161480} fill="#EAF1E5" id="Vector_242" />
          <path d={svgPaths.paf514c0} fill="#EAF1E5" id="Vector_243" />
          <path d={svgPaths.p17e44080} fill="#EAF1E5" id="Vector_244" />
          <path d={svgPaths.p1c9fce00} fill="#EAF1E5" id="Vector_245" />
          <path d={svgPaths.p2db19700} fill="#EAF1E5" id="Vector_246" />
          <path d={svgPaths.p3014d680} fill="#EAF1E5" id="Vector_247" />
          <path d={svgPaths.p23895e80} fill="#EAF1E5" id="Vector_248" />
          <path d={svgPaths.p2f8b05f2} fill="#EAF1E5" id="Vector_249" />
          <path d={svgPaths.p39358040} fill="#EAF1E5" id="Vector_250" />
          <path d={svgPaths.p10af0a00} fill="#EAF1E5" id="Vector_251" />
          <path d={svgPaths.pfb7bd00} fill="#EAF1E5" id="Vector_252" />
          <path d={svgPaths.p214893e0} fill="#EAF1E5" id="Vector_253" />
          <path d={svgPaths.p23aaae00} fill="#EAF1E5" id="Vector_254" />
          <path d={svgPaths.p5550100} fill="#EAF1E5" id="Vector_255" />
          <path d={svgPaths.p124bcac0} fill="#EAF1E5" id="Vector_256" />
          <path d={svgPaths.p2f772170} fill="#EAF1E5" id="Vector_257" />
          <path d={svgPaths.p21171500} fill="#EAF1E5" id="Vector_258" />
          <path d={svgPaths.p31cfec00} fill="#EAF1E5" id="Vector_259" />
          <path d={svgPaths.p1b7a77f0} fill="#EAF1E5" id="Vector_260" />
          <path d={svgPaths.p355353f0} fill="#EAF1E5" id="Vector_261" />
          <path d={svgPaths.p3a3cd700} fill="#EAF1E5" id="Vector_262" />
          <path d={svgPaths.p2de4c400} fill="#EAF1E5" id="Vector_263" />
          <path d={svgPaths.p15c48f00} fill="#EAF1E5" id="Vector_264" />
          <path d={svgPaths.p3f09c980} fill="#EAF1E5" id="Vector_265" />
          <path d={svgPaths.p346421c0} fill="#EAF1E5" id="Vector_266" />
          <path d={svgPaths.p206b9300} fill="#EAF1E5" id="Vector_267" />
          <path d={svgPaths.p36ec0300} fill="#EAF1E5" id="Vector_268" />
          <path d={svgPaths.p2d1cc460} fill="#EAF1E5" id="Vector_269" />
          <path d={svgPaths.p2e0ce900} fill="#EAF1E5" id="Vector_270" />
          <path d={svgPaths.p36b95500} fill="#EAF1E5" id="Vector_271" />
          <path d={svgPaths.p1b06baf0} fill="#EAF1E5" id="Vector_272" />
          <path d={svgPaths.p29694200} fill="#EAF1E5" id="Vector_273" />
          <path d={svgPaths.p16b325b0} fill="#EAF1E5" id="Vector_274" />
          <path d={svgPaths.pd718d40} fill="#EAF1E5" id="Vector_275" />
          <path d={svgPaths.p110d1780} fill="#EAF1E5" id="Vector_276" />
          <path d={svgPaths.p31bf5300} fill="#EAF1E5" id="Vector_277" />
          <path d={svgPaths.p199db380} fill="#EAF1E5" id="Vector_278" />
          <path d={svgPaths.p7fd0d00} fill="#EAF1E5" id="Vector_279" />
          <path d={svgPaths.p1692da80} fill="#EAF1E5" id="Vector_280" />
          <path d={svgPaths.p2e583d40} fill="#EAF1E5" id="Vector_281" />
          <path d={svgPaths.p1177c980} fill="#EAF1E5" id="Vector_282" />
          <path d={svgPaths.p12925980} fill="#EAF1E5" id="Vector_283" />
          <path d={svgPaths.p12e0ff00} fill="#EAF1E5" id="Vector_284" />
          <path d={svgPaths.p1763ae00} fill="#EAF1E5" id="Vector_285" />
          <path d={svgPaths.p37f44c00} fill="#EAF1E5" id="Vector_286" />
          <path d={svgPaths.pc3ac600} fill="#EAF1E5" id="Vector_287" />
          <path d={svgPaths.p38e08c00} fill="#EAF1E5" id="Vector_288" />
          <path d={svgPaths.p1a018000} fill="#EAF1E5" id="Vector_289" />
          <path d={svgPaths.pc98fc00} fill="#EAF1E5" id="Vector_290" />
          <path d={svgPaths.p31fb8700} fill="#EAF1E5" id="Vector_291" />
          <path d={svgPaths.p1f367780} fill="#EAF1E5" id="Vector_292" />
          <path d={svgPaths.p2da6000} fill="#EAF1E5" id="Vector_293" />
          <path d={svgPaths.p14d6e780} fill="#EAF1E5" id="Vector_294" />
          <path d={svgPaths.p3797fbf0} fill="#EAF1E5" id="Vector_295" />
          <path d={svgPaths.p20dc2700} fill="#EAF1E5" id="Vector_296" />
          <path d={svgPaths.p15f61280} fill="#EAF1E5" id="Vector_297" />
          <path d={svgPaths.p3e261400} fill="#EAF1E5" id="Vector_298" />
          <path d={svgPaths.p3a3b2100} fill="#EAF1E5" id="Vector_299" />
          <path d={svgPaths.p1ca70700} fill="#EAF1E5" id="Vector_300" />
          <path d={svgPaths.p25155240} fill="#EAF1E5" id="Vector_301" />
          <path d={svgPaths.p16e51680} fill="#EAF1E5" id="Vector_302" />
          <path d={svgPaths.pf70cb0} fill="#EAF1E5" id="Vector_303" />
          <path d={svgPaths.p1a711b00} fill="#EAF1E5" id="Vector_304" />
          <path d={svgPaths.pf3a4c00} fill="#EAF1E5" id="Vector_305" />
          <path d={svgPaths.p3cff6a80} fill="#EAF1E5" id="Vector_306" />
          <path d={svgPaths.p36597b40} fill="#EAF1E5" id="Vector_307" />
          <path d={svgPaths.p3fba0500} fill="#EAF1E5" id="Vector_308" />
          <path d={svgPaths.pe828300} fill="#EAF1E5" id="Vector_309" />
          <path d={svgPaths.p369db700} fill="#EAF1E5" id="Vector_310" />
          <path d={svgPaths.p1e76a930} fill="#EAF1E5" id="Vector_311" />
          <path d={svgPaths.p260879f0} fill="#EAF1E5" id="Vector_312" />
          <path d={svgPaths.p1ea42800} fill="#EAF1E5" id="Vector_313" />
          <path d={svgPaths.p1163a500} fill="#EAF1E5" id="Vector_314" />
          <path d={svgPaths.pca99800} fill="#EAF1E5" id="Vector_315" />
          <path d={svgPaths.p2a5a3c00} fill="#EAF1E5" id="Vector_316" />
          <path d={svgPaths.p2d300300} fill="#EAF1E5" id="Vector_317" />
          <path d={svgPaths.p233b6bb0} fill="#EAF1E5" id="Vector_318" />
          <path d={svgPaths.p37b43e80} fill="#EAF1E5" id="Vector_319" />
          <path d={svgPaths.p2c2eb380} fill="#EAF1E5" id="Vector_320" />
          <path d={svgPaths.p39b41300} fill="#EAF1E5" id="Vector_321" />
          <path d={svgPaths.p1412e180} fill="#EAF1E5" id="Vector_322" />
          <path d={svgPaths.p1a339600} fill="#EAF1E5" id="Vector_323" />
          <path d={svgPaths.pe186800} fill="#EAF1E5" id="Vector_324" />
          <path d={svgPaths.p22f9dd00} fill="#EAF1E5" id="Vector_325" />
          <path d={svgPaths.p365f82fa} fill="#EAF1E5" id="Vector_326" />
          <path d={svgPaths.p38f39e80} fill="#EAF1E5" id="Vector_327" />
          <path d={svgPaths.pca103c0} fill="#EAF1E5" id="Vector_328" />
          <path d={svgPaths.p239fd300} fill="#EAF1E5" id="Vector_329" />
          <path d={svgPaths.pabd5000} fill="#EAF1E5" id="Vector_330" />
          <path d={svgPaths.p35454080} fill="#EAF1E5" id="Vector_331" />
          <path d={svgPaths.p3b09fc00} fill="#EAF1E5" id="Vector_332" />
          <path d={svgPaths.p37742280} fill="#EAF1E5" id="Vector_333" />
          <path d={svgPaths.p3e8fc700} fill="#EAF1E5" id="Vector_334" />
          <path d={svgPaths.p7116780} fill="#EAF1E5" id="Vector_335" />
          <path d={svgPaths.p51f1900} fill="#EAF1E5" id="Vector_336" />
          <path d={svgPaths.p3e31aa00} fill="#EAF1E5" id="Vector_337" />
          <path d={svgPaths.p40cb00} fill="#EAF1E5" id="Vector_338" />
          <path d={svgPaths.p349bb780} fill="#EAF1E5" id="Vector_339" />
          <path d={svgPaths.p7e8d8f0} fill="#EAF1E5" id="Vector_340" />
          <path d={svgPaths.p2c2d2d80} fill="#EAF1E5" id="Vector_341" />
          <path d={svgPaths.p2ba0b700} fill="#EAF1E5" id="Vector_342" />
          <path d={svgPaths.p25b15c60} fill="#EAF1E5" id="Vector_343" />
          <path d={svgPaths.p38519d00} fill="#EAF1E5" id="Vector_344" />
          <path d={svgPaths.p3bb95700} fill="#EAF1E5" id="Vector_345" />
          <path d={svgPaths.p5194200} fill="#EAF1E5" id="Vector_346" />
          <path d={svgPaths.p3aab7c00} fill="#EAF1E5" id="Vector_347" />
          <path d={svgPaths.p3ca60780} fill="#EAF1E5" id="Vector_348" />
          <path d={svgPaths.p19179800} fill="#EAF1E5" id="Vector_349" />
          <path d={svgPaths.p1374a680} fill="#EAF1E5" id="Vector_350" />
          <path d={svgPaths.p9e42f00} fill="#EAF1E5" id="Vector_351" />
          <path d={svgPaths.p19c41280} fill="#EAF1E5" id="Vector_352" />
          <path d={svgPaths.p15b3e400} fill="#EAF1E5" id="Vector_353" />
          <path d={svgPaths.p1bdf0400} fill="#EAF1E5" id="Vector_354" />
          <path d={svgPaths.p27033b80} fill="#EAF1E5" id="Vector_355" />
          <path d={svgPaths.p39037e80} fill="#EAF1E5" id="Vector_356" />
          <path d={svgPaths.p382b3400} fill="#EAF1E5" id="Vector_357" />
          <path d={svgPaths.p138d9d80} fill="#EAF1E5" id="Vector_358" />
          <path d={svgPaths.p3f2f300} fill="#EAF1E5" id="Vector_359" />
          <path d={svgPaths.p367680} fill="#EAF1E5" id="Vector_360" />
          <path d={svgPaths.p11fe0980} fill="#EAF1E5" id="Vector_361" />
          <path d={svgPaths.p3f804680} fill="#EAF1E5" id="Vector_362" />
          <path d={svgPaths.p25c11980} fill="#EAF1E5" id="Vector_363" />
          <path d={svgPaths.p3acc1e80} fill="#EAF1E5" id="Vector_364" />
          <path d={svgPaths.p13f2f100} fill="#EAF1E5" id="Vector_365" />
          <path d={svgPaths.p3824b100} fill="#6CC02E" id="Vector_366" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[105px] items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Icon2 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container17 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Lebih sedikit</p>
      </div>
    </div>
  );
}

function Container81() {
  return <div className="bg-[#eaf1e5] relative rounded-[2px] shrink-0 size-[10px]" data-name="Container" />;
}

function Container82() {
  return <div className="bg-[#c8ecab] relative rounded-[2px] shrink-0 size-[10px]" data-name="Container" />;
}

function Container83() {
  return <div className="bg-[#99dd6a] relative rounded-[2px] shrink-0 size-[10px]" data-name="Container" />;
}

function Container84() {
  return <div className="bg-[#6cc02e] relative rounded-[2px] shrink-0 size-[10px]" data-name="Container" />;
}

function Container85() {
  return <div className="bg-[#58a700] relative rounded-[2px] shrink-0 size-[10px]" data-name="Container" />;
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Lebih banyak</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[24px] relative shrink-0 w-[702px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pt-[8px] relative size-full">
        <Text6 />
        <Container81 />
        <Container82 />
        <Container83 />
        <Container84 />
        <Container85 />
        <Text7 />
      </div>
    </div>
  );
}

function ContributionHeatmap() {
  return (
    <div className="relative shrink-0 w-full" data-name="ContributionHeatmap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
        <Container80 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#dbe8d2,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
      <div className="content-stretch flex flex-col items-start px-[17px] py-[21px] relative size-full">
        <ContributionHeatmap />
      </div>
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[247px] relative shrink-0 w-[736px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Heading3 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[658.09px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#58a700] text-[12px] text-center whitespace-nowrap">Selengkapnya</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Outfit:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6d8a76] text-[12px] top-0 tracking-[1.2px] uppercase whitespace-nowrap">Histori Singkat</p>
        <Button4 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[14px] relative shrink-0 text-[#6cc02e] text-[14px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#e9f3e3] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Text8 />
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[13.5px] relative shrink-0 text-[#6d8a76] text-[9px] uppercase whitespace-nowrap">Agt</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Hari ini</p>
      </div>
    </div>
  );
}

function Container90() {
  return <div className="bg-[#6cc02e] h-[6px] relative rounded-[33554400px] shrink-0 w-[458.797px]" data-name="Container" />;
}

function Container89() {
  return (
    <div className="bg-[#e9f3e3] content-stretch flex flex-col h-[6px] items-start overflow-clip relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <Container90 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <Container89 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="flex-[588.203_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph5 />
        <ContainerMargin4 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[20px] relative shrink-0 text-[#6cc02e] text-[14px] whitespace-nowrap">7/9</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[64px] relative shrink-0 w-[734px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Container87 />
        <Container88 />
        <Text9 />
        <Icon3 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-[#dbe8d2] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Outfit:Bold',sans-serif] font-bold leading-[16px] left-[367.25px] text-[#58a700] text-[12px] text-center top-[13px] tracking-[0.3px] uppercase whitespace-nowrap">Lihat Semua Histori</p>
      </div>
    </div>
  );
}

function RecentHistory() {
  return (
    <div className="bg-white h-[107px] relative rounded-[16px] shrink-0 w-full" data-name="RecentHistory">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Button5 />
        <Button6 />
      </div>
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#dbe8d2,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
    </div>
  );
}

function RecentHistoryMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="RecentHistory:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <RecentHistory />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="h-[159px] relative shrink-0 w-[736px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container86 />
        <RecentHistoryMargin />
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[768px] px-[16px] py-[24px] relative shrink-0 w-[768px]" data-name="DashboardPage">
      <Container6 />
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function DashboardPageMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="DashboardPage:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <DashboardPage />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1309_0_0] h-full min-h-[895px] min-w-px relative" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <DashboardPageMargin />
      </div>
    </div>
  );
}

function AppShell() {
  return (
    <div className="bg-[#f6faf2] h-[895px] relative shrink-0 w-full" data-name="AppShell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <SidebarNav />
        <MainContent />
      </div>
    </div>
  );
}

export default function ReviewPrdBeforeDevelopment() {
  return (
    <div className="bg-[#f6faf2] content-stretch flex flex-col items-start relative size-full" data-name="Review PRD Before Development">
      <AppShell />
    </div>
  );
}