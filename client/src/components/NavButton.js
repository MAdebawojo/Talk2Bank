import React from "react";
import Stylesheet from "reactjs-stylesheet";
import { FaGreaterThan } from "react-icons/fa";

function NavButton({ Icon, title, style, iconStyle }) {
  return (
    <div style={{ ...styles.container, ...style }}>
      <Icon style={{ ...styles.icon, ...iconStyle }} />
      <h4 style={styles.title}>{title}</h4>
      <FaGreaterThan />
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    gap: 20,
    width: "100%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
    boxShadow: "1px 1px 5px 0px #00000040",
  },
  title: {
    marginRight: "auto",
  },
  icon: {
    color: "black",
  },
});

export default NavButton;
