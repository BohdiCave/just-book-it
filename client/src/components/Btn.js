import React from "react";

export default function Btn({name, ...props}) {
  return (
    <>
    {name==="save" ?
      (<span className={name} {...props} role="button" aria-label="save" tabIndex="0">
        💾  
      </span>)
    : name==="delete" ? 
      (<span className={name} {...props} role="button" aria-label="delete" tabIndex="0">
        ❌
      </span>)
    : (<span className={name} {...props} role="button" aria-label="search" tabIndex="0">
        🔍
      </span>)
    }
    </>
  );
}