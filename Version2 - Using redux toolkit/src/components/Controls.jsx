import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MdDarkMode } from "react-icons/md";
import { IconContext } from "react-icons";
import { counterActions } from "../store";

export default function Controls() {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const darkMode = useSelector((store) => store.darkMode);
  const btnDecrement = darkMode
    ? "btn btn-outline-light btn-lg px-4"
    : "btn btn-dark btn-lg px-4";

  const btnIncrement = darkMode
    ? "btn btn-outline-primary btn-lg px-4"
    : "btn btn-primary btn-lg px-4 gap-3";

  const btnAdd = darkMode
    ? "btn btn-outline-warning btn-lg px-4"
    : "btn btn-success btn-lg px-4 gap-3";

  const btnSubtract = darkMode
    ? "btn btn-outline-danger btn-lg px-4"
    : "btn btn-danger btn-lg px-4";

  const inputClassNames = `${
    darkMode ? "input-dark" : "input-light"
  } form-control px-4 gap-3 mb-2`;

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(Number(inputElement.current.value)));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(Number(inputElement.current.value)));
    inputElement.current.value = "";
  };

  const handleDarkModeToggle = () => {
    dispatch({ type: "DARK_MODE_TOGGLE" });
  };

  return (
    <>
      <IconContext.Provider
        value={{ color: `${darkMode ? "white" : "black"}`, size: "20px" }}
      >
        <span
          className="position-absolute top-0 start-100 translate-middle p-2 bg-transparent rounded-circle"
          style={{ cursor: "pointer" }}
          onClick={handleDarkModeToggle}
        >
          <MdDarkMode />
        </span>
      </IconContext.Provider>

      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mb-4">
        <button
          type="button"
          className={btnIncrement}
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className={btnDecrement}
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>

      <input
        ref={inputElement}
        type="text"
        placeholder="Enter an Integer..."
        className={inputClassNames}
        style={{
          borderColor: "#9ca2a8",
          maxWidth: "316px",
          backgroundColor: "grey",
        }}
      />

      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mb-4">
        <button type="button" className={btnAdd} onClick={handleAdd}>
          Add
        </button>
        <button type="button" className={btnSubtract} onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
}
