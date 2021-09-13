import React from "react";
//import Menu from "./Menu"; //also i used munu here

const Layout = ({title = "Title", description = "Description", className, children}) => (
   <div>
      {/*} <Menu />{*/}
        <div className="jumbotron">
        <h2 style={{textAlign: "center",fontSize: "40px"}}>{title}</h2>
        <p className="lead">{description}</p>

    </div>
    <div className={className}>{children}</div>
   </div>
);


export default Layout;