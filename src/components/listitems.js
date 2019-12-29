import React from "react";
function Listitem(props) {
    return (
        <div className='contactlist'>
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>
      </div>
    )
}
export default Listitem;
