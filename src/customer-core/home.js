import React, { useState, useEffect } from 'react';
import {displayProducts,displayProductsAll, getAdvertisementList, getPromotionList } from '../Auth/customer-core/home';
import Sidebar from '../core/navbar';

import Card from './card';
import CardAd from './cardAd'
import CardPromo from './cardPromo'
import Marquee from "react-fast-marquee";

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

                      
                        <h2 className="mb-4">Enjoy Premium Offers !</h2>
                        <Marquee loop="5" direction="right">
                        <div className="row">
                           
                        {promotions.map((promotion, i) => (
                            
                            <CardPromo key={i} item={promotion} />
                           
                        ))}
                        
     
                        </div>
                        </Marquee>
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
                    
                <h2 className="mb-4">For You !</h2>
                <Marquee loop="5">
                    <div className="row">
                        {advertisements.map((advertisement, i) => (
                            <CardAd key={i} item={advertisement} />
                        ))}
                        
                    </div>
                    </Marquee>
                    
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