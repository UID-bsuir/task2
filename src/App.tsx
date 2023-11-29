import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import MainPage from "./components/MainPage/MainPage.tsx";
import NotFoundPage from "./components/404Page/404Page.tsx";
import SearchPage from "./components/SearchPage/SearchPage.tsx";
import SingerPage from "./components/SingerPage/SingerPage.tsx";
import Header from "./components/Layout/Header/Header.tsx";
import Footer from "./components/Layout/Footer/Footer.tsx";
import { useDatabase } from "./DataContext.tsx";

function App() {
  const db = useDatabase();

  return (
    <Router>
      <div className={styles.root}>
        <div className={styles.header}>
          <Header />
        </div>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:id" element={<SingerPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
