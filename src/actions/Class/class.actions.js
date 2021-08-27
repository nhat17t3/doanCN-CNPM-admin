import axios from "../../helpers/axios";
import { classConstants } from "../constants";


export const getListClassRequestOpen = () => {
  return async (dispatch) => {
    dispatch({ type: classConstants.GET_ALL_CLASS_REQUEST_OPEN_REQUEST });
    const res = await axios.get(`/admin/post/candidate`);
    
    if (res.status === 200) {
      const { acceptions } = res.data;
      dispatch({
        type: classConstants.GET_ALL_CLASS_REQUEST_OPEN_SUCCESS,
        payload: {
          listClassRequestOpen: acceptions,
        },
      });
    } else {
      dispatch({
        type: classConstants.GET_ALL_CLASS_REQUEST_OPEN_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};


export const acceptOpenClass = (form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: classConstants.ACCEPT_CLASS_OPEN_REQUEST });
    const res = await axios.put(`/admin/candidate`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: classConstants.ACCEPT_CLASS_OPEN_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListClassRequestOpen());
    } else {
      const { error } = res.data;
      dispatch({
        type: classConstants.ACCEPT_CLASS_OPEN_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};

