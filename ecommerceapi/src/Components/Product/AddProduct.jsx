import React, { useState } from "react";
import api from "../../api";

export default function AddProduct() {
  const [formData, setFormData] = useState({ name: "", description: "", price: "", category_id: "" });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category_id", formData.category_id);
    if (image) data.append("image1", image);

    try {
      await api.post("products/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Product added successfully!");
    } catch (err) {
      setMessage("Failed to add product.");
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="description" placeholder="Description" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <input name="category_id" type="number" placeholder="Category ID" onChange={handleChange} required />
      <input type="file" onChange={handleFile} />
      <button type="submit">Add</button>
      {message && <p>{message}</p>}
    </form>
  );
}
