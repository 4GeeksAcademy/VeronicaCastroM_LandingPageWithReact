import React from "react";
import '../../styles/Card.css'
import { Button } from "./Button";
import imagen from '../../img/imagen-a.jpg'


export function Card(props){
    return(
        <div className="card">
        <img src= {imagen} className="card-img-top" alt="Imagen"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <Button textoBoton={props.textOfTheButton}/>
        </div>
      </div>
    );
}