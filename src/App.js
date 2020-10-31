import "./global.css";
import img from "./assets/logo1.png";
import QueensImg from "./utils/QueenImage";
import getQueenById from "./utils/api";
import { useState } from "react";

function App() {
  const [randomImage, setQueen] = useState(null);

  async function handleClick() {
    const randomQueen = await getQueenById();
    setQueen(randomQueen);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={img} alt="Logo" />
      </header>
      <main>
        <QueensImg />
      </main>
    </div>
  );
}

export default App;
