import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card";
import { robots } from "./robots";

import reportWebVitals from "./reportWebVitals";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={[0].email} />
      <Card id={robots[1].id} name={robots[1].name} email={[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={[2].email} />
      <Card id={robots[3].id} name={robots[3].name} email={[3].email} />
      <Card id={robots[4].id} name={robots[4].name} email={[4].email} />
    </div>
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Card />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
