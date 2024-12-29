const Card = (p)=>{
    return (
        
        <div className="term">
          <dt>
            <p>{p.id}</p>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {p.emoji}
            </span>
            <span>{p.name}</span>
          </dt>  
          <dd>
            {p.meaning}
          </dd>
        </div>
        
    )
}
export default Card;