import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchCriteria, setSearchCriteria] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }, [])

  function updatePlants (plant) {
    setPlants([...plants, plant])
  }

  function handleChange (e) {
    setSearchCriteria(e.target.value)

  }

  const filterPlants = searchCriteria === "" ? plants : plants.filter(plant => plant.name.toLowerCase().includes(searchCriteria.toLowerCase())=== true) 
  return (
    <main>
      <NewPlantForm updatePlants={updatePlants}/>
      <Search searchCriteria={searchCriteria} handleChange={handleChange}/>
      <PlantList filterPlants={filterPlants}/>
    </main>
  );
}

export default PlantPage;
