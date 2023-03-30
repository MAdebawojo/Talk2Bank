import React from "react";
import Logo from "./Logo";
import { FaCheckCircle } from "react-icons/fa";
import Stylesheet from "reactjs-stylesheet";
import variables from "../variables";
const { colors } = variables;

function Header() {
  return (
    <div style={styles.container}>
      <Logo />
      <div>
        <h3>PAL</h3>
        <div>
          <FaCheckCircle />
          <h4>AVAILABLE</h4>
        </div>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    backgroundColor: colors.primary_color,
    color: "white",
  },
});

export default Header;
