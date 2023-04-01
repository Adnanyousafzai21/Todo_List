import React, { useState } from "react";
import './App'

const App = () => {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);
  const [isedit, setisedit]=useState()
  const [edit, setEdit] = useState(false);

  const alldata = { name: data, id: new Date().getTime().toString() };
  const add = () => {
    setEdit(false);
    if (!data) {  }
     else if (data && edit===true) {
        setItem(
          item.map((val) => {
        if (val.id === isedit) {
          return { ...val, name: data };
        }
        return val
      }))
      
    }
     else {
      setItem([...item, alldata]);
    }
    setData("");
  };
  const output = (e) => {
    setData(e.target.value);
  };
  const delt = (id) => {
    const updated = item.filter((elm) => {
      return elm.id !== id;
    });
    setItem(updated);
  };
  const Edit = (id) => {
    setEdit(true);
    
    const Edit = item.find((elm) => {
      return elm.id === id;
    });
    setData(Edit.name);
    setisedit(id)
  };
  const Clear =()=>{
    setItem([])
  }
  const [clear, setClear]=useState(false)

  return (
    <div className="container">
      <div className="todo">
        <div style={{ textAlign: "center", fontSize: "50px" }}>📝</div>
        <h4 className="todo_title">Add your list here.</h4>
        <div className="write">
          <input
            type="text"
            className="input"
            placeholder="✍️ Add item..."
            onChange={output}
            value={data}
          />
          <span onClick={add}>
            {edit ? (
              <i className="fa fa-edit"></i>
            ) : (
              <i className="fa fa-plus"></i>
            )}
          </span>
        </div>
        <ul className="list">
          {item.map((val) => {
            return (
              <li className="list_item" key={val.id}>
                <span>{val.name}</span>
                <span className="icons">
                  <i className="fa fa-edit" onClick={() => Edit(val.id)}></i>{" "}
                  <i className="fa fa-trash" onClick={() => delt(val.id)}></i>
                </span>
              </li>
            );
          })}
        </ul>
       { clear?<div className="clear">
          <button onClick={Clear}>Clear All</button>
        </div>:""}
      </div>
    </div>
  );
};

export default App;
