import RestourantCard from "./RestourantCard";
import { SwiggyResData } from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [datas, setData] = useState(
    SwiggyResData.data.data.cards[1].card.card.gridElements.infoWithStyle
      .restaurants,
  );

  const CallFilterFunction = () => {
    let filterDasta = datas.filter((d) => {
      return d.info.avgRating > 4.5;
    });
    setData(filterDasta);
  };

  return (
    <>
      <button
        onClick={CallFilterFunction}
        className="p-3.5 border-8 cursor-pointer"
        type="button"
      >
        Press to filter the list
      </button>
      <div className="bg-amber-200 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {datas.map((data, index) => (
            <RestourantCard item={data} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
