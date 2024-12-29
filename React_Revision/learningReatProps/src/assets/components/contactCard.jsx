const Card = (props) =>{
    return (
        <>
            <div className="card">
                <h2>{props.name}</h2>
                <img 
                src={props.src}
                />
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
        </>
    )
}

export default Card;