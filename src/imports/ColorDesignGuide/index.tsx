function Header() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start not-italic overflow-clip relative shrink-0 w-full" data-name="Header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#121212] text-[40px] whitespace-nowrap">Color Design Guide</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#666] text-[15px] w-[min-content]">{`Color token library — primary, secondary, semantic (error & warning), and grayscale palettes, each with an 11-step scale from 50 (lightest) to 950 (darkest). Every swatch is bound to a Figma variable in the "Colors" collection.`}</p>
    </div>
  );
}

function SwatchPrimary() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/50">
      <div className="bg-[#f6fcf9] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#F6FCF9</p>
    </div>
  );
}

function SwatchPrimary1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/100">
      <div className="bg-[#edf8f3] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#EDF8F3</p>
    </div>
  );
}

function SwatchPrimary2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/200">
      <div className="bg-[#d2eee1] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#D2EEE1</p>
    </div>
  );
}

function SwatchPrimary3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/300">
      <div className="bg-[#b7e4cf] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#B7E4CF</p>
    </div>
  );
}

function SwatchPrimary4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/400">
      <div className="bg-[#81d0af] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#81D0AF</p>
    </div>
  );
}

function SwatchPrimary5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/500">
      <div className="bg-[#31b98b] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#31B98B</p>
    </div>
  );
}

function SwatchPrimary6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/600">
      <div className="bg-[#2e9973] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#2E9973</p>
    </div>
  );
}

function SwatchPrimary7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/700">
      <div className="bg-[#297a5d] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#297A5D</p>
    </div>
  );
}

function SwatchPrimary8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/800">
      <div className="bg-[#245c47] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#245C47</p>
    </div>
  );
}

function SwatchPrimary9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/900">
      <div className="bg-[#1d4032] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#1D4032</p>
    </div>
  );
}

function SwatchPrimary10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/primary/950">
      <div className="bg-[#15261f] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#15261F</p>
    </div>
  );
}

function PrimaryRow() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_12px] items-start overflow-clip relative shrink-0 w-full" data-name="primary/Row">
      <SwatchPrimary />
      <SwatchPrimary1 />
      <SwatchPrimary2 />
      <SwatchPrimary3 />
      <SwatchPrimary4 />
      <SwatchPrimary5 />
      <SwatchPrimary6 />
      <SwatchPrimary7 />
      <SwatchPrimary8 />
      <SwatchPrimary9 />
      <SwatchPrimary10 />
    </div>
  );
}

function SectionPrimary() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Section/primary">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#121212] text-[22px] whitespace-nowrap">Primary</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap">Warna utama brand — dipakai untuk aksi utama, CTA, dan elemen penekanan.</p>
      <PrimaryRow />
    </div>
  );
}

function SwatchSecondary() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/50">
      <div className="bg-[#f3f7f5] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#F3F7F5</p>
    </div>
  );
}

function SwatchSecondary1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/100">
      <div className="bg-[#e7efea] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#E7EFEA</p>
    </div>
  );
}

function SwatchSecondary2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/200">
      <div className="bg-[#c4d8cc] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#C4D8CC</p>
    </div>
  );
}

function SwatchSecondary3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/300">
      <div className="bg-[#a1c1af] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#A1C1AF</p>
    </div>
  );
}

function SwatchSecondary4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/400">
      <div className="bg-[#61967a] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#61967A</p>
    </div>
  );
}

function SwatchSecondary5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/500">
      <div className="bg-[#016742] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#016742</p>
    </div>
  );
}

function SwatchSecondary6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/600">
      <div className="bg-[#0b5638] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#0B5638</p>
    </div>
  );
}

function SwatchSecondary7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/700">
      <div className="bg-[#10462e] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#10462E</p>
    </div>
  );
}

function SwatchSecondary8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/800">
      <div className="bg-[#113625] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#113625</p>
    </div>
  );
}

function SwatchSecondary9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/900">
      <div className="bg-[#10271c] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#10271C</p>
    </div>
  );
}

function SwatchSecondary10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/secondary/950">
      <div className="bg-[#0c1913] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#0C1913</p>
    </div>
  );
}

