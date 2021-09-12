import React from "react";
import Layout from './Layout';

//instead of this i try layout
//const BackToHome = () => <div>This page should redirect to home page(test page) </div>;

const BackToHome = () => (
    <Layout title="Testing Home page" description="This page shoud be real home page">

        ....
        
    </Layout>
)

export default BackToHome;