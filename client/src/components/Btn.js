import React from "react";

export default function Btn(props) {
  return (
    <>
    {props.name==="save" ?
      (<span className={props.name} onClick={props.action} {...props} role="img" aria-label="save-button" tabIndex="0">
        💾  
      </span>)
    : props.name==="delete" && 
      (<span className={props.name} onClick={props.action} role="img" aria-label="delete-button" tabIndex="0">
        ❌
      </span>)
    }
    </>
  );
}