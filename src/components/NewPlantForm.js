import React, { useState } from "react";

function NewPlantForm({updatePlants}) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleSubmit (event) {
    event.preventDefault()

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    .then(resp => resp.json())
    .then(data => updatePlants(data))
  }

  function handleChange (e) {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={form.image} type="text" name="image" placeholder="Image URL" />
        <input  onChange={handleChange} value={form.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
