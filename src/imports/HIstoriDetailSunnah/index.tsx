import svgPaths from "./svg-qkwxkg7pew";

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.983px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9835" preserveAspectRatio="none" viewBox="0 0 15.9835 15.9835" width="15.9835">
        <g id="Icon">
          <path d={svgPaths.p2c222d80} id="Vector" stroke="#1F3B28" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66495" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white border-[#cde1ff] border-[1.174px] border-solid content-stretch flex gap-[8px] h-[38.316px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <Icon />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] text-center whitespace-nowrap">Kembali ke Histori</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[24px] py-[8px] relative rounded-[110px]">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#85938e] text-[14px] text-center whitespace-nowrap">Daily Kewajiban</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#0067ff] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[24px] py-[8px] relative rounded-[110px]">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fafafa] text-[14px] text-center whitespace-nowrap">Daily Sunnah</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white border-[#cde1ff] border-[1.174px] border-solid content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[132px] shrink-0 w-full" data-name="Button">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Minggu</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pt-[4px] relative shrink-0 w-[183.14px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[32px] relative shrink-0 text-[#1f3b28] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        9 Agustus 2026
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[183.14px]" data-name="Container">
      <Paragraph />
      <Heading />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#eab308] text-[0px] text-right whitespace-nowrap">
        <span className="leading-[30px] text-[#0067ff] text-[30px]">2</span>
        <span className="leading-[28px] text-[#65726d] text-[18px]">/7</span>
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-end pt-[4px] relative shrink-0 w-[56.796px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] text-right whitespace-nowrap">18% selesai</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56.796px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[319.156px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return <div className="bg-gradient-to-r from-[#88e5ff] h-[9.983px] relative rounded-[39407900px] shrink-0 to-[#1971f6] w-[57.438px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="bg-[#ebf3ff] content-stretch flex flex-col h-[9.983px] items-start overflow-clip relative rounded-[39407900px] shrink-0 w-[319.156px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Container:margin">
      <Container6 />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#ebf3ff] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[39407900px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#3888ff] text-[12px] whitespace-nowrap">2 selesai</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[40px] items-start pt-[16px] relative shrink-0 w-[319.156px]" data-name="Container">
      <Text />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white border-[#cde1ff] border-[1.174px] border-solid content-stretch flex flex-col items-start p-[20px] relative rounded-[16px] shadow-[0px_1px_0px_0px_#d2eee1,0px_2px_10px_0px_rgba(31,59,40,0.05)] shrink-0 w-full" data-name="Container">
      <Container3 />
      <ContainerMargin />
      <Container8 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12.992px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.9923" preserveAspectRatio="none" viewBox="0 0 12.9923 12.9923" width="12.9923">
        <g id="Icon">
          <path d={svgPaths.p24185a80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.89471" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#0067ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[23.984px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col h-[20.002px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Puasa Sunnah (senin kamis)</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] whitespace-nowrap">Selesai 19:09</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[291.189_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[327.157px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#ebf3ff] border-[#7bb0ff] border-[1.174px] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[16px] shadow-[0px_1px_0px_0px_#d2dfee,0px_2px_10px_0px_rgba(210,223,238,0.05)] shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container10 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12.992px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.9923" preserveAspectRatio="none" viewBox="0 0 12.9923 12.9923" width="12.9923">
        <g id="Icon">
          <path d={svgPaths.p24185a80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.89471" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#0067ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[23.984px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col h-[20.002px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1f3b28] text-[14px] whitespace-nowrap">Shalat sunnah sebelum shubuh</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] whitespace-nowrap">Selesai 19:09</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[291.189_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[327.157px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#ebf3ff] border-[#7bb0ff] border-[1.174px] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[16px] shadow-[0px_1px_0px_0px_#d2dfee,0px_2px_10px_0px_rgba(210,223,238,0.05)] shrink-0 w-full" data-name="Container">
      <Container15 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container14 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[11.983px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.983" preserveAspectRatio="none" viewBox="0 0 11.983 11.983" width="11.983">
        <g id="Icon">
          <path d={svgPaths.p2ad9c980} id="Vector" stroke="#65726D" strokeLinecap="round" strokeWidth="1.49787" />
          <path d={svgPaths.p557000} id="Vector_2" stroke="#65726D" strokeLinecap="round" strokeWidth="1.49787" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#ebf3ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[23.984px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col h-[20.002px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#65726d] text-[14px] whitespace-nowrap">Shalat sunnah sebelum zuhur (2 - 2 Rakaat)</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] whitespace-nowrap">Tidak dikerjakan</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[291.189_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[327.157px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white border-[#cde1ff] border-[1.174px] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[16px] shadow-[0px_1px_0px_0px_#d2dfee,0px_2px_10px_0px_rgba(210,223,238,0.05)] shrink-0 w-full" data-name="Container">
      <Container19 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container18 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[11.983px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.983" preserveAspectRatio="none" viewBox="0 0 11.983 11.983" width="11.983">
        <g id="Icon">
          <path d={svgPaths.p2ad9c980} id="Vector" stroke="#65726D" strokeLinecap="round" strokeWidth="1.49787" />
          <path d={svgPaths.p557000} id="Vector_2" stroke="#65726D" strokeLinecap="round" strokeWidth="1.49787" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#ebf3ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[23.984px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col h-[20.002px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#65726d] text-[14px] whitespace-nowrap">{`Shalat sunnah setelah zuhur `}</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] whitespace-nowrap">Tidak dikerjakan</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[291.189_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[327.157px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white border-[#cde1ff] border-[1.174px] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[16px] shadow-[0px_1px_0px_0px_#d2dfee,0px_2px_10px_0px_rgba(210,223,238,0.05)] shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container22 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[11.983px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.983" preserveAspectRatio="none" viewBox="0 0 11.983 11.983" width="11.983">
        <g id="Icon">
          <path d={svgPaths.p2ad9c980} id="Vector" stroke="#65726D" strokeLinecap="round" strokeWidth="1.49787" />
          <path d={svgPaths.p557000} id="Vector_2" stroke="#65726D" strokeLinecap="round" strokeWidth="1.49787" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#ebf3ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[23.984px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col h-[20.002px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#65726d] text-[14px] whitespace-nowrap">Shalat sunnah setelah Maghrib</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] whitespace-nowrap">Tidak dikerjakan</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[291.189_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[327.157px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white border-[#cde1ff] border-[1.174px] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[16px] shadow-[0px_1px_0px_0px_#d2dfee,0px_2px_10px_0px_rgba(210,223,238,0.05)] shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container26 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[11.983px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.983" preserveAspectRatio="none" viewBox="0 0 11.983 11.983" width="11.983">
        <g id="Icon">
          <path d={svgPaths.p2ad9c980} id="Vector" stroke="#65726D" strokeLinecap="round" strokeWidth="1.49787" />
          <path d={svgPaths.p557000} id="Vector_2" stroke="#65726D" strokeLinecap="round" strokeWidth="1.49787" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#ebf3ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[23.984px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col h-[20.002px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#65726d] text-[14px] whitespace-nowrap">Shalat sunnah setelah Isya</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#65726d] text-[12px] whitespace-nowrap">Tidak dikerjakan</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[291.189_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[327.157px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white border-[#cde1ff] border-[1.174px] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[16px] shadow-[0px_1px_0px_0px_#d2dfee,0px_2px_10px_0px_rgba(210,223,238,0.05)] shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container30 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pt-[20px] relative w-[361.473px]" data-name="Container">
      <ContainerMargin1 />
      <ContainerMargin2 />
      <ContainerMargin3 />
      <ContainerMargin4 />
      <ContainerMargin5 />
      <ContainerMargin6 />
    </div>
  );
}

function HistoryPage() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[672px] min-h-px px-[16px] py-[24px] relative w-full" data-name="HistoryPage">
      <Container />
      <Container1 />
      <Container2 />
      <Container9 />
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="relative shrink-0 size-[21.984px]" data-name="HomeIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.9842" preserveAspectRatio="none" viewBox="0 0 21.9842 21.9842" width="21.9842">
        <g id="HomeIcon">
          <path d={svgPaths.p26419100} id="Vector" stroke="#65726D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64882" />
          <path d={svgPaths.p37bebe60} id="Vector_2" stroke="#65726D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64882" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDashboard() {
  return (
    <div className="content-stretch flex flex-[98.36_0_0] flex-col gap-[4px] items-center min-h-[56px] min-w-px py-[12px] relative" data-name="Button - Dashboard">
      <HomeIcon />
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#65726d] text-[10px] text-center whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function ChecklistIcon() {
  return (
    <div className="relative shrink-0 size-[21.984px]" data-name="ChecklistIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.9842" preserveAspectRatio="none" viewBox="0 0 21.9842 21.9842" width="21.9842">
        <g id="ChecklistIcon">
          <path d={svgPaths.p35375100} id="Vector" stroke="#65726D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64882" />
          <path d={svgPaths.pd1c000} id="Vector_2" stroke="#65726D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64882" />
        </g>
      </svg>
    </div>
  );
}

function ButtonChecklist() {
  return (
    <div className="content-stretch flex flex-[98.36_0_0] flex-col gap-[4px] items-center min-h-[56px] min-w-px py-[12px] relative" data-name="Button - Checklist">
      <ChecklistIcon />
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#65726d] text-[10px] text-center whitespace-nowrap">Checklist</p>
    </div>
  );
}

function HistoryIcon() {
  return (
    <div className="relative shrink-0 size-[21.984px]" data-name="HistoryIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.9842" preserveAspectRatio="none" viewBox="0 0 21.9842 21.9842" width="21.9842">
        <g id="HistoryIcon">
          <path d={svgPaths.p8b54900} id="Vector" stroke="#31B98B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64882" />
          <path d={svgPaths.p9e22fc0} id="Vector_2" stroke="#31B98B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64882" />
          <path d={svgPaths.p3255cf80} id="Vector_3" stroke="#31B98B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64882" />
        </g>
      </svg>
    </div>
  );
}

function ButtonHistori() {
  return (
    <div className="content-stretch flex flex-[98.36_0_0] flex-col gap-[4px] items-center min-h-[56px] min-w-px py-[12px] relative" data-name="Button - Histori">
      <HistoryIcon />
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#31b98b] text-[10px] text-center whitespace-nowrap">Histori</p>
    </div>
  );
}

function SettingsIcon() {
  return (
    <div className="relative shrink-0 size-[21.984px]" data-name="SettingsIcon">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.9842" preserveAspectRatio="none" viewBox="0 0 21.9842 21.9842" width="21.9842">
        <g clipPath="url(#clip0_0_12)" id="SettingsIcon">
          <path d={svgPaths.p11d5bd80} id="Vector" stroke="#65726D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64882" />
          <path d={svgPaths.p902bc00} id="Vector_2" stroke="#65726D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64882" />
        </g>
        <defs>
          <clipPath id="clip0_0_12">
            <rect fill="white" height="21.9842" width="21.9842" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonSettings() {
  return (
    <div className="content-stretch flex flex-[98.36_0_0] flex-col gap-[4px] items-center min-h-[56px] min-w-px py-[12px] relative" data-name="Button - Settings">
      <SettingsIcon />
      <p className="[word-break:break-word] font-['Outfit:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#65726d] text-[10px] text-center whitespace-nowrap">Settings</p>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="absolute bg-white border-[#d2eee1] border-solid border-t-[1.174px] bottom-[0.32px] content-stretch flex items-start left-0 w-[393.44px]" data-name="BottomNav">
      <ButtonDashboard />
      <ButtonChecklist />
      <ButtonHistori />
      <ButtonSettings />
    </div>
  );
}

export default function HIstoriDetailSunnah() {
  return (
    <div className="bg-[#f5f9ff] content-stretch flex flex-col items-start relative size-full" data-name="HIstori detail - sunnah">
      <HistoryPage />
      <BottomNav />
    </div>
  );
}