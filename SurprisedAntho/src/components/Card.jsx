/* eslint-disable react/prop-types */
function Card({article}){
    return(
         <div className="card">
            <img className="plantImg" src={article.image} alt={article.title} />
            <h2 className="plantName">{article.title}</h2>
            <p className="plantDescription">{article.description}</p>
            <div className="containerprice">
                <p className="prix">Prix : {article.price}</p>
                <img className="cartImg" src={article.addCart} alt="AddCart" />
            </div>
        </div>
    )
}

export default Card