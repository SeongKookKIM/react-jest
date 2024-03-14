import Hello from "./Hello";
import Timer from "./Timer";

import "./App.css";
import logo from "./logo.svg";
import MyPage from "./MyPage";
import UserList from "./UserList";

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
      <UserList users={["Tom", "Jane", "Mike"]} />
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
