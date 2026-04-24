import RestourantCard from "./RestourantCard";
import { SwiggyResData } from "../../utils/mockData";

const Body = () => {
  return (
    <div className="bg-amber-200 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SwiggyResData.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
          (data, index) => (
            <RestourantCard item={data} key={index} />
          ),
        )}
      </div>
    </div>
  );
};

export default Body;
