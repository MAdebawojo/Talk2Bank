import Stylesheet from "reactjs-stylesheet";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Nav from "./components/Nav";
import variables from "./variables";

const { colors } = variables;

function App() {
  return (
    <div className="App" style={styles.container}>
      <Header />
      <div style={styles.middle}>
        <Nav />
        <Body />
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    backgroundColor: colors.bg_color,
  },
  middle: {
    width: "100%",
    display: "flex",
  },
});

export default App;
