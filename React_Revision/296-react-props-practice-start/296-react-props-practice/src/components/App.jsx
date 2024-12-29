import Card from "./contactCard";
import contacts from "../contacts"
import Avatar from "./Avatar";

function createCard(contact){
  return( <Card 
    id={contact.id}
    key={contact.id}
    name={contact.name}
    src={contact.src}
    phone={contact.phone}
    email={contact.email}
  />
)}


const  App= () =>{
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
       src="pic2.jpg" 
      />
      {/* we can use map array of json file mapping rather than just trying to create diffrent card */}
      {contacts.map(createCard)}
      {/* <Card 
        name={contacts[0].name}
        src={contacts[0].src}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        src={contacts[1].src}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        src={contacts[2].src}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}

    </div>
  );
}

export default App;
