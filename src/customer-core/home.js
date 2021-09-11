import React, { useState, useEffect } from 'react';
import {displayProducts,displayProductsAll } from '../Auth/customer-core/home';
import Sidebar from '../core/navbar';

import Card from './card';

const Home = () => {

    const [productBySell, setProductBySell] = useState([]);
    const [productByArrival, setProductByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductBySell = () => {
        displayProductsAll('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductBySell(data);
            }
        });
    };

    const loadProductByArrival = () => {
        displayProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductByArrival(data);
            }
        });
    };
    useEffect(() => {
        loadProductBySell();
        loadProductByArrival();
    }, []);


    return (
        

            <Sidebar>
            <div>
               
            
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
            


                {productByArrival.map((product, i) => (
                    <Card key={i} product={product} />
                ))}

            </div>
            </div>
            <hr/>
            <hr></hr>
            <hr/>
            <h2 className="mb-4">Best Selling</h2>
            <div className="row">


                {productBySell.map((product, i) => (
                    <Card key={i} product={product} />
                ))}

            </div>

            
</Sidebar>
        
    )
};

export default Home;