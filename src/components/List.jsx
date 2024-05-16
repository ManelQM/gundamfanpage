import React, { useEffect, useState } from "react";

export const List = () => {
  //2º Hookeamos el estado del componente
  const [listState, setListState] = useState([]);
  const { title, sinopsis } = listState;
  //1º Conseguimos los datos que necesitamos del Storage
  const getFilms = () => {
    let films = JSON.parse(localStorage.getItem("filmsDataStorage"));
    // console.log("Films Storage =>", films);
    setListState(films);
  };
  useEffect(() => {
    console.log("Carga el componente");
    getFilms();
  }, []);
  return (
    <>
      {listState.map((film) => {
        return (
          <article className="filmItem">
            <h3 className="title"></h3>
            <p className="sinopsis"></p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </article>
        );
      })}
    </>
  );
};

export default List;
