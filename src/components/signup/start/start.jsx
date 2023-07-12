import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./start_style";
import Image from "../../../assets/img/hello.svg";
import Logo from "../../../assets/img/logo (2).svg";
import LoginImg from "../../../assets/img/login.svg";
import SignupImg from "../../../assets/img/signup.svg";
function Start() {
  const navigate = useNavigate();
  return (
    <>
      <S.StartWrap>
        <S.StartImg src={Image}></S.StartImg>
        <S.LogoImg src={Logo}></S.LogoImg>
        <S.Text>다문화 정보공유 소통 플랫폼, 웰컴</S.Text>
        <S.BtnWrap>
          <S.Button
            src={LoginImg}
            onClick={() => {
              navigate("/signin");
            }}
          ></S.Button>
          <S.Button
            src={SignupImg}
            onClick={() => {
              navigate("/main");
            }}
          ></S.Button>
        </S.BtnWrap>
      </S.StartWrap>
    </>
  );
}

export default Start;
