import React,{Component} from 'react';
import axios from 'axios'

export default class CreateR extends Component {

constructor(props){
super(props);
this.state={
ScheduleItemsName:"",
Address :"",
City:"",
Date:"",
Time :"",
ScheduleWeeklyMonthly:"",
DescribeScheduleItemsHear:""

}
}

handleInputChange = (e) =>{
const {name,value} = e.target;

this.setState({
...this.state,
[name]:value

})
}

onSubmit = (e)=>{
e.preventDefault();

const {ScheduleItemsName,Address,City,Date,Time,ScheduleWeeklyMonthly,DescribeScheduleItemsHear} = this.state;

const data ={
ScheduleItemsName:ScheduleItemsName,
Address:Address,
City:City,
Date:Date,
Time:Time,
ScheduleWeeklyMonthly:ScheduleWeeklyMonthly,
DescribeScheduleItemsHear:DescribeScheduleItemsHear,
}

console.log(data)

axios.post("/post/save",data).then((res)=>{
if(res.data.success){
this.setState(
{
ScheduleItemsName:"",
Address :"",
City:"",
Date:"",
Time :"",
ScheduleWeeklyMonthly:"",
DescribeScheduleItemsHear:""


}

)
}
})

}
render (){
return(



<div className="col-md-8 mt-4 mx-auto">
<h1 className="h3 mb-3 font-weight-normal">Add Reccuring Oders</h1>
<form className="needs-validation" noValidate/> 

<div className="form-group" style={{marginBotton: '15px'}}>
<label for="floatingInputValue">Schedule Items Name</label>
<input type="text"
className="form-control"
name="ScheduleItemsName"
placeholder="Enter Schedule Items Name"
value = {this.state.ScheduleItemsName}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBotton: '15px'}}>
<label style={{marginBotton: '5px'}}>Address</label>
<input type="text"
className="form-control"
name="Address"
placeholder="EX : 232/1C , Kotikawatta"
value={this.state.Address} 
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBotton: '15px'}}>
<label style = {{marginBotton:'5px' }}>City</label>
<input type="text"
className="form-control"
name="City"
placeholder="EX : Panadura"
value={this.state.City} 
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBotton: '15px'}}>
<label style = {{marginBotton:'5px' }}>Date</label>
<input type="text"
className="form-control"
name="Date"
placeholder="EX :2020/09/21"
value={this.state.Date} 
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBotton: '15px'}}>
<label style = {{marginBotton:'5px' }}>Time</label>
<input type="text"
className="form-control"
name="Time"
placeholder="EX : 09.20:PM "
value={this.state.Time} 
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBotton: '15px'}}>
<label style = {{marginBotton:'5px' }}>Schedule Weekly / Monthly(Please use only one method)</label>
<input type="text"
className="form-control"
name="ScheduleWeeklyMonthly"
placeholder="EX : Weekly"
value={this.state.ScheduleWeeklyMonthly} 
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBotton: '15px'}}>
<label style = {{marginBotton:'10px' }}>Describe Schedule Items Hear </label>
<textarea rows="5" type="text"
className="form-control"
name="DescribeScheduleItemsHear"
placeholder="EX = 1.Potato 1kg,2.Banana"
value={this.state.DescribeScheduleItemsHear} 
onChange={this.handleInputChange}/>
</div>


<button className="btn btn-outline-primary" type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}> 
<i className="far fa-check-square"></i>

&nbsp; Add schedule list

</button>



</div>

);
}
}
