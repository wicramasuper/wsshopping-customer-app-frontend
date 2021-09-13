import React,{Component} from 'react';
import axios from 'axios'

export default class EditR extends Component {
    
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
        const id = this.props.match.params.id;

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
        
        axios.put(`/post/update/${id}`,data).then((res)=>{
        alert("Reccuring Oder Updated successfully")
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
    
componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res)=>{
    if(res.data.success){
    this.setState({
    ScheduleItemsName:res.data.post.ScheduleItemsName,
    Address:res.data.post.Address,
    City:res.data.post.City,
    Date:res.data.post.Date,
    Time:res.data.post.Time,
    ScheduleWeeklyMonthly:res.data.post.ScheduleWeeklyMonthly,
    DescribeScheduleItemsHear:res.data.post.DescribeScheduleItemsHear
    });
   
    
    }
    });
    }
    
    
    
    render (){
        return(
        
        
        
        <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Update Reccuring Oders</h1>
        <form className="needs-validation" noValidate/> 
        <div className="form-group" style={{marginBotton: '15px'}}>
        <label style={{marginBotton: '5px'}} >Schedule Items Name</label>
        <input type="text"
        className="form-control"
        name="ScheduleItemsName"
        placeholder="Enter ScheduleItemsName"
        value = {this.state.ScheduleItemsName}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBotton: '15px'}}>
        <label style={{marginBotton: '5px'}}>Address</label>
        <input type="text"
        className="form-control"
        name="Address"
        placeholder="Enter Desciption"
        value={this.state.Address} 
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBotton: '15px'}}>
        <label style = {{marginBotton:'5px' }}>City</label>
        <input type="text"
        className="form-control"
        name="City"
        placeholder="Enter City"
        value={this.state.City} 
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBotton: '15px'}}>
        <label style = {{marginBotton:'5px' }}>Date</label>
        <input type="text"
        className="form-control"
        name="Date"
        placeholder="Enter Date"
        value={this.state.Date} 
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBotton: '15px'}}>
        <label style = {{marginBotton:'5px' }}>Time</label>
        <input type="text"
        className="form-control"
        name="Time"
        placeholder="Enter Time"
        value={this.state.Time} 
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBotton: '15px'}}>
        <label style = {{marginBotton:'5px' }}>Schedule Weekly / Monthly</label>
        <input type="text"
        className="form-control"
        name="ScheduleWeeklyMonthly"
        placeholder="Enter Weekly/Monthly"
        value={this.state.ScheduleWeeklyMonthly} 
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBotton: '15px'}}>
        <label style = {{marginBotton:'10px' }}>Describe Schedule Items Hear</label>
        <textarea rows="5" type="text"
        className="form-control"
        name="DescribeScheduleItemsHear"
        placeholder="Describe Schedule Items Hear"
        value={this.state.DescribeScheduleItemsHear} 
        onChange={this.handleInputChange}/>
        </div>
        
        
        <button className="btn btn-success" type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}> 
        <i className="far fa-check-square"></i>
        
        &nbsp; Update
        
        </button>
        
        
        
        </div>
        
        );
        }
    }