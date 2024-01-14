import { useSelector } from "react-redux";

export default function CounterDisplay() {
  const { counterVal } = useSelector((store) => store.counter);
  // const darkMode = useSelector((store) => store.darkMode);
  // const color = darkMode ? "white" :"#212536";

  return (
    <h1
      className="lead mb-4"
      style={{
        fontWeight: "500",
        fontSize: "1.50rem",
        // color: color
      }}
    >
      Counter Display: {counterVal}
    </h1>
  );
}
