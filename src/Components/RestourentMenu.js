import { useParams } from "react-router";
import useGetDataInfo from "../../utils/useGetDataInfo";

const RestaurantMenu = () => {
  const { menuId } = useParams();
  const data = useGetDataInfo(menuId);

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
      <h1>Const for Two : {costForTwo}</h1>
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
