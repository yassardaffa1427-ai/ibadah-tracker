import svgPaths from "./svg-oaoud0d0sn";

function StickyPlaceholderSidebarNav() {
  return <div className="h-[895px] relative shrink-0 w-[240px]" data-name="Sticky placeholder – SidebarNav" />;
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Pengaturan</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[544px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Serif_Display:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1f3b28] text-[24px] whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Heading />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Profil</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon">
          <path d={svgPaths.p997af00} id="Vector" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#e9f3e3] h-[60px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function ButtonUbahFotoProfil() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[64px]" data-name="Button - Ubah foto profil">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container3 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Foto Profil</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Klik untuk mengganti</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[112.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <ButtonUbahFotoProfil />
        <Container4 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-[502px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Nama *</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f4f8f0] h-[38px] relative rounded-[8px] shrink-0 w-[502px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-[rgba(31,59,40,0.5)] w-full">Nama kamu</p>
      </div>
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label />
        <TextInput />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[245px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Usia</p>
      </div>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="bg-[#f4f8f0] h-[38px] relative rounded-[8px] shrink-0 w-[245px]" data-name="Number Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-[rgba(31,59,40,0.5)] w-full">25</p>
      </div>
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[245_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label1 />
        <NumberInput />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[245px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Gender</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center left-[17px] overflow-clip top-[9px] w-[199px]" data-name="Container">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Laki-laki</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10 6" width="10">
        <g id="Icon">
          <path d="M1 1L5 5L9 1" id="Vector" stroke="#1F3B28" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[225px] top-px w-[20px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-[#f4f8f0] h-[38px] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[245_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label2 />
        <Dropdown />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start py-[12px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e8b02a] drop-shadow-[0px_4px_0px_rgba(20,48,31,0.18)] h-[40px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Outfit:Bold',sans-serif] font-bold leading-[20px] left-[251.94px] text-[#14301f] text-[14px] text-center top-[10px] tracking-[0.14px] whitespace-nowrap">Simpan Profil</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-[502px]" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container5 />
        <Container6 />
        <Button />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#dbe8d2,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Container2 />
        <Form />
      </div>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="ProfileSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Heading1 />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">{`Streak & Badge`}</p>
      </div>
    </div>
  );
}

function Icon2() {
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

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[33px] relative shrink-0 text-[#6b7280] text-[22px] whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function StreakBadge() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-0" data-name="StreakBadge">
      <Icon2 />
      <Text />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StreakBadge />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[62.719px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Streak aktif</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[62.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container14 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['DM_Serif_Display:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#e8b02a] text-[24px] text-right whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] text-right whitespace-nowrap">Terpanjang</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[61.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container13 />
        <Container15 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="Icon">
          <path d={svgPaths.p2266d280} fill="#C3CEC6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">3 Hari</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Konsisten selama 3 hari</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[428_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(20,48,31,0.04)] opacity-45 relative rounded-[8px] shrink-0 w-[502px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[17px] py-[13px] relative size-full">
        <Icon3 />
        <Container17 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="Icon">
          <path d={svgPaths.p2266d280} fill="#C3CEC6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">7 Hari</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Satu minggu penuh</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[428_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[rgba(20,48,31,0.04)] content-stretch flex gap-[12px] items-center opacity-45 px-[17px] py-[13px] relative rounded-[8px] shrink-0 w-[502px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon4 />
      <Container19 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="Icon">
          <path d={svgPaths.p2266d280} fill="#C3CEC6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">14 Hari</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Dua minggu berturut-turut</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[428_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(20,48,31,0.04)] content-stretch flex gap-[12px] items-center opacity-45 px-[17px] py-[13px] relative rounded-[8px] shrink-0 w-[502px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon5 />
      <Container21 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="Icon">
          <path d={svgPaths.p2266d280} fill="#C3CEC6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">30 Hari</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Satu bulan konsisten</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[428_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[rgba(20,48,31,0.04)] content-stretch flex gap-[12px] items-center opacity-45 px-[17px] py-[13px] relative rounded-[8px] shrink-0 w-[502px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon6 />
      <Container23 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="Icon">
          <path d={svgPaths.p2266d280} fill="#C3CEC6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">60 Hari</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Dua bulan tanpa putus</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[428_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(20,48,31,0.04)] content-stretch flex gap-[12px] items-center opacity-45 px-[17px] py-[13px] relative rounded-[8px] shrink-0 w-[502px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon7 />
      <Container25 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="Icon">
          <path d={svgPaths.p2266d280} fill="#C3CEC6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">100 Hari</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Seratus hari — mashaa Allah</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[428_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[rgba(20,48,31,0.04)] content-stretch flex gap-[12px] items-center opacity-45 px-[17px] py-[13px] relative rounded-[8px] shrink-0 w-[502px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon8 />
      <Container27 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function BadgeTierList() {
  return (
    <div className="h-[428px] relative shrink-0 w-[502px]" data-name="BadgeTierList">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container16 />
        <ContainerMargin2 />
        <ContainerMargin3 />
        <ContainerMargin4 />
        <ContainerMargin5 />
        <ContainerMargin6 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#dbe8d2,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Container12 />
        <BadgeTierList />
      </div>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function StreakSection() {
  return (
    <div className="h-[600px] relative shrink-0 w-[544px]" data-name="StreakSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Heading2 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Jadwal Reminder</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Notifikasi akan dikirim pada jam yang ditentukan jika ibadah belum dikerjakan.</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Tahajud</p>
      </div>
    </div>
  );
}

function TimePicker() {
  return (
    <div className="bg-[#f4f8f0] h-[30.688px] relative rounded-[8px] shrink-0 w-[90.688px]" data-name="Time Picker">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[42.688px] relative shrink-0 w-[502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text1 />
        <TimePicker />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Subuh</p>
      </div>
    </div>
  );
}

function TimePicker1() {
  return (
    <div className="bg-[#f4f8f0] h-[30.688px] relative rounded-[8px] shrink-0 w-[89.688px]" data-name="Time Picker">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[42.688px] relative shrink-0 w-[502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text2 />
        <TimePicker1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Dhuha</p>
      </div>
    </div>
  );
}

function TimePicker2() {
  return (
    <div className="bg-[#f4f8f0] h-[30.688px] relative rounded-[8px] shrink-0 w-[87.688px]" data-name="Time Picker">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[42.688px] relative shrink-0 w-[502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text3 />
        <TimePicker2 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Zuhur</p>
      </div>
    </div>
  );
}

function TimePicker3() {
  return (
    <div className="bg-[#f4f8f0] h-[30.688px] relative rounded-[8px] shrink-0 w-[88.688px]" data-name="Time Picker">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[42.688px] relative shrink-0 w-[502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text4 />
        <TimePicker3 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Ashar</p>
      </div>
    </div>
  );
}

function TimePicker4() {
  return (
    <div className="bg-[#f4f8f0] h-[30.688px] relative rounded-[8px] shrink-0 w-[86.688px]" data-name="Time Picker">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[42.688px] relative shrink-0 w-[502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text5 />
        <TimePicker4 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Maghrib</p>
      </div>
    </div>
  );
}

function TimePicker5() {
  return (
    <div className="bg-[#f4f8f0] h-[30.688px] relative rounded-[8px] shrink-0 w-[88.688px]" data-name="Time Picker">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[42.688px] relative shrink-0 w-[502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text6 />
        <TimePicker5 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Isya</p>
      </div>
    </div>
  );
}

function TimePicker6() {
  return (
    <div className="bg-[#f4f8f0] h-[30.688px] relative rounded-[8px] shrink-0 w-[86.688px]" data-name="Time Picker">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[42.688px] relative shrink-0 w-[502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text7 />
        <TimePicker6 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Kajian</p>
      </div>
    </div>
  );
}

function TimePicker7() {
  return (
    <div className="bg-[#f4f8f0] h-[30.688px] relative rounded-[8px] shrink-0 w-[89.688px]" data-name="Time Picker">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[42.688px] relative shrink-0 w-[502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Text8 />
        <TimePicker7 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Murojaah Hafalan</p>
      </div>
    </div>
  );
}

function TimePicker8() {
  return (
    <div className="bg-[#f4f8f0] h-[30.688px] relative rounded-[8px] shrink-0 w-[88.688px]" data-name="Time Picker">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[54.688px] relative shrink-0 w-[502px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[12px] relative size-full">
        <Text9 />
        <TimePicker8 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#e8b02a] drop-shadow-[0px_4px_0px_rgba(20,48,31,0.18)] h-[40px] left-0 rounded-[14px] top-[8px] w-[502px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Outfit:Bold',sans-serif] font-bold leading-[20px] left-[251.13px] text-[#14301f] text-[14px] text-center top-[10px] tracking-[0.14px] whitespace-nowrap">Simpan Jadwal</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#dbe8d2,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Paragraph18 />
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
      </div>
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function ReminderSection() {
  return (
    <div className="h-[566.188px] relative shrink-0 w-[544px]" data-name="ReminderSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Heading3 />
        <ContainerMargin7 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Backup Data</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] w-[502px]">Data tersimpan lokal di browser. Ekspor secara berkala agar tidak kehilangan histori ibadahmu.</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#e8b02a] drop-shadow-[0px_4px_0px_rgba(20,48,31,0.18)] h-[40px] left-0 rounded-[14px] top-0 w-[502px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Outfit:Bold',sans-serif] font-bold leading-[20px] left-[251.97px] text-[#14301f] text-[14px] text-center top-[10px] tracking-[0.14px] whitespace-nowrap">Ekspor Data (JSON)</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(20,48,31,0.04)] border border-[#dbe8d2] border-solid h-[42px] left-0 rounded-[8px] top-[52px] w-[502px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Outfit:Medium',sans-serif] font-medium leading-[20px] left-[250.38px] text-[#1f3b28] text-[14px] text-center top-[10px] whitespace-nowrap">Impor Data</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[94px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbe8d2] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#dbe8d2,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Paragraph19 />
        <Container40 />
      </div>
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function BackupSection() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="BackupSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Heading4 />
        <ContainerMargin8 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#e04a3f] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Zona Berbahaya</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] w-[502px]">Hapus seluruh data histori ibadah (catatan harian, checklist, foto/file). Profil dan pengaturan reminder tidak ikut terhapus.</p>
      </div>
    </div>
  );
}

function DangerSection1() {
  return (
    <div className="bg-[#ef4444] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="DangerSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Outfit:Medium',sans-serif] font-medium leading-[20px] left-[251.31px] text-[14px] text-center text-white top-[10px] whitespace-nowrap">Hapus Semua Data Histori</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[rgba(239,68,68,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_0px_0px_#dbe8d2,0px_2px_10px_0px_rgba(31,59,40,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Paragraph20 />
        <DangerSection1 />
      </div>
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container41 />
      </div>
    </div>
  );
}

function DangerSection() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="DangerSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Heading5 />
        <ContainerMargin9 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1f3b28] text-[12px] whitespace-nowrap">Ibadah tracker app by @yasraffad_sensei</p>
      </div>
    </div>
  );
}

function DangerSection2() {
  return (
    <div className="relative shrink-0 w-[544px]" data-name="DangerSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[32px] pt-[64px] relative size-full">
        <Heading6 />
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="max-w-[576px] relative shrink-0 w-[576px]" data-name="SettingsPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[16px] py-[24px] relative size-full">
        <Container />
        <ProfileSection />
        <StreakSection />
        <ReminderSection />
        <BackupSection />
        <DangerSection />
        <DangerSection2 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1309_0_0] min-h-[895px] min-w-px relative" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <SettingsPage />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Serif_Display:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#e8b02a] text-[20px] whitespace-nowrap">Ibadah Tracker</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[18px] relative shrink-0 w-[191px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d8a76] text-[12px] whitespace-nowrap">Bismillah</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[78px] relative shrink-0 w-[207px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] px-[8px] relative size-full">
        <Heading7 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="HomeIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="HomeIcon">
          <path d={svgPaths.p2213f00} id="Vector" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 18.3333V10H12.5V18.3333" id="Vector_2" stroke="#6D8A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[207px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[13px] py-[11px] relative size-full">
        <HomeIcon />
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#6d8a76] text-[14px] text-center whitespace-nowrap">Dashboard</p>
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

function Button5() {
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
        <Button5 />
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

function Button6() {
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
        <Button6 />
      </div>
    </div>
  );
}

function SettingsIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SettingsIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_17)" id="SettingsIcon">
          <path d={svgPaths.p3b27f100} id="Vector" stroke="#58A700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p32590000} id="Vector_2" stroke="#58A700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_17">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(88,204,2,0.12)] content-stretch flex gap-[12px] items-center px-[13px] py-[11px] relative rounded-[8px] shrink-0 w-[207px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(88,204,2,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <SettingsIcon />
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#58a700] text-[14px] text-center whitespace-nowrap">Settings</p>
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <Button7 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[682_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button4 />
        <ButtonMargin />
        <ButtonMargin1 />
        <ButtonMargin2 />
      </div>
    </div>
  );
}

function Container46() {
  return <div className="bg-[#e9f3e3] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Container" />;
}

function Paragraph22() {
  return (
    <div className="flex-[147_0_0] h-[20px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">yassar daffa</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-[207px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
        <Container46 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Icon9() {
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

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function StreakBadge1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[8px] top-0" data-name="StreakBadge">
      <Icon9 />
      <Text10 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <StreakBadge1 />
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#dbe8d2] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container45 />
        <ContainerMargin10 />
      </div>
    </div>
  );
}

function SidebarNav() {
  return (
    <div className="absolute bg-white h-[895px] left-0 top-0 w-[240px]" data-name="SidebarNav">
      <div aria-hidden className="absolute border-[#dbe8d2] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] pr-[17px] py-[24px] relative size-full">
        <Container42 />
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function AppShell() {
  return (
    <div className="bg-[#f6faf2] relative shrink-0 w-full" data-name="AppShell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <StickyPlaceholderSidebarNav />
        <MainContent />
        <SidebarNav />
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