import React, { useState } from "react";
import "./AddProductFormComponent.css";

const AddProductFormComponent = (props) => {
  const [enteredName, updatedName] = useState("");                 //Registering state here.
  const [enteredPrice, updatedPrice] = useState("");
  const [enteredDate, updatedDate] = useState("");

  const nameHandler = (data) => {
    updatedName(data.target.value);                              
  };

  const priceHandler = (data) => {
    updatedPrice(data.target.value);
  };

  const dateHandler = (data) => {
    updatedDate(data.target.value);
  };

  const addHandler = (data) => {

    data.preventDefault();                                     //To prevent from default action

    const formData = {                                         // Assigning value
      Name: enteredName,
      Price: enteredPrice,
      OrderDate: new Date(enteredDate)
    };
    props.onSaveData(formData);
    
    updatedDate('');                                           //To clear the input fields
    updatedName('');
    updatedPrice('');
    console.log("Product Array:->", formData);
  };
  return (
    <form onSubmit={addHandler}>
      <div className="form-container">
        <div className="name">
          <label>NAME:</label>
          <input type="text" value={enteredName} onChange={nameHandler} />
        </div>
        <div className="price">
          <label>PRICE:</label>
          <input type="text" value={enteredPrice} onChange={priceHandler} />
        </div>
        <div className="date">
          <label>DATE OF ORDER:</label>
          <input type="date" value={enteredDate} onChange={dateHandler} />
        </div>
      </div>
      <div>
        <button className="btn btn-success">ADD</button>
      </div>
    </form>
  );
};

export default AddProductFormComponent;
