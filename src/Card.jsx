import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

function Card(props){
return (
  <div className="container-card"> 
    <div className="header">
    <Detail detail={props.id} />
    <p> </p>
      <h2>{props.name}</h2>
      <Avatar image={props.image}/>
    </div>
    <div className="footer">
    <Detail detail={props.tel} />
    <Detail detail={props.email} />  
    </div>
  </div>
)}

export default Card