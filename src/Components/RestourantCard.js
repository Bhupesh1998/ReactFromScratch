import { CDN_URL } from "../../utils/constants";

const RestourantCard = ({ item }) =>{
    return (
        <div className="bg-amber-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <img
                className="w-full h-40 object-cover"
                src={CDN_URL + item.info.cloudinaryImageId}
                alt={item.info.cloudinaryImageId}
              />
        
              <div className="p-3 text-white">
                <h1 className="font-bold text-lg">{item.info.name}</h1>
                <p>{item.info.cuisines.join(", ")}</p>
                <p>{item.info.costForTwo}</p>
                <p>{item.info.avgRating}</p>
              </div>
            </div>
    )
}

export default RestourantCard;