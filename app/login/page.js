import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Login</button>
      </form>
      <p>
        No estas registrado? <Link href="/register">Registrate</Link>
      </p>
    </>
  );
};

export default Login;
