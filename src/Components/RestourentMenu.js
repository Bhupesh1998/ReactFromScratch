import { useEffect, useState } from "react";
import { MenuMockData } from "../../utils/mockData";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { menuId } = useParams();

  const [data, setData] = useState(null);
  const getMenuAPI = async () => {
    const getData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=" +
        menuId,
    );
  };

  useEffect(() => {
    getMenuAPI();
    const Datas = MenuMockData;
    setData(Datas);
  }, []);

  if (data == null) {
    return <h1>Loading...</h1>;
  }

  const { name, locality, costForTwo, cuisines } =
    data.data.cards[2].card.card.info;

  const { itemCards } =
    data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>City and Locality : {locality}</h1>
      <h1>COnst for Two : {costForTwo / 100} Rs.</h1>
      <h1>cuisines : {cuisines.join(", ")}</h1>
      <div>
        <hr />
        item list is :
        {itemCards.map((d) => {
          return <div key={d.card.info.id}>{d.card.info.name}</div>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
