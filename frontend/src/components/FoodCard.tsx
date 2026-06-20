import type { Food } from "../types/food";

interface Props {
  food: Food;
}

function FoodCard({ food }: Props) {
  return (
    <div className="bg-white rounded-xl shadow">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">

        <h2 className="font-bold">
          {food.name}
        </h2>

        <p>
          {food.category}
        </p>

        <p>
          ${food.price}
        </p>

      </div>

    </div>
  );
}

export default FoodCard;