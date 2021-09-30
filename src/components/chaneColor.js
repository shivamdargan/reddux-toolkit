import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme, resetTheme } from "../features/theme";


function ChangeColor() {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
      onClick={()=> {
          dispatch(changeTheme({color:color}))
      }}
      >
        CHANGE COLOR
      </button>


      <button
      onClick={()=> {
          dispatch(resetTheme())
      }}
      >
        BACK TO DEFAULT COLOR
      </button>


    </div>
  );
}

export default ChangeColor;