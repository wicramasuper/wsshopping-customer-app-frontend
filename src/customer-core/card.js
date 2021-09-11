import React from 'react';

import {Link} from 'react-router-dom'


import ShowImage from '../Auth/customer-core/ShowImage'

const card =({product}) =>{
    return (
        
        <div className="col-2 mb-4">
            <div className="card">
                <div className="card-header">{product.item_name}</div>
                <div className="card-body">
                
                <ShowImage item={product} url="product"></ShowImage>
                    
                    <p>{product.item_}</p>
                    <p>RS.{product.item_price}</p>
                    <p>{product.item_category}</p>
                    <p>{product.item_quantity}{product.item_weight}</p>
                    
                    


                    <Link to={`/addQuantity/${product.item_name}`}><button className="btn btn-danger btn-sm btn-block mt-2 mb-2" >Add Quantity</button></Link>
                    <Link to="/"><button className="btn btn-danger btn-sm  btn-block mt-2 mb-2">Add Cart </button></Link>
                    
                    
                </div>
            </div>


        </div>
    )
}


export default card;