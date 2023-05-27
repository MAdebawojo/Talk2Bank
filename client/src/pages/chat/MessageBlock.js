import React from "react";
import Stylesheet from "reactjs-stylesheet";
import variables from "../../variables";

const { colors } = variables;

function MessageBlock({ sent, message, time }) {
  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: sent ? colors.primary_color : colors.bg_color,
        color: sent ? "white" : "black",
        alignSelf: sent ? "flex-end" : "flex-start",
      }}
    >
      <p style={styles.message}>{message}</p>
      <small
        style={{
          ...styles.time,
          right: sent ? 0 : "default",
          left: !sent ? 0 : "default",
        }}
      >
        {time}
      </small>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    width: "fit-content",
    maxWidth: "80%",
    minHeight: "fit-content",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    position: "relative",
    textAlign: "start",
  },
  message: {
    whiteSpace: "pre-wrap",
    height: "fit-content",
  },
  time: {
    position: "absolute",
    bottom: -25,
    color: "black",
    padding: 3,
    backgroundColor: "white",
    borderRadius: 5,
  },
});

export default MessageBlock;
