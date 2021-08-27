
import axios from "../../helpers/axios";
import { authConstants } from "../constants";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.REGISTER_REQUEST,
    });
    const res = await axios.post(`/api/auth/signup`, {
      ...user,
    });

    if (res.status === 201) {
      // dispatch(getListAdmin());
      const { message } = res.data;
      dispatch({
        type: authConstants.REGISTER_SUCCESS,
        payload: { message },
      });
      
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};