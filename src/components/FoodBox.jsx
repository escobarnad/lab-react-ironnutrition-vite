const FoodBox = (props) => {


    return (<div>
        {props.foods.map(oneFood => {
            return (
                (<div key = {oneFood.id}>
                    <p>{oneFood.name}</p>
                    <img src={oneFood.image} style={{ height: "100px" }} />
                    <p>Calories: {oneFood.calories}</p>
                    <p>Servings: {oneFood.servings}</p>
                    <p>
                        <b>Total Calories: {oneFood.servings * oneFood.calories}</b> kcal
                    </p>
                    <button onClick={()=>props.deleteFood(oneFood.id)}>Delete</button>
                </div>)

            )
        })
        }
    </div>
    );
}

export default FoodBox;