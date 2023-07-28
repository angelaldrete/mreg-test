import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/requests">Peticiones</Link>
        </li>
        <li>
          <button>Cerrar sesion</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
