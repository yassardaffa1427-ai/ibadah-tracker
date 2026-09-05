import imgRectangle4 from "./1bbb101f773530ebcd1dbd3a585aa20886c29ed5.png";

function Container() {
  return (
    <div className="bg-[#edf8f3] content-stretch flex flex-col items-center justify-center relative rounded-[9.886px] shrink-0 size-[42.826px]" data-name="Container">
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[25.693px] relative shrink-0 text-[#31b98b] text-[25.693px] whitespace-nowrap">😇</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] relative shrink-0 whitespace-nowrap">
      <p className="font-['DM_Sans:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#1f3b28] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Sedikit lagi Sempurna
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#65726d] text-[12px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Besok harus lebih semangat lagi! 🔥
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#61967a] text-[14px] whitespace-nowrap">8 dari 11 selesai</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[28px] relative shrink-0 text-[#31b98b] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          73%
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container3() {
  return <div className="bg-gradient-to-r from-[#016742] h-[6px] relative rounded-[39407900px] shrink-0 to-[#2db486] w-[162px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="bg-[#e9f3e3] content-stretch flex flex-col h-[5.982px] items-start overflow-clip relative rounded-[39407900px] shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <Container1 />
      <ContainerMargin />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[8px] relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#61967a] text-[12px] whitespace-nowrap">Task Belum dikerjakan:</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] relative rounded-[39407900px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[1.174px] border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[39407900px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9.174px] py-[3.174px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e04a3f] text-[12px] whitespace-nowrap">Kajian</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] relative rounded-[39407900px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[1.174px] border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[39407900px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9.174px] py-[3.174px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e04a3f] text-[12px] whitespace-nowrap">Tahajud</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] relative rounded-[39407900px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[1.174px] border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[39407900px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9.174px] py-[3.174px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e04a3f] text-[12px] whitespace-nowrap">Zikir Petang</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[28.349px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start pt-[6px] relative size-full">
        <Text2 />
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
        <Paragraph />
        <Container5 />
      </div>
    </div>
  );
}

export default function CekUp() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="cek UP">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.174px] relative rounded-[inherit] size-full">
        <div className="h-[165px] relative shrink-0 w-full">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
        </div>
        <Frame2 />
        <Frame1 />
        <Container4 />
      </div>
      <div aria-hidden className="absolute border-[#dbe8d2] border-[1.174px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#dbe8d2,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
    </div>
  );
}