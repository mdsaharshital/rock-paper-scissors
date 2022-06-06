import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Rules from "./components/Rules";
import Home from "./Page/Home";
import Play from "./Page/Play";

function App() {
  const [rps, setRps] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div>
      <Header score={score} />
      <Routes>
        <Route path="/" element={<Home setRps={setRps} />}></Route>
        <Route
          path="/play"
          element={<Play rps={rps} score={score} setScore={setScore} />}
        ></Route>
      </Routes>
      <Rules />
    </div>
  );
}

export default App;
