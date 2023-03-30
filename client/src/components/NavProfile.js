import React from "react";
import Stylesheet from "reactjs-stylesheet";
import variables from "../../variables";

const { colors } = variables;

function NavProfile({ image, name }) {
  return (
    <div style={styles.container}>
      <div style={styles.image__container}>
        <img style={styles.image} src={image} alt="" />
      </div>
      <h4>{name}</h4>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  image__container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "black",
    border: "solid 2px " + colors.primary_color,
  },
  image: {
    flex: 1,
    objectFit: "cover",
  },
});

export default NavProfile;
