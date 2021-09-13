import React, {useState} from "react";
import axios from "axios";

export default function Addquantity(){
    // assign values and variables to backend
    
    const [itemname, setitemname]=useState("");
    const [userid, setuserid]=useState("");
    const [losequantity, setlosequantity]=useState("");
    const [prequantity, setprequantity]=useState("");
    
   
    //data goes to database after onclick to button
       function sendData(e){
           e.preventDefault();
        //   alert("Insert");
       const newquantity ={
          
        itemname,
        userid,
        losequantity,
        prequantity
       }
    //    display entered values using console log, inspect in web app
    
        //   console.log(newquantity);
        //  send object newquantity to backend as http method and see response from server
        axios.post("http://localhost:9000/addquantity/add",newquantity ).then(()=>{
            alert("Item added to Cart")
        }).catch((err)=>{
            alert(err)
        })

       }

    return(
        <div className="container">
        <form onSubmit={sendData}  className="needs-validation" novalidate>
            <div className="row" ><br/><br/>
             <div className="col-6"  align="left">
                  <label>Item type: Sugar</label>
             </div>
{/* search other items available to puchase in separate quantities*/}
                 <div className="col-4"  align="left">
                    <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Other lose Items " aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    </nav>
                 </div>

            </div>
            
            <input class="form-control" type="text" value="Item name: Sugar" id="itemname" aria-label="readonly input example" readonly
             onChange={(e)=>{
                setitemname(e.target.value);
             }
               }/>

            <input class="form-control" type="text" value="User Id: 13a" id="userid" aria-label="readonly input example" readonly
             onChange={(e)=>{
                setuserid(e.target.value);
             }
               }/>  
             <br/><br/>
            {/* radio buttons and not checked list because user not allowed to purchase both*/}
        <div className="row">
            <div className="col-2"  align="left">
                <label for="inlineRadioOptions" class="fw-bold" >Choose item</label>
            </div>
            <div className="col-2">
                <div className="form-check form-check-inline" >
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">Lose Quantity</label>
                </div>
            </div> 
            <div className="col-2">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label" for="inlineRadio2">Pre packed</label>
                </div>  
            </div>
        </div>
              <br/>  <br/>  
              {/* enter values and set target values to send to backend */}
            <div className="row" align="left">
              <label> <h3>Lose Quantity </h3></label>
             </div> 
            <div className="row g-3 align-items-center">
               <div className="col-auto">
               <label for="losequantity" className="col-form-label"> Enter required quantity(grams)</label>
               </div>
               <div className="col-auto">

               <input type="number"  min="0" max="10000" id="losequantity" className="form-control" aria-describedby="passwordHelpInline" placeholder="100" 
               onChange={(e)=>{
                  setlosequantity(e.target.value);
               }
               }  required/>
               <div class="invalid-feedback">
                        Please select a value, if no value enter zero.
                </div>
               </div>
               <div className="col-auto">
                    <span id="passwordHelpInline" className="form-text"  style={{color:"red"}}>
                    !Quantity must not exceed 10kg
                    </span>
               </div>
            </div>
             <br/><br/>

             <div className="row" align="left">
             <label><h3>Prepacked Items</h3> </label>
             </div>
             <div className="row g-3 align-items-center">
               <div className="col-auto">
                 <label for="prequantity" className="col-form-label"> Chose packet quantity</label>
               </div>
               <div className="col-auto">
                <input type="number" min="0" max="20" id="prequantity" className="form-control" aria-describedby="passwordHelpInline" placeholder="1" 
                onChange={(e)=>{
                    setprequantity(e.target.value);
                 }} required/>
               </div>
               <div className="col-auto">
                    <span id="passwordHelpInline" className="form-text"  style={{color:"red"}}>
                    !Quantity must not exceed 20
                    </span>
               </div>
            </div>
             <br/><br/>
             {/* buttons */}
             <div className="row" align="right">
            <div className="col-4">
            <a className="btn btn-primary" href="#" role="button"  >Add to Scheduled Item List</a>
            </div>
            <div className="col-2">
            <input className="btn btn-success" type="submit" value="Add to Shopping Cart"></input>
            </div>
            <div className="col-2">
            <a className="btn btn-secondary" href="#" role="button">Back</a>
            </div>
            
            <div className="col-2">
            <input className="btn btn-light" type="reset" value="Reset"></input>
            </div>
            </div>

            </form>

          </div>
        
    )
}