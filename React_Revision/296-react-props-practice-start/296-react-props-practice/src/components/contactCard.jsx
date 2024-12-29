import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = (p) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <p>{p.id}</p>
          <h2 className="name">{p.name}</h2>
          <Avatar
            src={p.src}
          />
        </div>
        <Detail 
          phone={p.phone}
          email={p.email}
        />
      </div>
    </>
  );
};


export default Card;