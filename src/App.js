import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} exact />
      </Routes>
    </BrowserRouter>
  );
}
