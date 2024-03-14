import React, { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const handleOnClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <button type="button" onClick={handleOnClick}>
      {isLogin ? "Logout" : "Login"}
    </button>
  );
}

export default Login;
