import { useState } from 'react'
import {v4 as uuidv4} from 'uuid' 

const AddFoodForm = (props) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleSubmit = event => {
        event.preventDefault()
        const newFood = {name, image, calories, servings, id: uuidv4()}
        props.addNewFood(newFood)

        setTimeout(() => {
            setName('')
            setImage('')
            setCalories(0)
            setServings(0)
          }, 250)
    }
        return (
    <form onSubmit={handleSubmit}>
        <label>
            Name
            <input
                value={name}
                onChange={event => {
                    console.log(event)
                    setName(event.target.value)
                }}
            />
        </label><br/>
        <label>
            Image
            <input
                value={image}
                onChange={event => {
                    console.log(event)
                    setImage(event.target.value)
                }}
            />
        </label><br/>
        <label>
            Calories
            <input
                value={calories}
                onChange={event => {
                    console.log(event)
                    setCalories(event.target.value)
                }}
            />
        </label><br/>
        <label>
            Servings
            <input value={servings} onChange={event => setServings(event.target.value)} />
        </label><br/>
        <button type='submit' >Create</button>
    </form>
        )
}

export default AddFoodForm;