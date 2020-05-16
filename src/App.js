import React from "react";
import "./styles.css";

import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}
