import React from "react";
import * as C from "./chatcard_style";
import Profile from "../../../assets/img/logo.svg";
function Chatcard() {
  return (
    <>
      <C.ChatcardLayout>
        <C.IntroduceWrap>
          <C.ProfileWrap>
            <C.ProfileImg src={Profile}></C.ProfileImg>
            <C.InfoWrap>
              <C.Name>Trần Biên</C.Name>
              <C.Info>남성 | EN, KO, VIET</C.Info>
            </C.InfoWrap>
          </C.ProfileWrap>
          <C.Intro>배트맨이 되고픈 베트남인</C.Intro>
        </C.IntroduceWrap>
      </C.ChatcardLayout>
    </>
  );
}

export default Chatcard;
