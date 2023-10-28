import React, { useState, useEffect } from 'react';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailRestaurant from "./pages/DetailRestaurant";
import Navbar from './components/Navbar';

export default function App() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://crossoverbackend.onrender.com/api/restaurant');
        const data = await response.json();
        setRestaurantData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Router>
      <Navbar />

        <Routes>
          <Route path="/detail" element={<DetailRestaurant />} />
          <Route path="/" element={<Home data={restaurantData} />} />
        </Routes>
      </Router>
    </>
  )
}
