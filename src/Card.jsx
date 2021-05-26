import React from 'react';

function Card(pro){
return <div> 
  <h1>My Contact </h1>
  <p>{pro.name}</p>
  <img src={pro.img} alt="Img"/>
  <p>{pro.tel} </p>
  <p>{pro.email} </p>
</div>
}

export default Card