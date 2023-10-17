import Card from "./Card";
import data from "../data/data.json";

function CardList({data}){
    return (
        <main className="cardList">
            {data.map(article => 
                <Card key={article.id} article={article}/>
            )}
        </main>
    )
}

export default CardList