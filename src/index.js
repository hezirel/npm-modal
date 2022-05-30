import {
  React,
  useState,
} from 'react';

import { render } from "react-dom";
import { Modal } from "./lib";

const App = () => {
  const [show, setShow] = useState(false);
  return (
      <div style={{ width: 640, margin: "15px auto" }}>
        <h1>Hello React</h1>
        <Modal handleState={setShow} />
      </div>

  );
};

render(<App />, document.getElementById("root"));
