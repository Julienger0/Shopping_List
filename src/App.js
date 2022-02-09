import React, { useState, useEffect } from "react";
import List from './List'
import Alert from './Alert'
function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      //alert
    }
    else if (name && isEditing) {
      //deal with edit
    }
    else {
      //show alert
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem]);
      setName('')
    }
  }
  return (
    // il faut centrer la div
    <div className="container">
      <form className="" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Shopping List</h3>
        <div className="submit">
          <input type="text" placeholder="Enter a Product" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="btn" ></button>
          {isEditing ? 'edit' : 'submit'}
        </div>
      </form>
      {list.length > 0 && (
        <div className="">
          <List items={list} />
          <button className="btn">Clear Items</button>
        </div>

      )}

    </div>
  );
}

export default App;
