import React, {useState, useEffect} from "react";
import axios from "axios";
export default function Updateqty(props){
    const id=props.match.params.id   
     
    
     const [losequantity, setlosequantity]=useState("");
     const [prequantity, setprequantity]=useState("");

    
    
   
    // //data goes to database after onclick to button
    const setData = function sendData(e){
            e.preventDefault();
        //   alert("Insert");
        const newquantity ={
              
          
            losequantity,
              prequantity
            }

            axios.put(`http://localhost:9000/addquantity/update/${id}`,newquantity ).then(()=>{
                alert("Item updated")
            }).catch((err)=>{
                alert(err)
            })
     
           
           
      }

        
    return(
        <div>

             
            <form onSubmit="setData">
            <div className="row" ><br/><br/>
             <div className="col-6"  align="left">
                  <label>Item type: Sugar</label>
             </div>
            </div>
             
            <br/><br/>
           {/* radio buttons */}
        <div className="row">
            <div className="col-2"  align="left">
                <label for="inlineRadioOptions" class="fw-bold" >Choose item</label>
            </div>
            <div className="col-2">
                <div className="form-check form-check-inline" >
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label" for="inlineRadio1">Prepacked</label>
                </div>
            </div> 
            <div className="col-2">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label" for="inlineRadio2">Lose Quantity</label>
                </div>  
            </div>
        </div>
              <br/>  <br/>  
              {/* enter values */}
            <div className="row" align="left">
              <label> <h3>Lose Quantity </h3></label>
             </div> 
            <div className="row g-3 align-items-center">
               <div className="col-auto">
               <label for="losequantity" className="col-form-label"> Enter required quantity(grams)</label>
               </div>
               <div className="col-auto">

               <input type="number"  max="10000" id="losequantity" className="form-control" aria-describedby="passwordHelpInline" placeholder="100" 
               onChange={(e)=>{
                  setlosequantity(e.target.value);
               }
               }/>
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
                <input type="number" max="20" id="prequantity" className="form-control" aria-describedby="passwordHelpInline" placeholder="1" 
                onChange={(e)=>{
                    setprequantity(e.target.value);
                 }}/>
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
            
            <div className="col-2">
            <input className="btn btn-success" type="submit" value="Submit" onClick={setData}></input>
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