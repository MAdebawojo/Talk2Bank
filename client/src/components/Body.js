import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Stylesheet from "reactjs-stylesheet";
import background from "../assets/Background.png";
import MessageBlock from "../pages/chat/MessageBlock";

function Body() {
  const [messages, setMessages] = useState([
    {
      sent: true,
      message: "Hello, World!",
      time: new Date().toLocaleTimeString().split(":").slice(0, 2).join(":"),
    },
  ]);

  return (
    <div style={styles.container}>
      <img style={styles.image} src={background} alt="" />
      <div style={styles.main}>
        <div style={styles.messages}>
          {messages.map((message, index) => (
            <MessageBlock key={index} {...message} />
          ))}
        </div>
        <div style={styles.input__container}>
          <div style={styles.input_main__container}>
            <input
              type={"text"}
              style={styles.input}
              placeholder={"Type a message..."}
            />
            <div style={styles.send__container}>
              <FaPaperPlane style={styles.send} />
            </div>
          </div>
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
    gap: 10,
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
  send: {},
});

export default Body;
