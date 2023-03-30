import Stylesheet from "reactjs-stylesheet";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Nav />
        <Body />
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {},
});

export default App;
