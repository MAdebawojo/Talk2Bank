import React from "react";
import Stylesheet from "reactjs-stylesheet";
import NavButton from "./NavButton";
import { FaBox } from "react-icons/fa";

function Nav() {
  return (
    <div style={styles.container}>
      <NavButton Icon={FaBox} title={"CHAT"} />
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    flexFlow: "column",
    gap: 20,
  },
});

export default Nav;
