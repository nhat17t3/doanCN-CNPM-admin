import axios from "../../helpers/axios";
import { notifyConstants } from "../constants";

export const getNotifyByAdmin = () => {
  return async (dispatch) => {
    dispatch({ type: notifyConstants.GET_NOTIFY_BY_ADMIN_REQUEST });
    const res = await axios.get(`/api/notifications`);
    
    if (res.status === 200) {
      const { notificatons } = res.data;
      dispatch({
        type: notifyConstants.GET_NOTIFY_BY_ADMIN_SUCCESS,
        payload: {
          listNotifyByAdmin: notificatons,
        },
      });
    } else {
      dispatch({
        type: notifyConstants.GET_NOTIFY_BY_ADMIN_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};


