import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailRestaurant from "./pages/DetailRestaurant"


const object = {
  id: 0,
  name: "Restaurant Name",
  img: "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/8a6cc705477a/assets/img/home/hero_photos/uteUmycsbh0UibXk-At-3A.jpg",
  location: ["city", "latitude", "longitude", "address", "opening_hours"],
  tags: ["genre"],
  comments: [
    {
      user: "name",
      review: "review",
      user_rating: 4 / 5,
      date: Date.now(),
    },
  ],
};

export default function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path="/detail" element={<DetailRestaurant />} />
          
          <Route path="/" element={<Home object={object} />} />

        </Routes>

      </Router>

    </>
  )
}

