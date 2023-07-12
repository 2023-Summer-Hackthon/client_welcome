import React from "react";
import * as A from "./askcard_style";
import Flag from "../../../assets/img/flag_vietnam.svg";
function Askcard(props) {
  return (
    <>
      <A.ChatcardLayout>
        <A.Q>Q.</A.Q>
        <A.Question>{props.title}</A.Question>
        <A.FlagWrap>
          <A.Flag src={Flag}></A.Flag>
          <A.Question_info>Hoàng Tuyết Nhung 님의 질문</A.Question_info>
          <A.Qurtle>답변달기</A.Qurtle>
        </A.FlagWrap>
      </A.ChatcardLayout>
    </>
  );
}

export default Askcard;
