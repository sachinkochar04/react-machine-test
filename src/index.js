import React from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home.jsx";
import Ticket from "./Components/Ticket.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Home />
      <h2>Use this component to show a ticket</h2>
      <Ticket />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
