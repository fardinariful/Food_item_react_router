import './Fooditem.css'
const Fooditem = ({fooditem}) => {
    const {strCategory,strCategoryThumb,strCategoryDescription}=fooditem;
    return (
        <div className="itemstyle">
            <img src={strCategoryThumb} alt="" />
            <h3>{strCategory}</h3>
            <h3>{strCategoryDescription}</h3>
        </div>
    );
};

export default Fooditem;