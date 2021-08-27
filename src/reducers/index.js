import { combineReducers } from "redux";
import authReducer from "./AdminReducers/auth.reducers";
import settingAdminReducer from "./AdminReducers/settings.reducers";
import manage_postReducers from "./PostReducers/manage_post.reducers";
import manage_customerReducers from "./CustomerReducers/manage_customer.reducers";
import tutorReducers from "./TutorReducers/tutor.reducers";
import classReducers from "./ClassReducers/class.reducers";
import manage_notifyReducers from "./NotifyReducers/notify.reducers";




const rootReducer = combineReducers({
  auth: authReducer,
  setting_admin: settingAdminReducer,
  posts: manage_postReducers,
  tutors : tutorReducers,
  customers : manage_customerReducers,
  classes : classReducers,
  notifys : manage_notifyReducers,

});

export default rootReducer;