import { Container } from "@mui/material";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Graficos from "./components/Graficos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="app">
        <main className="content">
          <Container>
            <Navbar/>
            <Graficos/>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;