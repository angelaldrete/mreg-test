import React from "react";

const RequestNew = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
      }}
    >
      <label htmlFor="artista">Artista</label>
      <input id="artista" type="text" />
      <label htmlFor="cancion">Cancion</label>
      <input
        id="cancion"
        type="file"
        accept="
      audio/wav,
      audio/mpeg,
      audio/ogg"
      />
      <label htmlFor="album">Album</label>
      <input id="album" type="text" />
      <label htmlFor="genero">Genero</label>
      <input id="genero" type="text" />
      <label htmlFor="duracion">Duracion</label>
      <input id="duracion" type="text" />
      <label htmlFor="letra">Letra</label>
      <textarea id="letra" type="text" />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default RequestNew;
