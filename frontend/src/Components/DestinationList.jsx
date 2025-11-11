import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DestinationList() {
  const [destinations, setDestinations] = useState([]);

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/destinations");
    setDestinations(res.data);
  };

  const del = async (id) => {
    await axios.delete(`http://localhost:5000/api/destinations/${id}`);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      {destinations.map((d) => (
        <div key={d._id} className="border p-2 flex justify-between items-center mb-2">
          <div>
            <h3>{d.name}</h3>
            <p>{d.description}</p>
          </div>
          <button onClick={() => del(d._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
