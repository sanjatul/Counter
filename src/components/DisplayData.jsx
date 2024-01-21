import React from "react";
import { useSelector } from "react-redux";
function DisplayData() {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter current Value: {counterVal}</p>;
}

export default DisplayData;
