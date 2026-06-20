import { useEffect, useState } from "react";

import FoodCard from "../components/FoodCard";

import { getFoods } from "../services/foodService";

function Foods() {

  const [foods, setFoods] =
    useState([]);

  useEffect(() => {

    getFoods().then((res) => {
      setFoods(res.data);
    });

  }, []);

  return (

    <div className="grid md:grid-cols-4 gap-6">

      {foods.map((food: any) => (

        <FoodCard
          key={food.id}
          food={food}
        />

      ))}

    </div>

  );
}

export default Foods;