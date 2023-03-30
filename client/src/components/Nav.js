import React from "react";
import Stylesheet from "reactjs-stylesheet";
import NavButton from "./NavButton";
import { FaComments, FaPaperPlane, FaQuestion } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { CgLogIn } from "react-icons/cg";
import NavProfile from "../pages/chat/NavProfile";

function Nav() {
  return (
    <div style={styles.container}>
      <NavButton Icon={FaComments} title={"CHAT"} />
      <NavButton Icon={FaPaperPlane} title={"REQUESTS"} />
      <NavButton Icon={AiFillSetting} title={"SETTINGS"} />
      <NavButton Icon={FaQuestion} title={"ABOUT"} />
      <div style={styles.footer}>
        <NavProfile name={"OLIVIA REYNOLDS"} image={null} />
        <CgLogIn />
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    flexFlow: "column",
    gap: 20,
    height: "calc(100vh - 112px)",
    width: "100%",
    padding: 20,
    maxWidth: 270,
  },
  footer: {
    width: "100%",
    marginTop: "auto",
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
});

export default Nav;
