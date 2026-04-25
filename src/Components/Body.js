import RestourantCard from "./RestourantCard";
import { SwiggyResData } from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [datas, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filterData, setFilterData] = useState([]);

  const CallFilterFunction = () => {
    let filterDasta = datas.filter((d) => {
      return d.info.avgRating > 4.5;
    });
    setData(filterDasta);
  };

  const fetcAPI = async () => {
    const fetchData = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    const convertinJson = await fetchData.json();
    const mappedData = convertinJson.data.cards
      .map((d) => {
        return d.card.card.info;
      })
      .filter(Boolean);
    setData(mappedData);
    setFilterData(mappedData);
  };

  useEffect(() => {
    fetcAPI();
  }, []);

  if (datas.length === 0) {
    return <Shimmer />;
  }

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    const filter = datas.filter((d) => {
      return d.name.toLowerCase().includes(inputVal.toLowerCase());
    });
    setFilterData(filter);
  };

  return (
    <>
      <div className="flex">
        <div className=" flex items-center justify-center bg-amber-300 align-middle gap-3.5">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={inputVal}
            placeholder="Search item"
            className="p-2 border rounded"
          />
          <button
            onClick={handleClick}
            className="border-2 cursor-pointer px-4 mr-3.5  rounded-b-sm"
          >
            Search
          </button>
        </div>
        <button
          onClick={CallFilterFunction}
          className="p-3.5 border-8 cursor-pointer"
          type="button"
        >
          Press to filter the list
        </button>
      </div>
      <div className="bg-amber-200 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterData.map((data, index) => (
            <RestourantCard item={data} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
