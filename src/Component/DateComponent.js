import "./DateComponent.css";

function DateValue(props) {
  //console.log("props in DateComponent:-", props.newDate);
  return (
    <div className="date-component">
      <p>
        {" "}
        Order Date is:{" "}
        {props.newDate.toLocaleString("en-US", {
          month: "long",
          day: "2-digit",
        })}{" "}
        {props.newDate.getFullYear()}{" "}
      </p>
    </div>
  );
}

export default DateValue;
