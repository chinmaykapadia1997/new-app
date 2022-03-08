import React, { useState } from "react";
import DateValue from "./DateComponent";
import PriceComponent from "./PriceComponent";
import NameComponent from "./NameComponent";
import "./component1.css";
//const product = { name: "ABC", price: "100" };
//  { name: "DEF", price: "200" },
//  { name: "GHI", price: "300" },

function Values(props) {
  const [Name, NewName] = useState(Name); //To change the output in the HTML

  const updateHandler = () => {
    NewName(props.Name + " " + "Updated"); //This will change the value of name when the update button is clicked.
  };
  return (
    <div className="container-fluid">
      <div></div>
      <NameComponent Name={props.Name}></NameComponent>
      {/* <h3>
        Welcome, {props.Name}
        <div>
          <p>to your first React Application</p>
        </div>
      </h3> */}
      <div>
        <PriceComponent Price={props.Price}></PriceComponent>
        {/* <div className="container-price">
          <p> Price is: {props.Price} </p>
        </div> */}
      </div>
      <DateValue newDate={props.OrderDate}></DateValue>
      <div className="update-name">
        <button className="btn btn-success" onClick={updateHandler}>
          Update Name
        </button>
      </div>
    </div>
  );
}

export default Values;

// function user(name){
//     return name.firstName + " " + name.lastName;
// }
// const display = {user(name)};
//ReactDOM.render(namVal, document.getElementById("root"));
