import { useSelector } from "react-redux";

export default function Header() {
  const darkMode = useSelector((store) => store.darkMode);
  const className = `${
    darkMode && "header"
  } display-5 fw-bold text-body-emphasis`;

  return (
    <h1 className={className} style={{ paddingBottom: "10px" }}>
      Counter
    </h1>
  );
}
