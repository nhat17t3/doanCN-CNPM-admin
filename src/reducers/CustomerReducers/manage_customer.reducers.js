import { customerConstants } from "../../actions/constants";

const initState = {
  listCustomer: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case customerConstants.GET_ALL_CUSTOMER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case customerConstants.GET_ALL_CUSTOMER_SUCCESS:
      state = {
        ...state,
        loading: false,
        listCustomer: action.payload.listCustomer,
      };
      break;
    case customerConstants.GET_ALL_CUSTOMER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
      
    case customerConstants.ADD_CUSTOMER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case customerConstants.ADD_CUSTOMER_SUCCESS:
      state = {
        ...state,
        messages: action.payload.message,
        loading: false,
      };
      break;
    case customerConstants.ADD_CUSTOMER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case customerConstants.UPDATE_CUSTOMER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case customerConstants.UPDATE_CUSTOMER_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "Update customer successfully",
      };
      break;
    case customerConstants.UPDATE_CUSTOMER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case customerConstants.DELETE_CUSTOMER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case customerConstants.DELETE_CUSTOMER_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "delete customer successfully",
      };
      break;
    case customerConstants.DELETE_CUSTOMER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};