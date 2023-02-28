import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [ formData, setFormData ] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  const { name, hp, frontUrl, backUrl } = formData

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setFormData({ 
      ...formData, 
      [key]: value
    })
  }

  const handleSubmit = (e) => {
    const configObj = {
      "name": name,
      "hp": parseInt(hp),
      "sprites": {
        "front": frontUrl,
        "back": backUrl
      }
    }
    console.log(configObj)

    e.preventDefault()
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(configObj)
    })
      .then(res=> res.json())
      .then(newPokemon => onAddPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
