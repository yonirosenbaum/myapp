import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Task1 from "./utils/task1";
import Task2 from "./utils/task2";
import Task3 from "./utils/task3";
import Task4 from "./utils/task4";
import Task5 from "./utils/task5";
import Task6 from "./utils/task6";

function App() {
  return (
    <div className="App">
      <Task1 first={101} second={400} third={500} />
      <Task2 number={1011000} />
      <Task3 number={-10} />
      <Task4 side1={40} side2={71} side3={53} />
      <Task5 object1={{ x: -1000, y: -9 }} object2={{ x: 1000, y: 4 }} />
      <Task5 object1={{ x: -1000, y: -9 }} object2={{ x: 1000, y: 4 }} />
      <Task6 stringArray={["aaaa", "ankank"]} />
    </div>
  );
}

export default App;
