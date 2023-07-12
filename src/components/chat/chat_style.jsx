import styled from "styled-components";

export const ChatWrap = styled.div`
  width: 90vw;
  height: 100%;
  background-color: white;
  color: black;
  font-size: 5em;
  padding-left: 5vw;
  padding-right: 5vw;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 90vw;
  height: 2rem;
  display: flex;
  align-items: center;

  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 6.5rem;
  height: 1.8125rem;
  flex-shrink: 0;
  margin-left: 0.2rem;
`;
export const Menubar = styled.img`
  width: 1.375rem;
  height: 1rem;
  flex-shrink: 0;
  margin: 0.2rem;
`;
export const ProfileWrap = styled.div`
  width: 24.5625rem;
  display: flex;
  flex-direction: row;
`;
export const Profilebar = styled.div`
  width: 24.5625rem;
  height: 0.125rem;
  border-bottom: 2px;
  background: #4068fe;
`;

export const ProfileImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 100%;
  border-color: gray;
  border: 1px;
  border-style: solid;
  margin: 0.5rem;
  margin-left: 1rem;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;

export const Name = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 0.5rem;
  margin-top: 0.3rem;
`;

export const Info = styled.div`
  color: #6b6b6b;
  font-family: Pretendard;
  font-size: 1px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 0.5rem;
`;

export const Input = styled.input`
  width: 80vw;
  height: 5vh;
  border-radius: none;
  background-color: #f2f2f2;
  border-color: aliceblue;
  color: black;
  :focus {
    outline-color: #4068fe;
  }
`;

export const Button = styled.div`
  width: 12vw;
  height: 12vw;
  border-radius: 100%;
  background-color: #4068fe;
  color: #ffffff;

  font-size: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    transition: 50ms;
    background-color: #193ec4;
  }
`;
export const InputBar = styled.div`
  width: 100vw;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50vh;
`;
