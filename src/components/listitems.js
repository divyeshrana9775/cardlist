import React from "react";
function Listitem(props) {
    return (
        <div className='contactlist'>
            <img style={{display:props.imgUrl ? "block" : "none"}}src={props.imgUrl}/>
            <h3 style={{display: props.name ? "block" : "none", color:"red"}}>Name:{props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>
         
            <hr/>
      </div>
    )
}
export default Listitem;
