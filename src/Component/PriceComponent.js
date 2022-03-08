import "./PriceComponent.css";

function PriceComponent(props) {
  //console.log("Price Component:--->", props);
  return (
    <div className="container-price">
      <p> Price is: {props.Price} </p>
    </div>
  );
}

export default PriceComponent;
