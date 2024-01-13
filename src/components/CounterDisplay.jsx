import { useSelector } from "react-redux";

export default function CounterDisplay() {
  const counter = useSelector((store) => store.counter);
  return (
    <h1
      className="lead mb-4"
      style={{ fontWeight: "500", fontSize: "1.50rem" }}
    >
      Counter Display: {counter}
    </h1>
  );
}
