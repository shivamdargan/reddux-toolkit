import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { testAction } from "../features/test";
const UserStatus = () =>
 {    
    const user = useSelector((state) => state.user.value);
    const theme = useSelector((state) => state.theme.value)
    const testState = useSelector((state) => state.test.value);

    const dispatch = useDispatch()
  return (
    <div style={{color:theme.color}}>
      <h1> Login Status</h1>
      {user.name.localeCompare("") === 0 ? <p>User Is Not Logged In</p> : <p>{user.name} is logged in !</p> }
      <button   onClick={() => {
      dispatch(testAction({"_id":{"$oid":"61472520864b7fdad2e625a3"},"name":"Shivam Dargan","googleId":"104688998999068591875","profilePicLink":"https://lh3.googleusercontent.com/a-/AOh14GgyeM6oGjLaC0LYO29Q5_KV2tDHRF20AR1ChD8H=s96-c","email":"sdargan_be20@thapar.edu","upvoteProblemsList":[0,"61472943864b7fdad2e625b7","61476754c68758aaef83bf6a","6147915509507b0610f31e8e","61472efc2e7fa95a5f22c915","61546981ce949ce2edea24ac"],"downvoteProblemsList":[0,"61472bf52e7fa95a5f22c901"],"notificationList":[{"notifierName":"Shivam Dargan","problemTitle":"Water Overflow On The Roads Due To Clog Drains","action":"Upvote","_id":{"$oid":"614729ee864b7fdad2e625d6"}},{"notifierName":"Shivam Dargan","problemTitle":"Very Long Traffic Jam","action":"Upvote","_id":{"$oid":"6154699ace949ce2edea24d5"}},{"notifierName":"Fone Future","problemTitle":"Very Long Traffic Jam","action":"Downvote","_id":{"$oid":"615469ebce949ce2edea25ae"}}],"__v":31,"phoneNo":719712378278}))
      }}>Check Status</button>
      <p>{testState.upvoteProblemsList[1]}</p>
    </div>
  );
}

export default UserStatus;