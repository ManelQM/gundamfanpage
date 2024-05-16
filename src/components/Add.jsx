import React from "react";

export const Add = () => {
    const title = "Add Film";
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
        console.log("Objeto JSON creado =>", film); 
    }
  return (
    <div className="add">
      <h3 className="title"></h3>
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
