import React from "react";

const Card= (props) =>  
{
const {image,title,text}=props;
    
return(
<div className="col-md-3 col-12 p-3">
<div className="card">
  <div className="card-body">
  <img src={props.image} className="card-img-top" alt="..."/>
    <h5 className="card-title fs-3">{props.title}</h5>
    <p className="card-text fs-5">{props.text}</p>
    <a href="#" className="btn btn-primary">Find Out more</a>
  </div>
</div>
</div>
)


}

export default Card;