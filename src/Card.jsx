import React from 'react';

function Card(pro){
return (
  <div className="container-card"> 
    <div className="header">
      <h2>{pro.name}</h2>
      <img className="round-radius" src={pro.img} alt="Img"/>
    </div>
    <div className="footer">
    <p className="info">{pro.tel} </p>
    <p className="info">{pro.email} </p>
    </div>
  </div>
)}

export default Card