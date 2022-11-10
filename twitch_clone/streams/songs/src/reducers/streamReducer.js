import _ from "lodash";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };

    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };

    case "DELETE_STREAM":
      return _.omit(state, action.payload);

    case "FETCH_STREAMS":
      const streamObj = _.mapKeys(action.payload, "id");
      return { ...state, ...streamObj };

    default:
      return state;
  }
};

export default streamReducer;
