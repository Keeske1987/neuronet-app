import React from "react";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <LandingPage />
    </div>
  );
}
