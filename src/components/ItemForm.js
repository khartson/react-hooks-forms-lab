import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ items, onItemFormSubmit }) {
  console.log('in itemForm', items);
  const [newItem, setNewItem] = useState({name: '', category: 'Produce'});

  function handleChange(e) {
    console.log(e.target.value);
    console.log(e.target.name);
    let key = e.target.name; 
    let value = e.target.value;
    setNewItem({
      ...newItem,
      [key]: value,
    })
  }
  return (
    <form className="NewItem" onSubmit={(e) => {
      e.preventDefault();
      onItemFormSubmit({...newItem, id: uuid()}); 
    }}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={newItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
