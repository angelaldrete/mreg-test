import Link from "next/link";
import React from "react";

const Requests = () => {
  return (
    <>
      <div>Mis peticiones</div>
      <ul>
        <li>
          <Link href="/requests/1">Peticion 1</Link>
        </li>
      </ul>
      <Link href="/requests/new">Crear nueva peticion</Link>
    </>
  );
};

export default Requests;
