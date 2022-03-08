import logo from "./logo.svg";
import MainComponent from "./Component/MainComponent";
import Values from "./Component/component1";
import ProductComponent from "./Product/ProductComponent";
import "./App.css";
import { useState } from "react";

const product = [
  { id: "1", Name: "Laptop", Price: "50,000", OrderDate: new Date(2022, 3, 10) },
  { id: "2", Name: "Mobile", Price: "51,000", OrderDate: new Date(2022, 3, 11) },
  { id: "3", Name: "Monitor", Price: "52,000", OrderDate: new Date(2022, 3, 12) },
  { id: "4", Name: "CPU", Price: "53,000", OrderDate: new Date(2022, 3, 13) },
  { id: "5", Name: "PC", Price: "54,000", OrderDate: new Date(2022, 3, 14) },
];

function App() {
  const [prod, updatedProduct] = useState(product);
  
  const addHandler = data =>{
    console.log("Add handler data:",data);
    updatedProduct((previousData)=>{
      return [data, ...previousData]
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> First React Application </h1>
        <button class="btn btn-success">Click Here</button>
      </header>
      <div>
        <ProductComponent onAddProduct={addHandler}/>
      </div>
      <div>
        <MainComponent items={prod} />
      </div>
      <div>
        {/* <Values
          Name={product[0].Name}
          Price={product[0].Price}
          OrderDate={product[0].OrderDate}
        ></Values>
        <Values
          Name={product[1].Name}
          Price={product[1].Price}
          OrderDate={product[1].OrderDate}
        ></Values>
        <Values
          Name={product[2].Name}
          Price={product[2].Price}
          OrderDate={product[2].OrderDate}
        ></Values>
        <Values
          Name={product[3].Name}
          Price={product[3].Price}
          OrderDate={product[3].OrderDate}
        ></Values>
        <Values
          Name={product[4].Name}
          Price={product[4].Price}
          OrderDate={product[4].OrderDate}
        ></Values> */}
      </div>
    </div>
  );
}

export default App;
