import React from "react";

function JoinButton({ age }) {
  return (
    <>
      <button disabled={age < 19}>가입</button>
      {age < 19 ? (
        <h3 style={{ color: "red" }}>성인만 가입할 수 있습니다.</h3>
      ) : (
        <h3 style={{ color: "blue" }}>가입할 수 있습니다.</h3>
      )}
    </>
  );
}

export default JoinButton;
