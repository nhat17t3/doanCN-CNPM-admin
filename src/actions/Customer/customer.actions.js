import axios from "../../helpers/axios";
import { customerConstants } from "../constants";

export const getListCustomer = () => {
  return async (dispatch) => {
    dispatch({ type: customerConstants.GET_ALL_CUSTOMER_REQUEST });
    const res = await axios.get(`/admin/user`);
    
    if (res.status === 200) {
      const { users } = res.data;
      dispatch({
        type: customerConstants.GET_ALL_CUSTOMER_SUCCESS,
        payload: {
          listCustomer: users,
        },
      });
    } else {
      dispatch({
        type: customerConstants.GET_ALL_CUSTOMER_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};


export const addCustomer = (form) => {
  return async (dispatch) => {
    dispatch({
      type: customerConstants.ADD_CUSTOMER_REQUEST,
    });
    const res = await axios.post(`/api/auth/signup`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: customerConstants.ADD_CUSTOMER_SUCCESS,
        payload: { message },
      });
      dispatch(getListCustomer());

    } else {
      if (res.status === 400) {
        dispatch({
          type: customerConstants.ADD_CUSTOMER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
export const deleteCustomer = (form) => {
  return async (dispatch) => {
    dispatch({ type: customerConstants.DELETE_CUSTOMER_REQUEST });
    const res = await axios.delete(`/admin/user/${form.id}`);
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: customerConstants.DELETE_CUSTOMER_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListCustomer());


    } else {
      const { error } = res.data;
      dispatch({
        type: customerConstants.DELETE_CUSTOMER_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};

export const updateCustomer = (form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: customerConstants.UPDATE_CUSTOMER_REQUEST });
    const res = await axios.put(`/admin/user/${form.id}`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: customerConstants.UPDATE_CUSTOMER_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListCustomer());

    } else {
      const { error } = res.data;
      dispatch({
        type: customerConstants.UPDATE_CUSTOMER_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};