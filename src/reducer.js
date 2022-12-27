/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:

const reducer = (state = [],action = {}) => {

  switch(action.type){

    case 'actionType1': 
      return changedState1;
    
    case 'actionType2':
      return changedState2;

    default: 
      return state;
    }
  
export default reducer;
*/

import { combineReducers } from "redux";

const initialState={
  items:[],
  item:{ 
         owner: '',
         model: '',
         description: ''
        },
  editMode:false
}

const bicycleReducer=(state=initialState,action)=>{
  switch (action.type) {
    case 'repairAdded':
      return {...state,items:[...state.items,{id: Date.now(),
        owner: action.payload.owner,
        model: action.payload.model,
        description: action.payload.description,
        resolved: false
      }]}
      
      break;
    
      case 'repairRemoved':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        };
      
      break;

      case 'repairResolved':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, resolved: !item.resolved }
              : item
          )
        };
      
      break;
    
      case 'repairUpdated':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? {
                  ...item,
                  owner: action.payload.owner,
                  model: action.payload.model,
                  description: action.payload.description
                }
              : item
          )
        };
      
      break;
  
  
      case 'editTask':
        return {
          ...state,
          item: {
            owner: action.payload.owner,
            model: action.payload.model,
            description: action.payload.description
          },
          editMode: true
        };
      default:
        return state;
    
      
  }
}

const repairList=combineReducers({bicycle: bicycleReducer});
export default repairList;