import { useEffect, useState } from "react";
import { MenuMockData } from "./mockData";

const useGetDataInfo = (menuId) => {
  const [datas, setData] = useState(null);

  const callMenuListAPI = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=" +
        menuId,
    );
    // const data = await fetchData.json();
    // setData(data); // this if we have correct data
    setData(MenuMockData); // for just working i used this moke data
  };

  useEffect(() => {
    callMenuListAPI();
  }, []);

  return datas;
};

export default useGetDataInfo;
