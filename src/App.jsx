import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox.jsx";
import AddFoodForm from "./components/AddFoodForm.jsx";


function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = foodId => {
    const filteredFoods = foods.filter(oneFood => 
     oneFood.id !== foodId)
     setFoods(filteredFoods)
  } 

  const  addNewFood = (newFood) => {
    setFoods([newFood, ...foods])

    console.log("addNewFood")
  }
   
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood}/>
      <FoodBox foods={foods} deleteFood={deleteFood} />
          </div>
  ) 
    }

export default App;
