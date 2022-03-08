import React from 'react';
import AddProductFormComponent from './AddProductFormComponent';

const ProductComponent = (props) =>{
    const saveData = (newEnteredData)=>{
        const newData = {...newEnteredData};
        props.onAddProduct(newData);
    }
    return(
        <div>
            <AddProductFormComponent onSaveData={saveData}/>
        </div>
    );
} 

export default ProductComponent;