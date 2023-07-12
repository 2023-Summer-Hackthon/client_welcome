import { useEffect, useState } from "react";
import * as C from "./chat_style";
import Logo from "../../assets/img/logo.svg";
import Menubar from "../../assets/img/menubar.svg";
import stomp from "stompjs";
import SockJS from "sockjs-client/dist/sockjs";

const sockJS = new SockJS("http://172.20.10.11:8080/ws");
const stompClient = stomp.over(sockJS);

function Chatting() {
  // const [message, setMessage] = useState("");
  useEffect(() => {
    // const socket = io("ws://172.16.1.173:8080/ws", {
    //   cors: {
    //     origin: "*",
    //   },
    // }).connect();
    // socket.on("connection", (socket) => {
    //   console.log(`user Connected : ${socket.id}`);
    //   socket.on("send_message", (data) => {
    //     console.log(data);
    //     socket.broadcast.emit("receive_message", data);
    //   });
    // });
    const onConnected = () => {
      console.log("connected");

      stompClient.subscribe("/user/1/queue/messages", () => {
        console.log("받음");
      });
    };

    stompClient.connect({}, onConnected, () => {
      console.log("에러");
    });
  }, []);

  const sendMessage = () => {
    const message = {
      chatId: 1,
      senderId: 1,
      recipientId: 2,
      senderName: "kim",
      recipientName: "kim",
      content: "제발",
      timestamp: new Date(),
    };
    stompClient.send("/app/chat", {}, JSON.stringify(message));
  };
  return (
    <>
      <C.ChatWrap>
        <C.Header>
          <C.Menubar src={Menubar}></C.Menubar>
          <C.Logo src={Logo}></C.Logo>
        </C.Header>
        <C.ProfileWrap>
          <C.ProfileImg src={Logo}></C.ProfileImg>
          <C.InfoWrap>
            <C.Name>Trần Biên</C.Name>
            <C.Info>남성 | EN, KO, VIET</C.Info>
          </C.InfoWrap>
        </C.ProfileWrap>
        <C.Profilebar />
        {/* <input onChange={() => {
          setMessage()
        }}></input> */}
        <button onClick={sendMessage}></button>
      </C.ChatWrap>
    </>
  );
}

export default Chatting;
