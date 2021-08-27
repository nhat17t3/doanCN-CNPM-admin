import axios from "../../helpers/axios";
import { tutorConstants } from "../constants";

export const getListTutorCompleted = () => {
  return async (dispatch) => {
    dispatch({ type: tutorConstants.GET_ALL_TUTOR_COMPLETED_REQUEST });
    const res = await axios.get(`/tutor`);
    
    if (res.status === 200) {
      const { tutors } = res.data;
      dispatch({
        type: tutorConstants.GET_ALL_TUTOR_COMPLETED_SUCCESS,
        payload: {
          listTutorCompleted: tutors,
        },
      });
    } else {
      dispatch({
        type: tutorConstants.GET_ALL_TUTOR_COMPLETED_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getListTutorMustVerify = () => {
  return async (dispatch) => {
    dispatch({ type: tutorConstants.GET_ALL_TUTOR_MUST_VERIFY_REQUEST });
    const res = await axios.get(`/admin/approval/tutor`);
    
    if (res.status === 200) {
      const { tutors } = res.data;
      dispatch({
        type: tutorConstants.GET_ALL_TUTOR_MUST_VERIFY_SUCCESS,
        payload: {
          listTutorMustVerify: tutors,
        },
      });
    } else {
      dispatch({
        type: tutorConstants.GET_ALL_TUTOR_MUST_VERIFY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};


export const acceptTutor = (form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: tutorConstants.ACCEPT_TUTOR_REQUEST });
    const res = await axios.put(`/admin/approval/tutor`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: tutorConstants.ACCEPT_TUTOR_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListTutorMustVerify());
    } else {
      const { error } = res.data;
      dispatch({
        type: tutorConstants.ACCEPT_TUTOR_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};

export const denyTutor = (form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: tutorConstants.DENY_TUTOR_REQUEST });
    const res = await axios.put(`/admin/approval/tutor`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: tutorConstants.DENY_TUTOR_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListTutorMustVerify());
    } else {
      const { error } = res.data;
      dispatch({
        type: tutorConstants.DENY_TUTOR_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};