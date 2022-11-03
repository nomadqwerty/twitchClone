import { streamCreate } from "../api/streamsAxios";

// auth
export const signIn = (id) => {
  return {
    type: "SIGN_IN",
    payload: {
      userId: id,
    },
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

// streams
export const createStreamAction = (valueObj) => {
  return async (dispatch) => {
    const res = await streamCreate.post("/streams", valueObj);

    dispatch({
      type: "CREATE_STREAM",
      payload: res.data,
    });
  };
};
