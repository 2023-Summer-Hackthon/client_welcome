import React from "react";
import * as A from "./askcard_style";
import Flag_viet from "../../../assets/img/flag_vietnam.svg";
function Askcard() {
  const question =
    "대구에서 맛있는 음식을 먹고 싶어요! \n 대구에서 가장 맛있는 음식점을 알려주세요!";
  return (
    <>
      <A.ChatcardLayout>
        <A.Q>Q.</A.Q>
        <A.Question>{question}</A.Question>
        <A.FlagWrap>
          <A.Flagimg svg={Flag_viet}></A.Flagimg>
          <A.Question_info>Hoàng Tuyết Nhung 님의 질문</A.Question_info>
          <A.Qurtle>답변달기</A.Qurtle>
        </A.FlagWrap>
      </A.ChatcardLayout>
    </>
  );
}

export default Askcard;
