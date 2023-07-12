import React, { useState } from "react";
import * as S from "./signup_style";
import SignupLogo from "../../assets/img/SignUpLogo.svg";
import SignupBtn from "../../assets/img/signupbtn.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const [text, setText] = useState({
    accountId: "",
    password: "",
    name: "",
    phoneNumber: "",
    brith: "",
    gender: "MALE",
    nationality: "",
  });
  const { accountId, password, name, phoneNumber, birth, gender, nationality } =
    text;
  const change = (e) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
    console.log(text);
  };
  const Click = () => {
    const API = "http://172.16.6.173:8080/api/auth/create";
    axios
      .post(API, text)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        // console.log()
      });
  };
  return (
    <>
      <S.SignupWrap>
        <S.SignupLogo src={SignupLogo} />
        <S.Text>서비스를 이용하기 위해 회원가입을 진행해주세요</S.Text>
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
          <S.InputWrap>
            <S.InputText>Name</S.InputText>
            <S.InputBox name="name" onChange={change} value={name}></S.InputBox>
            <S.InputLine></S.InputLine>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputText>Phone number</S.InputText>
            <S.InputBox
              name="phoneNumber"
              onChange={change}
              value={phoneNumber}
            ></S.InputBox>
            <S.InputLine></S.InputLine>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputText>BirthDate</S.InputText>
            <S.InputBox
              name="birth"
              onChange={change}
              value={birth}
            ></S.InputBox>
            <S.InputLine></S.InputLine>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputText>Gender</S.InputText>
            <S.InputBox
              name="gender"
              onChange={change}
              value={gender}
            ></S.InputBox>
            <S.InputLine></S.InputLine>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputText>Nationality</S.InputText>
            <S.InputBox
              name="nationality"
              onChange={change}
              value={nationality}
            ></S.InputBox>
            <S.InputLine></S.InputLine>
          </S.InputWrap>
          <S.Button src={SignupBtn} onClick={Click}></S.Button>
        </S.BtnWrap>
      </S.SignupWrap>
    </>
  );
}
export default SignUp;
