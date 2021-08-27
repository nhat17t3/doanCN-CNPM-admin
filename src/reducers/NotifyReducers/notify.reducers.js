import { notifyConstants } from "../../actions/constants";

const initState = {
  listNotifyByAdmin: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case notifyConstants.GET_NOTIFY_BY_ADMIN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case notifyConstants.GET_NOTIFY_BY_ADMIN_SUCCESS:
      state = {
        ...state,
        loading: false,
        listNotifyByAdmin: action.payload.listNotifyByAdmin,
      };
      break;
    case notifyConstants.GET_NOTIFY_BY_ADMIN_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

      
  }
  return state;
};