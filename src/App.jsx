import React from "react";
// import Header from "./Header";
// import List from "./List";
// import Salutation from "./Salutation";
import contacts from './contact';
import Card from './Card';

function App() {
  return (
    <div>    
    
    {contacts.map(contact=>{
      return(
      <Card 
        id={contact.id}
        name={contact.name}
        tel={contact.tel}
        image={contact.image}
        email={contact.email}
        />
      )})
    }    
    </div>

  );
}
export default App;
