import React from 'react';

import ShowPromoImage from '../Auth/customer-core/ShowPromoImage'

const cardAd =({ item }) =>{
    return (
        
        <div className="col-2 mb-4">
            <div className="card">
                <div className="card-body">
                    <ShowPromoImage item={ item } url="promotion"></ShowPromoImage> 
                </div>
            </div>
        </div>
    )
};

export default cardAd;