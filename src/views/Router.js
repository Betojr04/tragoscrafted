import React, { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nav } from "../components/Navbar/Nav";
import { Footer } from "../components/Footer/Foot.js";

const App = lazy(() => import("./App.js"));

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};
