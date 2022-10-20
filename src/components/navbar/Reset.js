import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/filter/filterSlice";

function Reset() {
  const dispatch = useDispatch();

  const resetHandler = (value) => {
    dispatch(reset(value));
    console.log(value);
  };

  return (
    <div className="border border-slate-800 text-center ">
      <p onClick={() => resetHandler("remove")}>Reset</p>
    </div>
  );
}

export default Reset;
