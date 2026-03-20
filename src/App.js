import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Step 1: Initialize state (false = hidden by default)
  const [isVisible, setIsVisible] = useState(false);

  // Step 2: Define the event handler
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle Message</button>

      {/* Step 3: Conditional rendering */}
      {isVisible && <h1>Hello, welcome to React!</h1>}
    </div>
  );
}
