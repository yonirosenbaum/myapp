import React from "react";
import { Provider } from "react-redux";
import Store from "./Store/reducer";
import Zoom from "react-reveal/Zoom";
import logo from "./logo.svg";
import "./App.css";
/*
import Task1 from "./utils/task1";
import Task2 from "./utils/task2";
import Task3 from "./utils/task3";
import Task4 from "./utils/task4";
import Task5 from "./utils/task5";
import Task6 from "./utils/task6";
*/
import Nav from "./Components/nav";
import Form1 from "./Components/form1";
import Form2 from "./Components/form2";
import Form3 from "./Components/form3";
import Form4 from "./Components/form4";
import Form5 from "./Components/form5";
import Form6 from "./Components/form6";

function App() {
  return (
    <Provider store={Store}>
      <div style={{ background: "darkgrey", marginTop: 0 }} className="App">
        <Nav />
        <Zoom>
          <Form1 />
        </Zoom>
        <Zoom>
          <Form2 />
        </Zoom>
        <Zoom>
          <Form3 />
        </Zoom>
        <Zoom>
          <Form4 />
          <Zoom></Zoom>
          <Form5 />
        </Zoom>
        <Zoom>
          <Form6 />
        </Zoom>
      </div>
    </Provider>
  );
}

export default App;

/*
     <Task1 first={101} second={400} third={500} />
      <Task2 number={1011000} />
      <Task3 number={-10} />
      <Task4 side1={40} side2={71} side3={53} />
      <Task5 object1={{ x: -1000, y: -9 }} object2={{ x: 1000, y: 4 }} />
      <Task5 object1={{ x: -1000, y: -9 }} object2={{ x: 1000, y: 4 }} />
      <Task6 stringArray={["aaaa", "ankank"]} />


*/
