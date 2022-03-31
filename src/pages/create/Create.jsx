import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";
import "./Create.css";

export default function Create() {
  const [ipAddress, setIpAddress] = useState("");
  const [building, setBuilding] = useState("");
  const [dateUpdated, setDateUpdated] = useState("");
  const [department, setDepartment] = useState("");
  const [macAddress, setMacAddress] = useState("");
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [serial, setSerial] = useState("");
  const ingredientInput = useRef(null);
  const history = useHistory();

  const { mode, color } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const printer = {
      id: ipAddress,
      building,
      dateUpdated,
      department,
      macAddress,
      model,
      name,
      room,
      serial,
    };
    try {
      await db.collection("recipes").add(recipe);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmedIngredient = newIngredient.trim();

    if (trimmedIngredient && !ingredients.includes(trimmedIngredient)) {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        trimmedIngredient,
      ]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Add a Printer</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setIpaddress(e.target.value)}
            value={ipaddress}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button
              onClick={handleAdd}
              className="btn"
              style={{ backgroundColor: color }}>
              Add
            </button>
          </div>
        </label>
        <p>
          Added:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button
          className="btn"
          style={{ backgroundColor: color }}
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
