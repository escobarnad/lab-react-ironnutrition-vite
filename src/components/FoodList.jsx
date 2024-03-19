import { useState } from "react";
import foodsJSON from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJSON);
  return (
    <>
      <div>
        <AddFoodForm foods={foods} setFoods={setFoods} />
      </div>
      <div>
        <Search foods={foods} setFoods={setFoods} />
      </div>
      {foods.map((food) => {
        return (
          <div key={food.id}>
            <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
                id: food.id,
              }}
              foods={foods}
              setFoods={setFoods}
            />
          </div>
        );
      })}
    </>
  );
}

export default FoodList;
