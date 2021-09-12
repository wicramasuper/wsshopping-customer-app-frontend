import React, { useState, useEffect } from 'react';
import {displayProducts,displayProductsAll, getAdvertisementList, getPromotionList } from '../Auth/customer-core/home';
import Sidebar from '../core/navbar';

import Card from './card';
import CardAd from './cardAd'
import CardPromo from './cardPromo'

const Home = () => {

    const [productBySell, setProductBySell] = useState([]);
    const [productByArrival, setProductByArrival] = useState([]);
    const [advertisements, setAdvertisements] = useState([]);
    const [promotions, setPromotions] = useState([]);
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

    const loadAdvertisements = () => {
        getAdvertisementList().then(data => {
            if(data.error) {
                setError(data.error);
            }
            else {
                setAdvertisements(data);
            }
        })
    };

    const loadPromotions = () => {
        getPromotionList().then(data => {
            if(data.error) {
                setError(data.error)
            }
            else {
                setPromotions(data);
            }
        })
    };

    useEffect(() => {
        loadProductBySell();
        loadProductByArrival();
        loadAdvertisements();
        loadPromotions();
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

            <div>
                <h2 className="mb-4">Promotions and Advertisements</h2>
                    <div className="row">
                        {advertisements.map((advertisement, i) => (
                            <CardAd key={i} item={advertisement} />
                        ))}
                        {promotions.map((promotion, i) => (
                            <CardPromo key={i} item={promotion} />
                        ))}
                    </div>
            </div>

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