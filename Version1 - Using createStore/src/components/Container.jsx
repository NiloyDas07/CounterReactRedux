import { useSelector } from "react-redux";

export default function Container({ children }) {
  const darkMode = useSelector((store) => store.darkMode);
  const backgroundColor = darkMode ? "black" : "white";
  const className = `${darkMode && "border-light"} card`;

  return (
    <div
      className={className}
      style={{ width: "70%", backgroundColor: backgroundColor }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}
