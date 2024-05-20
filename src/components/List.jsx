import React, { useEffect, useState } from "react";

export const List = () => {
  //2º Hookeamos el estado del componente
  const [listState, setListState] = useState([]);
  
  //1º Conseguimos los datos que necesitamos del Storage
  const getFilms = () => {
    let films = JSON.parse(localStorage.getItem("filmsDataStorage"));
    // console.log("Films Storage =>", films);
    setListState(films || []);
  };
  useEffect(() => {
    console.log("Carga el componente");
    getFilms();
  }, []);
  return (
    <>
      {listState != null ? 
      listState.map((film) => {
        return (
          <article key={film.id}className="filmItem">
            <h3 className="title">{film.title}</h3>
            <p className="sinopsis">{film.sinopsis}</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </article>
        );
      })
    : <h2>NO FILMS</h2>
    }
    </>
  );
};

export default List;
