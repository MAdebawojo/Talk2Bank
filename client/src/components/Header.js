import React from "react";
import Logo from "./Logo";
import { FaCheckCircle } from "react-icons/fa";
import Stylesheet from "reactjs-stylesheet";
import variables from "../variables";
import logo from "../assets/brand.png";
const { colors } = variables;

function Header() {
  return (
    <div style={styles.container}>
      <Logo image={logo} />
      <div style={styles.center}>
        <h2 style={styles.pal}>PAL</h2>
        <div style={styles.available__container}>
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
    height: 109,
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  center: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  available__container: {
    display: "flex",
    gap: 10,
  },
  pal: {
    color: "black",
  },
});

export default Header;
