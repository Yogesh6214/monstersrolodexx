import React from "react";
import "./card-list.style.css";

export const Card =(props) =>{
 return (
   <>
     <div className="card-container ">
       <img
         src={`https://robohash.org/${props.monsters.id}?set=set2`}
         alt="monsters"
       />
       <h1>{props.monsters.name}</h1>
       <h2>{props.monsters.email}</h2>
     </div>
   </>
 );
}