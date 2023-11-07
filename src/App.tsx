import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.tsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.tsx";
import SearchPage from "./components/SearchPage/SearchPage.tsx";
import SingerPage from "./components/SingerPage/SingerPage.tsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:id" element={<SingerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
