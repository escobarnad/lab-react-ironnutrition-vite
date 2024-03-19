import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Divider, Input, Button } from "antd";

function AddFoodForm({ foods, setFoods }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
      id: uuidv4(),
    };
    console.log(newFood);
    setFoods([newFood, ...foods]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label>
        Name
        <Input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <label>
        Image URL
        <Input
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
      </label>
      <label>
        Calories
        <Input
          value={calories}
          onChange={(event) => {
            setCalories(event.target.value);
          }}
        />
      </label>
      <label>
        Servings
        <Input
          value={servings}
          onChange={(event) => {
            setServings(event.target.value);
          }}
        />
      </label>
      <Button type="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
