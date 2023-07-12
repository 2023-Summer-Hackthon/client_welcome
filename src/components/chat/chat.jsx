import { useEffect, useState } from "react";
import * as C from "./chat_style";
import Logo from "../../assets/img/logo.svg";
import Menubar from "../../assets/img/menubar.svg";
import stomp from "stompjs";
import SockJS from "sockjs-client/dist/sockjs";
import { useNavigate } from "react-router-dom";
const sockJS = new SockJS("http://192.168.227.229:8080/ws");
const stompClient = stomp.over(sockJS);

function Chatting() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [message2, setMessage] = useState("");
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

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const message = {
      chatId: 1,
      senderId: 1,
      recipientId: 2,
      senderName: "kim",
      recipientName: "kim",
      content: message2,
      timestamp: new Date(),
    };
    stompClient.send("/app/chat", {}, JSON.stringify(message));
  };
  return (
    <>
      <C.ChatWrap>
        <C.Header>
          <C.Menubar src={Menubar}></C.Menubar>
          <C.Logo src={Logo} onClick={() => navigate("/main")}></C.Logo>
        </C.Header>
        <C.ProfileWrap>
          <C.ProfileImg src={Logo}></C.ProfileImg>
          <C.InfoWrap>
            <C.Name>Trần Biên</C.Name>
            <C.Info>남성 | EN, KO, VIET</C.Info>
          </C.InfoWrap>
        </C.ProfileWrap>
        <C.Profilebar />
        <C.InputBar>
          <C.Input onChange={onChange} value={message2}></C.Input>
          <C.Button onClick={sendMessage}>+</C.Button>
        </C.InputBar>
      </C.ChatWrap>
    </>
  );
}

export default Chatting;
