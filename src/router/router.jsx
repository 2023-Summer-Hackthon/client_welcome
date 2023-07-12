import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Wrapper } from "../App.style";
import MainPage from "../components/main/main";
import ChatPage from "../components/chat/chat";
const Router = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/chat" element={<ChatPage />} />
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
