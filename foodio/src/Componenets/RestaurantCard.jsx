import resList from "../utils/mockdata";


const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, avgRating, cuisines, costForTwo, deliveryTime, cloudinaryImageId } = resData?.data; // Removed optional chaining

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4>{{cuisines}.join(", ")}</h4> {/* Added a space after comma for cuisines */}
            <h4>{avgRating} stars</h4> 
            <h4>{costForTwo / 100} FOR TWO</h4> 
            <h4>{deliveryTime} minutes</h4> 
        </div>
    );
};

export default RestaurantCard;
