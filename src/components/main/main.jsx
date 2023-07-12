import React from "react";
import * as M from "./main_style";
import Logo from "../../assets/img/logo.svg";
import Menubar from "../../assets/img/menubar.svg";
import ChatBanner from "../../assets/img/chattingbanner.svg";
import CashBanner from "../../assets/img/cashshopbanner.svg";
import AskBanner from "../../assets/img/askbanner.svg";
import Chat from "../cards/chatcard/chatcard";
import Ask from "../cards/askcard/askcard";
function Main() {
  return (
    <>
      <M.MainWrap>
        <M.Header>
          <M.Menubar src={Menubar}></M.Menubar>
          <M.Logo src={Logo}></M.Logo>
        </M.Header>
        <M.BannerWrap>
          <M.Banner src={ChatBanner}></M.Banner>
          <M.Banner src={CashBanner}></M.Banner>
          <M.Banner src={AskBanner}></M.Banner>
        </M.BannerWrap>
        <M.ChatWrap>
          <M.MainTitle>나랑 대화 할 사람?</M.MainTitle>
          <M.MainSubTitle>
            관심사가 비슷한 다른 사람들과 같이 대화해 보세요!
          </M.MainSubTitle>
          <Chat></Chat>
        </M.ChatWrap>
        <M.AskWrap>
          <M.MainTitle>궁금한게 있어요!</M.MainTitle>
          <M.MainSubTitle>
            다른사람이 궁금한 것을 댓글로 답변해주세요!
          </M.MainSubTitle>
          <Ask></Ask>
          <Ask></Ask>
          <Ask></Ask>
        </M.AskWrap>
      </M.MainWrap>
    </>
  );
}

export default Main;
