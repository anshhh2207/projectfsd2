import React from "react";
import DestinationForm from "../components/DestinationForm";
import DestinationList from "../components/DestinationList";
import HotelForm from "../components/HotelForm";
import HotelList from "../components/HotelList";

export default function AdminDashboard() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Manage Destinations</h2>
        <DestinationForm />
        <DestinationList />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Manage Hotels</h2>
        <HotelForm />
        <HotelList />
      </section>
    </div>
  );
}
