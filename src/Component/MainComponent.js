import React, { useState } from "react";
import Values from "./component1";
import ProductFilter from "./ProductFilter";

// const year = ["2019", "2020", "2021", "2022"];

const MainComponent = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Selected Year", selectedYear);
  };
  const filteredList = props.items.filter((product) => {
    console.log("filter item", product.OrderDate.getFullYear()," ", filteredYear);
    return product.OrderDate.getFullYear().toString() === filteredYear;
  });

  // let displayMessage;

  // if(filteredList.length > 0){
  //   console.log("Filtered List:->",filteredList);
  //   displayMessage = filteredList.map((prod)=>{
  //     <Values
  //         key={prod.id}
  //         Name={prod.Name}
  //         Price={prod.Price}
  //         OrderDate={prod.OrderDate}
  //       />
  //   });
  // }
  // else{
  //   displayMessage = <p>No product available!</p>
  // }
  return (
    <div>
      <ProductFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredList.length === 0 ? (
        <p>No Product</p>
      ) : (
        filteredList.map((prod) => {
          <Values
            Key={prod.id}
            Name={prod.Name}
            Price={prod.Price}
            OrderDate={prod.OrderDate}
          />;
        })
      )}
      {/* {props.items.map((data) => (
        <Values
        key={data.id}
        Name={data.Name}
        Price={data.Price}
        OrderDate={data.OrderDate}
      />
      ))} */}

      {/* <Values
        Name={props.items[0].Name}
        Price={props.items[0].Price}
        OrderDate={props.items[0].OrderDate}
      ></Values>
      <Values
        Name={props.items[1].Name}
        Price={props.items[1].Price}
        OrderDate={props.items[1].OrderDate}
      ></Values>
      <Values
        Name={props.items[2].Name}
        Price={props.items[2].Price}
        OrderDate={props.items[2].OrderDate}
      ></Values>
      <Values
        Name={props.items[3].Name}
        Price={props.items[3].Price}
        OrderDate={props.items[3].OrderDate}
      ></Values>
      <Values
        Name={props.items[4].Name}
        Price={props.items[4].Price}
        OrderDate={props.items[4].OrderDate}
      ></Values>  */}
    </div>
  );
};

export default MainComponent;
