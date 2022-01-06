import { useState } from "react";
import Desktop from "./components/Desktop";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Desktop />
    </div>
  );
}

export default App;
