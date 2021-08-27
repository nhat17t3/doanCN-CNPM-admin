import axios from "../../helpers/axios";
import { postConstants } from "../constants";

export const getListPostCompleted = () => {
  return async (dispatch) => {
    dispatch({ type: postConstants.GET_ALL_POST_COMPLETED_REQUEST });
    const res = await axios.get(`/post`);
    
    if (res.status === 200) {
      const { posts } = res.data;
      dispatch({
        type: postConstants.GET_ALL_POST_COMPLETED_SUCCESS,
        payload: {
          listPostCompleted: posts,
        },
      });
    } else {
      dispatch({
        type: postConstants.GET_ALL_POST_COMPLETED_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getListPostMustVerify = () => {
  return async (dispatch) => {
    dispatch({ type: postConstants.GET_ALL_POST_MUST_VERIFY_REQUEST });
    const res = await axios.get(`/admin/approval/post`);
    
    if (res.status === 200) {
      const { posts } = res.data;
      dispatch({
        type: postConstants.GET_ALL_POST_MUST_VERIFY_SUCCESS,
        payload: {
          listPostMustVerify: posts,
        },
      });
    } else {
      dispatch({
        type: postConstants.GET_ALL_POST_MUST_VERIFY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};




export const deletePost = (form) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.DELETE_POST_REQUEST });
    const res = await axios.delete(`/api/post/${form.id}`);
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: postConstants.DELETE_POST_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListPostCompleted());


    } else {
      const { error } = res.data;
      dispatch({
        type: postConstants.DELETE_POST_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};

export const acceptPost = (form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: postConstants.ACCEPT_POST_REQUEST });
    const res = await axios.put(`/admin/approval/post`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: postConstants.ACCEPT_POST_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListPostMustVerify());

    } else {
      const { error } = res.data;
      dispatch({
        type: postConstants.ACCEPT_POST_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};

export const denyPost = (form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: postConstants.ACCEPT_POST_REQUEST });
    const res = await axios.put(`/admin/approval/post`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: postConstants.ACCEPT_POST_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListPostMustVerify());

    } else {
      const { error } = res.data;
      dispatch({
        type: postConstants.ACCEPT_POST_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};