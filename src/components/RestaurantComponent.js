import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const RestaurantComponent = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="res-top-container">
      <div className="filter-btn-container">
        <button
          className="filter-btn btn btn-primary"
          type="button"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantComponent;
