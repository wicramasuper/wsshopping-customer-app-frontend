import {API} from "../../config";

export const displayProducts = sortBy =>{
    return fetch (`${API}/products?sortBy=${sortBy}&order=desc&limit=6`,{
        method: "GET"
    }).then(response =>{
        return response.json();
    }).catch(err =>console.log(err));
};

export const displayProductsAll = sortBy =>{
    return fetch (`${API}/products?sortBy=${sortBy}&order=desc&limit=120`,{
        method: "GET"
    }).then(response =>{
        return response.json();
    }).catch(err =>console.log(err));
};
