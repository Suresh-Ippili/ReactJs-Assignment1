import React, { useState } from "react";
function Display({name:initialName, address:initialAddress})
{
    const [name, setName] = useState(initialName);
    const [address, setAddress] = useState(initialAddress);
    return(
        <div>
            <h2>Display Info</h2>
            <input
               type = "text"
               value = {name}
               onChange = {(e)=>setName(e.target.value)}
              
               />
            <input
               type = "text"
               value = {address}
               onChange = {(e) => setAddress(e.target.value)}
          
               />
            <p>name:{name}</p>
            <p>address:{address}</p>      
        </div>
    );


}
export default Display;