import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExersiceDetail from "./pages/ExersiceDetail";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExersiceDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
