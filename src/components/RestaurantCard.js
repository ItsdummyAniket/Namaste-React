import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    deliveryTime,
  } = props?.resData?.data;
  return (
    <div className="res-card-container">
      <div className="res-card-img">
        <img src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{avgRating} STAR</h4>
      <h4>{deliveryTime} MINS</h4>
    </div>
  );
};

export default RestaurantCard;
