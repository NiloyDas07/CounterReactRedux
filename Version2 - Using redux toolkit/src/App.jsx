import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import CounterDisplay from "./components/CounterDisplay";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((store) => store.darkMode);
  const backgroundColor = darkMode ? "black" : "white";

  return (
    <center
      className="px-4 py-5 my-5"
      style={{ backgroundColor: backgroundColor }}
    >
      <Container>
        <Header></Header>
        <Controls></Controls>
        <CounterDisplay></CounterDisplay>
      </Container>
    </center>
  );
}

export default App;
