import React from 'react';

import ShowAdvertisementImage from '../Auth/customer-core/ShowAdImage'

const cardAd =({ item }) =>{
    return (
        
        <div className="col-2 mb-4">
            <div className="card">
                <div className="card-body">
                    <ShowAdvertisementImage item={ item } url="advertisement"></ShowAdvertisementImage> 
                </div>
            </div>
        </div>
    )
};

export default cardAd;