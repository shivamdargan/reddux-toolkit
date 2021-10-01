import React from "react";
import { useDispatch } from "react-redux";
import { login,logout } from "../features/user";

function Login() {

  const dispatch=useDispatch()
  return (
    <div>
      <button
      onClick={() => {
        dispatch(login({name:"Shivam",age:20,email:"shivam@gmail.com",gender:"male"}));
      }}
      >
        Login
      </button>

      <button
         onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Login;