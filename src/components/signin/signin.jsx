import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./signin_style";
import LoginLogo from "../../assets/img/LoginLogo.svg";
import LoginBtn from "../../assets/img/LoginBtn.svg";
import axios from "axios";
function Signin() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    accountId: "",
    password: "",
  });
  const API = "http://172.20.10.3:8080/api/auth/login";
  const { accountId, password } = user;
  const change = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };
  const Click = () => {
    axios
      .post(API, user)
      .then((res) => {
        alert("로그인에 성공하셨습니다");
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/main");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <S.SigninWrap>
        <S.LoginLogo src={LoginLogo}></S.LoginLogo>
        <S.Text>서비스를 이용하기 위해 로그인을 진행해주세요</S.Text>

        <S.BtnWrap>
          <S.InputWrap>
            <S.InputText>ID</S.InputText>
            <S.InputBox
              name="accountId"
              onChange={change}
              value={accountId}
            ></S.InputBox>
            <S.InputLine></S.InputLine>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputText>Password</S.InputText>
            <S.InputBox
              name="password"
              onChange={change}
              value={password}
            ></S.InputBox>
            <S.InputLine></S.InputLine>
          </S.InputWrap>
          <S.Button src={LoginBtn} onClick={Click}></S.Button>
        </S.BtnWrap>
      </S.SigninWrap>
    </>
  );
}

export default Signin;
