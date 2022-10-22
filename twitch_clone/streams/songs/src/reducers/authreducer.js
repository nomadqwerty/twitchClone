const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { isSignedIn: true, userId: action.payload.userId };
    case "SIGN_OUT":
      return { isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;
