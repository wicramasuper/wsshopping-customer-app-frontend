import React,{Component} from 'react';
import axios from 'axios';

export default class HomeR extends Component {
constructor(props){
super(props);

this.state={
posts:[]  

};

} 

componentDidMount(){
this.retrievePosts();  
}


retrievePosts(){
axios.get('/posts').then(res=>{
if(res.data.success){
this.setState({
posts:res.data.existingPosts
});
console.log(this.state.posts);
}
});

}

onDelete = (id)=>{
axios.delete(  `/post/delete/${id}`).then((res)=>{
alert("Updated Successfully");
this.retrievePosts();
})
}


render(){
return (
<div className="container">
<p></p>
<table class ="table">
<thead>
<tr>
<th scope= "col"></th>
<th scope= "col">Reccuring Oder Names</th>
<th scope= "col">Address</th>
<th scope= "col">Date</th>
<th scope= "col">Time</th>
<th scope= "col">Schedule Weekly/Monthly</th>
<th scope= "col"></th>
</tr>
</thead>
<tbody>
{this.state.posts.map((posts,index)=>(
<tr key= {index}>
<th scope="row">{index+1}</th>

<td>
<a href={`/post/${posts._id}`}style = {{textDecoration:'none'}}> 
 {posts.ScheduleItemsName}
</a>
</td>

<td>{posts.Address}</td>
<td>{posts.Date}</td>
<td>{posts.Time}</td>
<td>{posts.ScheduleWeeklyMonthly}</td>

<td>
<a className ="btn btn-outline-primary"href={`/edit/${posts._id}`}>
<i className = "fas fa-edit"></i>&nbsp;Edit
</a>
&nbsp;
<a className ="btn btn-outline-danger"href="#"onClick={()=>this.onDelete(posts._id)}>
<i className = "far fa-trash-alt"></i>&nbsp;Delete
</a>
</td>
</tr>

))}




</tbody>
</table>

<button className = "btn btn-outline-success"><a href="/add" style = {{textDecoration:'none',color:'black'}}>Create Reccuring Oders</a></button>






</div>
)
}

}

