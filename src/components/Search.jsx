import { useState } from "react";
import { Input } from "antd";

function Search({ foods, setFoods }) {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchWord(searchValue);

    const filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchValue);
    });

    setFoods(filteredFoods);

    if (foods.length === 0) {
    }
  };

  return (
    <form>
      <label>
        Search
        <Input type="text" value={searchWord} onChange={handleChange} />
        {foods.length === 0 ? (
          <h4>Oops! There is no more content to show.</h4>
        ) : (
          ""
        )}
      </label>
    </form>
  );
}

export default Search;
