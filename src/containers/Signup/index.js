// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { signup } from "../../actions/Admin/register.actions";
// import Main from "../Main";

// SignUp.propTypes = {};

// function SignUp(props) {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const [username, setUsername] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const registerUer = async (e) => {
//     e.preventDefault();
//     const send = {
//       username,
//       phonenumber,
//       email,
//       password,
//       role: [role],
//     };
//     // alert(JSON.stringify(send));
//     await dispatch(signup());
//     setUsername("");
//     setPhonenumber("");
//     setEmail("");
//     setPassword("");
//     setRole("");
//   };
//   return (
//     <>
//          <div className="container container-signup animated fadeIn" style={{display: 'none'}}>
//     <h3 className="text-center">Sign Up</h3>
//     <div className="login-form">
//       <div className="form-group form-floating-label">
//         <input id="fullname" name="fullname" type="text" className="form-control input-border-bottom" required />
//         <label htmlFor="fullname" className="placeholder">Fullname</label>
//       </div>
//       <div className="form-group form-floating-label">
//         <input id="email" name="email" type="email" className="form-control input-border-bottom" required />
//         <label htmlFor="email" className="placeholder">Email</label>
//       </div>
//       <div className="form-group form-floating-label">
//         <input id="passwordsignin" name="passwordsignin" type="password" className="form-control input-border-bottom" required />
//         <label htmlFor="passwordsignin" className="placeholder">Password</label>
//         <div className="show-password">
//           <i className="icon-eye" />
//         </div>
//       </div>
//       <div className="form-group form-floating-label">
//         <input id="confirmpassword" name="confirmpassword" type="password" className="form-control input-border-bottom" required />
//         <label htmlFor="confirmpassword" className="placeholder">Confirm Password</label>
//         <div className="show-password">
//           <i className="icon-eye" />
//         </div>
//       </div>
//       <div className="row form-sub m-0">
//         <div className="custom-control custom-checkbox">
//           <input type="checkbox" className="custom-control-input" name="agree" id="agree" />
//           <label className="custom-control-label" htmlFor="agree">I Agree the terms and conditions.</label>
//         </div>
//       </div>
//       <div className="form-action">
//         <a href="#" id="show-signin" className="btn btn-danger btn-link btn-login mr-3">Cancel</a>
//         <a href="#" className="btn btn-primary btn-rounded btn-login">Sign Up</a>
//       </div>
//     </div>
//   </div>
//     </>
//   );
// }

// export default SignUp;
