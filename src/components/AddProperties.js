import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperties = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "flat",
      bedrooms: null,
      bathrooms: null,
      price: null,
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            placeholder="3 Bed Flat"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="type">
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Bedrooms
          <input
            placeholder="0"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="bathrroms">
          Bathrooms
          <input
            placeholder="0"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            placeholder="Only use numbers"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            placeholder="joe.blogs@surrealestate.co.uk"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperties;