function SecondaryRow() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_12px] items-start overflow-clip relative shrink-0 w-full" data-name="secondary/Row">
      <SwatchSecondary />
      <SwatchSecondary1 />
      <SwatchSecondary2 />
      <SwatchSecondary3 />
      <SwatchSecondary4 />
      <SwatchSecondary5 />
      <SwatchSecondary6 />
      <SwatchSecondary7 />
      <SwatchSecondary8 />
      <SwatchSecondary9 />
      <SwatchSecondary10 />
    </div>
  );
}

function SectionSecondary() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Section/secondary">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#121212] text-[22px] whitespace-nowrap">Secondary</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap">Warna pendukung — dipakai untuk elemen sekunder dan aksen yang melengkapi warna primary.</p>
      <SecondaryRow />
    </div>
  );
}

function SwatchSemanticRed() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/50">
      <div className="bg-[#fff6f5] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FFF6F5</p>
    </div>
  );
}

function SwatchSemanticRed1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/100">
      <div className="bg-[#ffeeeb] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FFEEEB</p>
    </div>
  );
}

function SwatchSemanticRed2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/200">
      <div className="bg-[#ffd4cd] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FFD4CD</p>
    </div>
  );
}

function SwatchSemanticRed3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/300">
      <div className="bg-[#ffb9b0] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FFB9B0</p>
    </div>
  );
}

function SwatchSemanticRed4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/400">
      <div className="bg-[#fe877c] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FE877C</p>
    </div>
  );
}

function SwatchSemanticRed5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/500">
      <div className="bg-[#ef4444] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#EF4444</p>
    </div>
  );
}

function SwatchSemanticRed6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/600">
      <div className="bg-[#c53b3a] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#C53B3A</p>
    </div>
  );
}

function SwatchSemanticRed7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/700">
      <div className="bg-[#9d3330] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#9D3330</p>
    </div>
  );
}

function SwatchSemanticRed8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/800">
      <div className="bg-[#772a26] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#772A26</p>
    </div>
  );
}

function SwatchSemanticRed9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/900">
      <div className="bg-[#53201c] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#53201C</p>
    </div>
  );
}

function SwatchSemanticRed10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-red/950">
      <div className="bg-[#301613] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#301613</p>
    </div>
  );
}

function SemanticRedRow() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_12px] items-start overflow-clip relative shrink-0 w-full" data-name="semantic-red/Row">
      <SwatchSemanticRed />
      <SwatchSemanticRed1 />
      <SwatchSemanticRed2 />
      <SwatchSemanticRed3 />
      <SwatchSemanticRed4 />
      <SwatchSemanticRed5 />
      <SwatchSemanticRed6 />
      <SwatchSemanticRed7 />
      <SwatchSemanticRed8 />
      <SwatchSemanticRed9 />
      <SwatchSemanticRed10 />
    </div>
  );
}

function SectionSemanticRed() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Section/semantic-red">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#121212] text-[22px] whitespace-nowrap">Error (Red)</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap">Digunakan untuk pesan error, validasi gagal, dan aksi destruktif.</p>
      <SemanticRedRow />
    </div>
  );
}

function SwatchSemanticYellow() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/50">
      <div className="bg-[#fffbf4] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FFFBF4</p>
    </div>
  );
}

function SwatchSemanticYellow1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/100">
      <div className="bg-[#fff7e9] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FFF7E9</p>
    </div>
  );
}

function SwatchSemanticYellow2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/200">
      <div className="bg-[#ffebc9] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FFEBC9</p>
    </div>
  );
}

function SwatchSemanticYellow3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/300">
      <div className="bg-[#ffe0a8] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FFE0A8</p>
    </div>
  );
}

function SwatchSemanticYellow4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/400">
      <div className="bg-[#f8ca6b] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#F8CA6B</p>
    </div>
  );
}

function SwatchSemanticYellow5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/500">
      <div className="bg-[#eab308] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#EAB308</p>
    </div>
  );
}

function SwatchSemanticYellow6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/600">
      <div className="bg-[#c19413] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#C19413</p>
    </div>
  );
}

function SwatchSemanticYellow7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/700">
      <div className="bg-[#9a7616] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#9A7616</p>
    </div>
  );
}

function SwatchSemanticYellow8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/800">
      <div className="bg-[#745916] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#745916</p>
    </div>
  );
}

