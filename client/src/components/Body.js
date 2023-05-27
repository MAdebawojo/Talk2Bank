import React, { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Stylesheet from "reactjs-stylesheet";
import background from "../assets/Background.png";
import MessageBlock from "../pages/chat/MessageBlock";
import variables from "../variables";

function Body() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendMessage(e) {
    if (e) e.preventDefault();
    if (currentMessage.trim()) {
      setCurrentMessage("");
      setMessages((prev) => [
        ...prev,
        {
          sent: true,
          message: currentMessage,
          time: new Date()
            .toLocaleTimeString()
            .split(":")
            .slice(0, 2)
            .join(":"),
        },
      ]);
      scrollToBottom();
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentMessage }),
      });
      const data = await response.json();
      data.time = new Date()
        .toLocaleTimeString()
        .split(":")
        .slice(0, 2)
        .join(":");
      setMessages((prev) => [...prev, data]);
      scrollToBottom();
    } else setCurrentMessage("");
  }

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.container}>
      <img style={styles.image} src={background} alt="" />
      <div style={styles.main}>
        <div style={styles.messages}>
          {messages.map((message, index) => (
            <MessageBlock key={index} {...message} />
          ))}
          <div style={{ marginTop: 50 }} ref={messagesEndRef} />
        </div>
        <div style={styles.input__container}>
          <form onSubmit={sendMessage} style={styles.input_main__container}>
            <input
              autoFocus
              type={"text"}
              style={styles.input}
              placeholder={"Type a message..."}
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <div style={styles.send__container} onClick={sendMessage}>
              <FaPaperPlane style={styles.send} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  image: {
    left: 0,
    top: 0,
    width: "100%",
    objectFit: "cover",
    height: "100%",
    position: "absolute",
  },
  main: {
    position: "absolute",
    zIndex: 9999,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexFlow: "column",
    padding: 20,
  },
  input__container: {
    flex: 1,
    display: "flex",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input_main__container: {
    width: "80%",
    position: "relative",
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  input: {
    textIndent: 10,
    borderRadius: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingRight: 40,
  },
  messages: {
    display: "flex",
    flexFlow: "column",
    gap: 30,
    height: "100%",
    overflowY: "auto",
  },
  send__container: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    padding: 15,
    cursor: "pointer",
  },
  send: {
    color: variables.colors.primary_color,
  },
});

export default Body;
