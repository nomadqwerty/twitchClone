const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_STREAM":
      const id = action.payload.id;
      const newState = { ...state, id: action.payload };
      return newState;
    default:
      return state;
  }
};
