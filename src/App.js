import ChangeColor from "./components/changeColor";
import Login from "./components/login";
import Profile from "./components/profile";
import UserStatus from "./components/userStatus";

function App() {
  return (
    <div className="App">
      Hello World
      <Profile/>
      <Login/>
      <ChangeColor/>
      <UserStatus/>
    </div>
  );
}

export default App;
