import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Homes";
import Shop from "./web/shop";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Shop />
    </div>
  );
}

export default App;
