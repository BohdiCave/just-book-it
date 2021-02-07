import React from "react";
import {useLocation} from "react-router-dom";

export default function Btn(props) {
  const location = useLocation();
  const address = location.pathname;

  return (
    <>
    {address==="/" || address==="/books" ?
      (<span id={props.id} className={props.name} onClick={props.action} role="img" aria-label="save-button" tabIndex="0">
        💾  
      </span>)
    : address==="/saved" && 
      (<span id={props.id} className={props.name} onClick={props.action} role="img" aria-label="delete-button" tabIndex="0">
        ❌
      </span>)
    }
    </>
  );
}