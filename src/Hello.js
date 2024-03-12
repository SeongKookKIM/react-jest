import React from "react";

function Hello({ user }) {
  return user && user.name ? (
    <h1>Hello!{user.name}</h1>
  ) : (
    <button>Login</button>
  );
}

export default Hello;
