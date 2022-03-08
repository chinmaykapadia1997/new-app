const ProductFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };
  return (
    <div>
      <label>Filter By.:</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        {/* {props.Year.map((data)=> <option>{data}</option>)} */}
      </select>
    </div>
  );
};

export default ProductFilter;
