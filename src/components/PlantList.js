import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({filterPlants}) {
  
  return (
    <ul className="cards">
      {filterPlants.map(({id, name, image, price}) => {
        return <>
        {<PlantCard id={id} name={name} image={image} price={price}/>}
              </>
    })}
      </ul>
  );
}

export default PlantList;
