import Hello from "./Hello";
import Timer from "./Timer";

import "./App.css";
import logo from "./logo.svg";
import MyPage from "./MyPage";
import UserList from "./UserList";
import Login from "./Login";

const user = {
  // name: "Mike",
  age: 30,
};

function App() {
  return (
    <div className="App">
      {/* <Hello user={user} /> */}
      {/* <Timer /> */}
      {/* <MyPage user={{ name: "Kim" }} /> */}
      <Login />
      <UserList users={["Tom", "Jane", "Mike"]} />
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
