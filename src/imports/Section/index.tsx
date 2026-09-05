import svgPaths from "./svg-8makprx6fh";

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Rekap Harian</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[45px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="45" preserveAspectRatio="none" viewBox="0 0 45 45" width="45">
        <g id="Group 1">
          <rect fill="#EDF8F3" height="44" id="Rectangle 5" rx="9.5" stroke="#D2EEE1" width="44" x="0.5" y="0.5" />
          <path clipRule="evenodd" d={svgPaths.p12a34b00} fill="#297A5D" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#65726d] text-[14px] whitespace-nowrap">Kewajiban: 9 dari 11 selesai</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[28px] relative shrink-0 text-[#2e9973] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          82%
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container2() {
  return <div className="bg-gradient-to-r from-[#bfeb77] h-[6px] relative rounded-[39407900px] shrink-0 to-[#31b98b] w-[186px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="bg-[#edf8f3] content-stretch flex flex-col h-[5.982px] items-start overflow-clip relative rounded-[39407900px] shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Container:margin">
      <Container1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <Container />
      <ContainerMargin />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Group />
        <Frame2 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] whitespace-nowrap">Belum dikerjakan:</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] relative rounded-[39407900px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[1.174px] border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[39407900px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9.174px] py-[3.174px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#ef4444] text-[12px] whitespace-nowrap">Kajian</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] relative rounded-[39407900px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[1.174px] border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[39407900px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9.174px] py-[3.174px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#ef4444] text-[12px] whitespace-nowrap">Murojaah Hafalan</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[28.349px] relative shrink-0 w-[327.157px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start pt-[6px] relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[327.157px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[12px] relative size-full">
        <Paragraph />
        <Container4 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[45px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="45" preserveAspectRatio="none" viewBox="0 0 45 45" width="45">
        <g id="Group 2">
          <rect fill="#EBF3FF" height="44" id="Rectangle 5" rx="9.5" stroke="#CDE1FF" width="44" x="0.5" y="0.5" />
          <path clipRule="evenodd" d={svgPaths.pe59b900} fill="#0052CD" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#65726d] text-[14px] whitespace-nowrap">Sunnah: x dari x selesai</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[28px] relative shrink-0 text-[#0067ff] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          82%
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container7() {
  return <div className="bg-gradient-to-r from-[#88e5ff] h-[6px] relative rounded-[39407900px] shrink-0 to-[#1971f6] w-[186px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="bg-[#edf8f3] content-stretch flex flex-col h-[5.982px] items-start overflow-clip relative rounded-[39407900px] shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Container:margin">
      <Container6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <Container5 />
      <ContainerMargin1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[16px] relative size-full">
        <Group1 />
        <Frame1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] whitespace-nowrap">Sunnah yg dikerjakan</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[rgba(56,136,255,0.1)] relative rounded-[39407900px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[1.174px] border-[rgba(56,136,255,0.2)] border-solid inset-0 pointer-events-none rounded-[39407900px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9.174px] py-[3.174px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3888ff] text-[12px] whitespace-nowrap">Puasa senin kamis</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[rgba(56,136,255,0.1)] relative rounded-[39407900px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[1.174px] border-[rgba(56,136,255,0.2)] border-solid inset-0 pointer-events-none rounded-[39407900px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9.174px] py-[3.174px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3888ff] text-[12px] whitespace-nowrap">Sunnah rawatib: 2 rakaat</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[28.349px] relative shrink-0 w-[327.157px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start pt-[6px] relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[327.157px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Paragraph1 />
        <Container9 />
      </div>
    </div>
  );
}

function RekapHarian() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="RekapHarian">
      <div aria-hidden className="absolute border-[#d2eee1] border-[1.174px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#d2eee1,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[17.174px] relative size-full">
        <Frame3 />
        <Container3 />
        <Frame />
        <Container8 />
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

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative size-full" data-name="Section">
      <Heading />
      <RekapHarianMargin />
    </div>
  );
}