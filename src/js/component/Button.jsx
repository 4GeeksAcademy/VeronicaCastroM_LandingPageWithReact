import React from "react";
import '../../styles/Button.css'

export function Button(props){
    return(
        <button type="button" class="main-button btn btn-primary btn-md">{props.textoBoton}</button>
    );
}