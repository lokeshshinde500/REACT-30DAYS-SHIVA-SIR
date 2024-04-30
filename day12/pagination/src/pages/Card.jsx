function Card({id,title}) {

    return (
        <div style={{ border:'1px solid black' , margin:"10px", padding:'10px'}} >
            <p>{id}</p>
            <h2>{title}</h2>
        </div>
    )    
}

export default Card;