import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "./ask_style";
import Logo from "../../assets/img/logo.svg";
import Menubar from "../../assets/img/menubar.svg";
import Card from "../cards/askcard/askcard";
import axios from "axios";

function Ask() {
  const products = [1, 2];
  const [post, setPost] = useState([]);
  axios
    .get("http://192.168.227.229:8080/api/question/list/1") // GET 요청
    .then((res) => {
      setPost(res.data);
    })
    .catch(() => {
      console.log("실패할 경우 실행할 코드"); // 실패할 경우 실행할 코드
    });
  return (
    <>
      <A.AskWrap>
        <A.Header>
          <A.Logo src={Logo}></A.Logo>
        </A.Header>
        <A.TitleBar>
          <A.TitleWrap>
            <A.Title>G-ask</A.Title>
            <A.SubTitle>다른사람이 궁금한 것을 댓글로 답변해주세요!</A.SubTitle>
          </A.TitleWrap>
          <A.Addbtn>질문 게시하기</A.Addbtn>
        </A.TitleBar>
        <A.PostTitle>최근 게시물</A.PostTitle>
        {post.map((data) => {
          return <Card title={data.title} key={data.questionId} />;
          // return <Card products={products[i]} num={i} key={i}/>
        })}
      </A.AskWrap>
    </>
  );
}

export default Ask;
