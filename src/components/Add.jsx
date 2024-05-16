import React, { useState } from "react";
import { saveDataStorage } from "../helpers/SaveDataStorage";

export const Add = () => {
    const addFilm = "Add Film";
    const [filmState, setFilmState] = useState({
        title: "",
        sinopsis: "",
    })

    const {title, sinopsis} = filmState;  // de esta manera guardamos el estado de title y sinopsis para poder usarlos en cualquier formulario,header,componente,etc

    // Get the data and save in storage
    const getDataForm = e => {
        e.preventDefault(); 

        let target = e.target; //e.target consigue todo el evento como tal
        let title = target.title.value; 
        let sinopsis = target.sinopsis.value; 
        console.log("El titulo y la descripción",title,"-",sinopsis);
        //Crear objeto
        let film = {
            id: new Date().getTime(),
            title,
            sinopsis,
        }
        setFilmState(film); 
        
        saveDataStorage("filmsDataStorage",film); 
        console.log("Objeto creado =>", film); 
    }

  return (
    <div className="add">
      <h3 className="title"></h3>
      <h1>
      {(title && sinopsis) && `Film ${title} created with success`}
      </h1>
      <strong></strong>
      <form onSubmit={getDataForm}>
        <input type="text" id="title" name="title" placeholder="Title"></input>
        <textarea id="sinopsis" name="sinopsis" placeholder="Sinopsis"></textarea>
        <input type="submit" id="save" value="Save"></input>
      </form>
    </div>
  );
};

export default Add;
