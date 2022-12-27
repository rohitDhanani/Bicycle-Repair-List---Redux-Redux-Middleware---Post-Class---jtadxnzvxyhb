/*
Here all the actions are defined.
Example of defining an actoin is as follows

export const repairAdded = (var1,va2) => {
  return {
    type: "actionType1",
    payload: {
      var1,
      var2
    }
  }
}

*/

export const repairAdded = payload => ({
  type: 'repairAdded',
  payload
});

export const repairRemoved = payload => ({
  type: 'repairRemoved',
  payload
});

export const repairResolved = payload => ({
  type: 'repairResolved',
  payload
});

export const repairUpdated = payload => ({
  type: 'repairUpdated',
  payload
});

export const editTask = payload => ({
  type: 'editTask',
  payload
});