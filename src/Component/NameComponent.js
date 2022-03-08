import "./NameComponent.css";

function NameComponent(props) {
  return (
    <div className="name-component">
      <h4>
        Welcome, {props.children}
        <div>
          <p></p>
        </div>
      </h4>
    </div>
  );
}

export default NameComponent;
