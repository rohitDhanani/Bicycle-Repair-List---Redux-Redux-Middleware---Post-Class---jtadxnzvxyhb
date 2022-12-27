import React, {Component, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import '../styles/App.css';
import { repairAdded, repairRemoved, repairResolved, repairUpdated, editTask } from '../actions';


const App = () => {
  // return (
  //   <div id="main"></div>
  // )
  const [owner, setOwner] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const items = useSelector(state => state.bicycle.items);
  const { editMode } = useSelector(state => state.bicycle);
  const dispatch = useDispatch();

  const handleAddRepair = repair => {
    dispatch(repairAdded(repair));
  };

  const handleRemoveRepair = id => {
    dispatch(repairRemoved({ id }));
  };

  const handleResolveRepair = id => {
    dispatch(repairResolved({ id }));
  };

  const handleUpdateRepair = repair => {
    dispatch(repairUpdated(repair));
  };

  const handleEditRepair = item => {
    dispatch(editTask(item));
  };

  return (
    <div id="main">
      <h1>Bicycle Repair App</h1>
      <form
        onSubmit={e => {
          e.preventDefault();


          if(editMode){
            handleUpdateRepair({ owner, model, description });

          }else{

            handleAddRepair({ owner, model, description });
          }




          setOwner('');
          setModel('');
          setDescription('');
        }}
      >
        <label htmlFor="owner-text-box">Owner:</label>
        <input
          type="text"
          id="owner-text-box"
          name="owner"
          value={owner}
          onChange={e => setOwner(e.target.value)}
        />
        <br />
        <label htmlFor="model-text-box">Model:</label>
        <input
          type="text"
          id="model-text-box"
          name="model"
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <br />
        <label htmlFor="description-text-box">Description:</label>
        <input
          type="text"
          id="description-text-box"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">+</button>
    </form>
    <div>
      {items.map(item => (
        <li key={item.id} className="repair-item">
          {item.owner} - {item.model} - {item.description}
          <button onClick={() => handleEditRepair(item)}>Update</button>
          <button onClick={() => handleRemoveRepair(item.id)}>Delete</button>
          <button onClick={() => handleResolveRepair(item.id)}>
            {item.resolved ? 'Undo' : 'Done'}
          </button>
        </li>
      ))}
    </div>
  </div>
  );
};








export default App;
