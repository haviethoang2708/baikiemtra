import React from "react";
import "./App.css";
import MyClip from "./components/Cliplist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aptech Studio - My Clips</h1>
      </header>
      <MyClip />
      <footer>
        <p>Frontend Web Development with React - Set03 Practical Paper</p>
      </footer>
    </div>
  );
}

export default App;
