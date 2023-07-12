import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "./main_style";
import Logo from "../../assets/img/logo.svg";
import Menubar from "../../assets/img/menubar.svg";
import ChatBanner from "../../assets/img/chattingbanner.svg";
import CashBanner from "../../assets/img/cashshopbanner.svg";
import AskBanner from "../../assets/img/askbanner.svg";
import Chat from "../cards/chatcard/chatcard";
import Ask from "../cards/askcard/askcard";
import axios from "axios";
function Main() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios
      .get("http://172.16.3.173:8080/api/question/list/1") // GET 요청
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err); // 실패할 경우 실행할 코드
      });
  }, []);
  return (
    <>
      <M.MainWrap>
        <M.Header>
          <M.Menubar src={Menubar}></M.Menubar>
          <M.Logo src={Logo}></M.Logo>
        </M.Header>
        <M.BannerWrap>
          <M.Banner
            src={ChatBanner}
            onClick={() => navigate("/chat")}
          ></M.Banner>
          <M.Banner
            src={CashBanner}
            onClick={() => navigate("/chat")}
          ></M.Banner>
          <M.Banner src={AskBanner} onClick={() => navigate("/ask")}></M.Banner>
        </M.BannerWrap>
        <M.ChatWrap>
          <M.MainTitle>나랑 대화 할 사람?</M.MainTitle>
          <M.MainSubTitle>
            관심사가 비슷한 다른 사람들과 같이 대화해 보세요!
          </M.MainSubTitle>
          <M.ChatWrap2>
            <Chat></Chat>
            <Chat></Chat>
          </M.ChatWrap2>
        </M.ChatWrap>
        <M.AskWrap>
          <M.MainTitle>궁금한게 있어요!</M.MainTitle>
          <M.MainSubTitle>
            다른사람이 궁금한 것을 댓글로 답변해주세요!
          </M.MainSubTitle>
          {post.map((data) => {
            return <Ask title={data.title} key={data.questionId} />;
          })}
        </M.AskWrap>
      </M.MainWrap>
    </>
  );
}

export default Main;
