import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App ">
      <NavBar />
      <div style={{ minHeight: "81vh" }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
      </div>

    </div>
  );
}

export default App;
