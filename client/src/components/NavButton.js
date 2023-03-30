import React from "react";
import Stylesheet from "reactjs-stylesheet";
import { FaGreaterThan } from "react-icons/fa";

function NavButton({ Icon, title }) {
  return (
    <div style={styles.container}>
      <Icon />
      <h4>{title}</h4>
      <FaGreaterThan />
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    gap: 20,
    width: "100%",
    height: 30,
    borderRadius: 20,
    alignItems: "center",
  },
});

export default NavButton;
