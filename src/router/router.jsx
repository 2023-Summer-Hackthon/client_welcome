import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Wrapper } from "../App.style";
import MainPage from "../components/main/main";
import ChatPage from "../components/chat/chat";
import AskPage from "../components/ask/ask";
import StartPage from "../components/signup/start/start";
import SigninPage from "../components/signin/signin";
import SignupPage from "../components/signup/signup";
const Router = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/ask" element={<AskPage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/main" element={<MainScreen />}></Route>
            <Route path="/redirect" element={<Redirect />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<Notfound />} /> */}
          </Routes>
        </Main>
      </BrowserRouter>
    </Wrapper>
  );
};

export default Router;
