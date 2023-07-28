import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <form>
        <label htmlFor="fullname">Fullname</label>
        <input id="fullname" type="text" />
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Register</button>
      </form>
      <p>
        Ya estas registrado? <Link href="/login">Inicia sesion</Link>
      </p>
    </>
  );
};

export default Register;
