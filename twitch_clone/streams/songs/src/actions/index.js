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

export const fetchStreamAction = (id = "") => {
  let res;
  return async (dispatch) => {
    if (id.length > 0) {
      res = await streamCreate.get(`/streams/:${id}`);
    } else {
      res = await streamCreate.get("/streams");
    }

    dispatch({
      type: "FETCH_STREAM",
      payloads: res.data,
    });
  };
};

export const editStreamAction = (valueObj, id) => {
  return async (dispatch) => {
    const res = await streamCreate.put(`/streams:${id}`, valueObj);

    dispatch({
      type: "EDIT_STREAM",
      payload: res.data,
    });
  };
};

export const deleteStreamAction = (id) => {
  return async (dispatch) => {
    const res = await streamCreate.delete(`/streams:${id}`);

    dispatch({
      type: "DELETE_STREAM",
      payload: id,
    });
  };
};
