
import resList from '../utils/mockdata';
import RestaurantCard from './RestaurantCard';

const Body = () => {
    return (
        <>
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => ( // Fixing the variable name to restaurant
                    <RestaurantCard key={restaurant.id} resData={restaurant} /> // Using a unique identifier directly for key
                ))}
            </div>
        </>
    );
};

export default Body;
