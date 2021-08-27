import axios from "../../helpers/axios";
import { authConstants } from "../constants";

export const logout = () => {
  return async (dispatch) => {
    // dispatch({ type: authConstants.LOGOUT_REQUEST });
    // const res = await axios.post(`/admin/signout`);
    // console.log("Logout",res)
    // if (res.status === 200) {
    //   localStorage.clear();
    //   dispatch({ type: authConstants.LOGOUT_SUCCESS });
    // } else {
    //   dispatch({
    //     type: authConstants.LOGOUT_FAILURE,
    //     payload: res.data.error,
    //   });
    // }

    localStorage.clear();
    dispatch({ type: authConstants.LOGOUT_SUCCESS });
  };
};