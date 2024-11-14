import { useLoaderData } from "react-router-dom";
import Fooditem from "../Fooditem/Fooditem";
import './Fooditems.css'
const Fooditems = () => {
    const fooditems=useLoaderData();
    return (
        <div>
            <h3>Total Food items:{fooditems.length}</h3>
            <div className="itemsstyle">
                {
                    fooditems.map(fooditem=><Fooditem key={fooditem.id} fooditem={fooditem}></Fooditem>)
}
            </div>
        </div>
        
    );
};

export default Fooditems;