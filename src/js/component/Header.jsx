import React from "react";
import '../../styles/Header.css'


export function Header(props) {
    return (
      
         <div className={props.classType}>
           <h1>{props.greeting}</h1>
           <p>{props.text}</p>
           <div>{props.element}</div>
        </div>
    
    )
}