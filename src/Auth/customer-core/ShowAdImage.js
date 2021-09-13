import React from 'react'
import {API} from "../../config";

const ShowAdvertisementImage = ({ item }) => (
    <div className="image">
        <img src={`${ API }/customer/advertisement/image/${ item._id }`} alt={ "Empty" } className="mb-3" 
         style={{ maxHeight: "250px", maxWidth: "250px" ,minHeight: "100%"}}></img>
    </div>
);

export default ShowAdvertisementImage
