import React,{Component} from 'react';
import axios from 'axios';

export default class DetailsR extends Component {
constructor(props){
super(props);

this.state={
post:{}
};

}

componentDidMount(){
const id = this.props.match.params.id;
axios.get(`/post/${id}`).then((res)=>{
if(res.data.success){
this.setState({
post:res.data.post
});
console.log(this.state.post);

}
});
}

render(){
const {ScheduleItemsName,Address,City,Date,Time,ScheduleWeeklyMonthly,DescribeScheduleItemsHear} = this.state.post;
return(
    <div style = {{marginTop:'20px'}}>
    

     <dl className="row">
     <dt className = "col-sm-3">Reccuring oder Name:-</dt>
    <dd className = "col-sm-9">{ScheduleItemsName}</dd>
    <dt className = "col-sm-3">Address:-</dt>
    <dd className = "col-sm-9">{Address}</dd>
    <dt className = "col-sm-3">City:-</dt>
    <dd className = "col-sm-9">{City}</dd>
    <dt className = "col-sm-3">Date:-</dt>
    <dd className = "col-sm-9">{Date}</dd>
    <dt className = "col-sm-3">Time:-</dt>
    <dd className = "col-sm-9">{Time}</dd>
    <dt className = "col-sm-3">Schedule Weekly / Monthly:-</dt>
    <dd className = "col-sm-9">{ScheduleWeeklyMonthly}</dd>
    <dt className = "col-sm-3">Schedule Items :-</dt>
    <dd className = "col-sm-9">{DescribeScheduleItemsHear}</dd>

</dl>
</div>




)
}
}