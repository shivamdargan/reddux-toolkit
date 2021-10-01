import React from "react";
import { useSelector } from "react-redux";
const UserStatus = () =>
 {    
    const user = useSelector((state) => state.user.value);
    const theme = useSelector((state) => state.theme.value)
  return (
    <div style={{color:theme.color}}>
      <h1> Login Status</h1>
      {user.name.localeCompare("") === 0 ? <p>User Is Not Logged In</p> : <p>{user.name} is logged in !</p> }
    </div>
  );
}

export default UserStatus;