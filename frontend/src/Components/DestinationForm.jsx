import React, { useState } from "react";
import axios from "axios";

export default function DestinationForm() {
  const [formData, setFormData] = useState({ name: "", description: "", image: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    if (formData.image) data.append("image", formData.image);

    await axios.post("http://localhost:5000/api/destinations", data);
    alert("Destination added!");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded mb-4">
      <input type="text" placeholder="Destination Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <textarea placeholder="Description"
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
      <input type="file" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
      <button type="submit">Add Destination</button>
    </form>
  );
}
