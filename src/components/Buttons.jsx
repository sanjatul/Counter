import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../../52 Redux/3-Counter-React-Redux-toolkit/src/store/counter";

function Buttons() {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleAdd = () => {
    dispatch(counterActions.increment());
  };
  const handleSub = () => {
    dispatch(counterActions.decrement());
  };
  const handleAddition = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSubstraction = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };
  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <br />
      <button onClick={handleAddition}>Addtion</button>
      <input ref={inputElement} />
      <button onClick={handleSubstraction}>Substraction</button>
    </div>
  );
}

export default Buttons;
