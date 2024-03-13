import React from "react";

function MyPage({ user }) {
  return (
    <div>
      <div>
        <label htmlFor="usename">자기소개</label>
        <input type="text" id="usename" value="Tom" readOnly />
      </div>
      <div data-testid="my-div" />
      <div>
        <label htmlFor="profile">자기소개</label>
        <textarea type="text" id="profile" />
      </div>
    </div>
  );
}

export default MyPage;
