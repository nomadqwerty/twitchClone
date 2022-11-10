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
  return async (dispatch, getState) => {
    const { userId } = await getState().authReducer;
    const res = await streamCreate.post("/streams", { ...valueObj, userId });

    dispatch({
      type: "CREATE_STREAM",
      payload: res.data,
    });
  };
};

export const fetchStreamsAction = () => {
  let res;
  return async (dispatch) => {
    res = await streamCreate.get(`/streams`);
    dispatch({
      type: "FETCH_STREAMS",
      payload: res.data,
    });
  };
};

export const fetchStreamAction = (id) => {
  return async (dispatch) => {
    let res = await streamCreate.get(`/streams/:${id}`);

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
