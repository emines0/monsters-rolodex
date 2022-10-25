
import Card from "../card/card.component";
import './card-list.css';

const CardList = ({monsters}) => ( //implicite return 

    <div className="card-list">
        {
            monsters.map((monster) => {
                return (
                    <Card key={monster.id} monster={monster}/>
                )
            })
        }   
    </div>
)
export default CardList;