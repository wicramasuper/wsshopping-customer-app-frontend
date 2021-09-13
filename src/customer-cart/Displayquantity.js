import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Displayquantity() {

    const [addquantities, setaddquantities] = useState([]);

    useEffect(() => {
        function getaddquantities() {
            axios.get("http://localhost:9000/addquantity/").then((res) => {
                //  inspect in shoppingcart can see the data retrieved from database
                // console.log(res.data);
                setaddquantities(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getaddquantities();
    }, [])

    function ondelete(id) {
        axios.delete(`http://localhost:9000/addquantity/delete/${id}`).then((res) => {
            alert("Deleted item successfully");

        })
    }


    return (
        <div className>

            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Shopping Cart</span>
                </div>
            </nav>








            {/* <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center" style={{color:'red'}}>
                        <strong>ItemName</strong>
                        <strong>Looseqty</strong>
                        <strong>Edit</strong>
                        <strong>Prepackedqty</strong>
                        <strong>Price</strong>
                        <strong>Action</strong>
                            </li>
                    {addquantities.map((p,i)=>(
                        
                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                        <strong className="p-2 ">{p.itemname}</strong>
                        <strong className="p-2  ">{p.losequantity}</strong>
                        <Link to={`/Updateqty/${p._id}`} className="nav-link">Edit</Link>
                        <strong className="p-2 ">{p.prequantity}</strong>
                        <strong className="p-2 ">Rs.150.00</strong>
                        <button type="button" class="btn btn-danger" onClick={()=>ondelete(p._id)}>Remove</button>

                       
                        */}




            {/* </li>
                        
                    ))}

                </ul> */}
            {/* buttons */}
            {/* <br/>   <br/> 
                 <div className="row" align="center">   
                <div className="col-6"> <input class="btn btn-info" type="submit" value="View Scheduled Item List"></input></div>   
                <div className="col-2">
                <input class="btn btn-success" type="submit" value="Buy"></input>
                </div>
                <div className="col-2">
                <input class="btn btn-primary" type="button" value="Generate Bill"></input>
                </div>
                <div className="col-2">
                <a className="btn btn-secondary" href="#" role="button">Back</a>
                </div>
                </div>  */}

            <div class="container">

                <table class="table">
                    <thead>
                        <tr style={{ color: 'red' }}>
                            <th>ItemName</th>
                            <th>Loose qty</th>
                            <th>Prepacked qty</th>
                            <th>Edit</th>
                            <th> Price</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    {addquantities.map((p, i) => (
                        <tbody>
                            <tr>
                                <td>{p.itemname}</td>
                                <td>{p.losequantity}</td>
                                <td>{p.prequantity}</td>
                                <td><Link to={`/Updateqty/${p._id}`} className="nav-link">Edit</Link></td>
                                <td>Rs.150.00</td>
                                <td><button type="button" class="btn btn-danger" onClick={() => ondelete(p._id)}>Remove</button></td>
                            </tr>




                        </tbody>



                    ))}
                </table>
                <br /><br /><br /><br />
                <div className="row" align="center">
                    <div className="col-6"> <input class="btn btn-info" type="submit" value="View Scheduled Item List"></input></div>
                    <div className="col-2">
                        <input class="btn btn-success" type="submit" value="Buy"></input>
                    </div>
                    <div className="col-2">
                        <input class="btn btn-primary" type="button" value="Generate Bill"></input>
                    </div>
                    <div className="col-2">
                        <a className="btn btn-secondary" href="#" role="button">Back</a>
                    </div>
                </div>



            </div>



        </div>
    )
}