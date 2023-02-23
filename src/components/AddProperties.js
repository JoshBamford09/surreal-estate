import React, { useState } from "react";
import "../styles/add-property.css";
import axios from "axios";

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
    axios({
      method: "post",
      url: "http://localhost:3000/api/v1/PropertyListing",
      data: {
        title: fields.title,
        city: fields.city,
        bedrooms: fields.bedrooms,
        bathrooms: fields.bathrooms,
        price: fields.price,
        emails: fields.email,
      },
    });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h2>Add your property below</h2>
      <form onSubmit={handleAddProperty} className="add-property-form">
        <label htmlFor="title" className="form-item">
          Title:
          <input
            placeholder="3 Bed Flat"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city" className="form-item">
          City:
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

        <label htmlFor="type" className="form-item">
          Type:
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

        <label htmlFor="bedrooms" className="form-item">
          Bedrooms:
          <input
            placeholder="0"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="bathrroms" className="form-item">
          Bathrooms:
          <input
            placeholder="0"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="price" className="form-item">
          Price:
          <input
            placeholder="Numbers only"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="email" className="form-item">
          Email:
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
