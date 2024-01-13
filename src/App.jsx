import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import CounterDisplay from "./components/CounterDisplay";
import Container from "./components/Container";
import Controls from "./components/Controls";

function App() {
  return (
    <center class="px-4 py-5 my-5">
      <Container>
        <Header></Header>
        <Controls></Controls>
        <CounterDisplay></CounterDisplay>
      </Container>
    </center>
  );
}

export default App;
