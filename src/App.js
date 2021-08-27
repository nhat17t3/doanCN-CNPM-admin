import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { isAdminLoggedIn } from "./actions";
import PrivateRoute from "./components/HOC/PrivateRoute";
import ClassRequestOpen from "./containers/ClassRequestOpen";
import AddCustomer from "./containers/CustomersManage/AddCustomer";
import ListCustomer from "./containers/CustomersManage/ListCustomer";
import Main from "./containers/Main";
import NotFound from "./containers/NotFound";
import InforPost1 from "./containers/PostMustVerify/InforPost1";
import ListPostMustVerify from "./containers/PostMustVerify/ListPostMustVerify";
import InforPost from "./containers/PostsManage/InforPost";
import ListPost from "./containers/PostsManage/ListPost";
import Signin from "./containers/Signin";
import InforTutor1 from "./containers/TutorCompleted/InforTutor1";
import ListTutorCompleted from "./containers/TutorCompleted/ListTutorCompleted";
import InforTutor from "./containers/TutorMustVerify/InforTutor";
import ListTutorMustVerify from "./containers/TutorMustVerify/ListTutorMustVerify";
import UpdatePass from "./containers/UpdatePass";



function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isAdminLoggedIn());
    }
  }, [auth.authenticate]);
  return (
    <>
      <Switch>
        <PrivateRoute path="/home" exact component={Main} />
        <PrivateRoute path="/" exact component={Main} />

        <Route path="/signin" component={Signin} />
        <Route path="/updatepass" component={UpdatePass} />


        <PrivateRoute path="/listcustomer" component={ListCustomer} />
        {/* <Route path="/customeredit/:customerId" component={EditCustomer1} /> */}
        <PrivateRoute path="/addcustomer" component={AddCustomer} />

        <PrivateRoute path="/listpost" component={ListPost} />
        <PrivateRoute path="/postview/:postId" component={InforPost} />

        <PrivateRoute path="/listpost-must-verify" component={ListPostMustVerify} />
        <PrivateRoute path="/postview-must-verify/:postId" component={InforPost1} />

        <PrivateRoute path="/list-tutor-must-verify" component={ListTutorMustVerify} />
        <PrivateRoute path="/tutorview-verify/:tutorId" component={InforTutor} />

        <PrivateRoute path="/list-tutor-completed" component={ListTutorCompleted} />
        <PrivateRoute path="/tutorview/:tutorId" component={InforTutor1} />

        <PrivateRoute path="/list-class-request-open" component={ClassRequestOpen} />


        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
