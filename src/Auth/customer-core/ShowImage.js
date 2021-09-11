import React from 'react'
import {API} from "../../config";

const ShowImage = ({item,url})=>(
    <div className="product-image">
        <img src={`${API}/customer/product/image/${item._id}`} alt={item.item_name} className="mb-3" 
         style={{ maxHeight: "100px", maxWidth: "100px" ,minHeight: "100px"}}></img>
    </div>
)

export default ShowImage;