function SwatchSemanticYellow9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/900">
      <div className="bg-[#503e14] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#503E14</p>
    </div>
  );
}

function SwatchSemanticYellow10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/semantic-yellow/950">
      <div className="bg-[#2f250f] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#2F250F</p>
    </div>
  );
}

function SemanticYellowRow() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_12px] items-start overflow-clip relative shrink-0 w-full" data-name="semantic-yellow/Row">
      <SwatchSemanticYellow />
      <SwatchSemanticYellow1 />
      <SwatchSemanticYellow2 />
      <SwatchSemanticYellow3 />
      <SwatchSemanticYellow4 />
      <SwatchSemanticYellow5 />
      <SwatchSemanticYellow6 />
      <SwatchSemanticYellow7 />
      <SwatchSemanticYellow8 />
      <SwatchSemanticYellow9 />
      <SwatchSemanticYellow10 />
    </div>
  );
}

function SectionSemanticYellow() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Section/semantic-yellow">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#121212] text-[22px] whitespace-nowrap">Warning (Yellow)</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap">Digunakan untuk peringatan dan status yang butuh perhatian pengguna.</p>
      <SemanticYellowRow />
    </div>
  );
}

function SectionSemantic() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Section/Semantic">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#121212] text-[22px] whitespace-nowrap">Semantic</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap">Warna status — merah untuk error/danger, kuning untuk warning.</p>
      <SectionSemanticRed />
      <SectionSemanticYellow />
    </div>
  );
}

function SwatchGrayscale() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/50">
      <div className="bg-[#fafafa] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#FAFAFA</p>
    </div>
  );
}

function SwatchGrayscale1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/100">
      <div className="bg-[#f1f3f2] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#F1F3F2</p>
    </div>
  );
}

function SwatchGrayscale2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/200">
      <div className="bg-[#e4e7e6] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#E4E7E6</p>
    </div>
  );
}

function SwatchGrayscale3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/300">
      <div className="bg-[#d1d6d4] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#D1D6D4</p>
    </div>
  );
}

function SwatchGrayscale4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/400">
      <div className="bg-[#aeb7b4] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#AEB7B4</p>
    </div>
  );
}

function SwatchGrayscale5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/500">
      <div className="bg-[#85938e] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#85938E</p>
    </div>
  );
}

function SwatchGrayscale6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/600">
      <div className="bg-[#65726d] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#65726D</p>
    </div>
  );
}

function SwatchGrayscale7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/700">
      <div className="bg-[#4d5653] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#4D5653</p>
    </div>
  );
}

function SwatchGrayscale8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/800">
      <div className="bg-[#353b39] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#353B39</p>
    </div>
  );
}

function SwatchGrayscale9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/900">
      <div className="bg-[#222624] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#222624</p>
    </div>
  );
}

function SwatchGrayscale10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[108px]" data-name="Swatch/grayscale/950">
      <div className="bg-[#131615] h-[72px] relative rounded-[8px] shrink-0 w-[108px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[10px] whitespace-nowrap">#131615</p>
    </div>
  );
}

function GrayscaleRow() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_12px] items-start overflow-clip relative shrink-0 w-full" data-name="grayscale/Row">
      <SwatchGrayscale />
      <SwatchGrayscale1 />
      <SwatchGrayscale2 />
      <SwatchGrayscale3 />
      <SwatchGrayscale4 />
      <SwatchGrayscale5 />
      <SwatchGrayscale6 />
      <SwatchGrayscale7 />
      <SwatchGrayscale8 />
      <SwatchGrayscale9 />
      <SwatchGrayscale10 />
    </div>
  );
}

function SectionGrayscale() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Section/grayscale">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#121212] text-[22px] whitespace-nowrap">Grayscale</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap">Warna netral — dipakai untuk teks, border, background, dan divider.</p>
      <GrayscaleRow />
    </div>
  );
}

export default function ColorDesignGuide() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[72px] items-start pb-[120px] pt-[80px] px-[80px] relative size-full" data-name="Color Design Guide">
      <Header />
      <SectionPrimary />
      <SectionSecondary />
      <SectionSemantic />
      <SectionGrayscale />
    </div>
  );
}