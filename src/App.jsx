import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import PlaceList from "./components/PlaceList/PlaceList";
import PlaceDetail from "./components/PlaceDetail/PlaceDetail";

function App() {
  return (
    <Router>
      <TopNav />
      <SideNav />
      <Routes>
        <Route exact path="/" element={<PlaceList />} />
        <Route path="/details/:placeId" element={<PlaceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
