import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCustomer } from "../../../actions";
import Layout from "../../../components/Layout";

AddCustomer.propTypes = {};

function AddCustomer(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const addcustomer = async(e) => {
    e.preventDefault();
    const Customer = {
      username,
      phonenumber,
      email,
      password,
      role: [role],
    };

    
    await dispatch(addCustomer(Customer));
    history.push("/listcustomer");
  };

  return (
    <>
     <Layout>
        <div className="row container-fluid">
          <div className="col-md-3"></div>
          <div className="col-md-5">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">ADD USER</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form role="form" onSubmit={addcustomer}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phonenumber</label>
                    <input
                      type="number"
                      name="phonenumber"
                      className="form-control"
                      placeholder="Phone number"
                      value={phonenumber}
                      onChange={(e) => setPhonenumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Role</label>
                    <select
                      name="role"
                      className="form-control"
                      value={role}
                      required
                      onChange={(e) => setRole(e.target.value)}
                      
                    >
                      <option value="" hidden>Add student or tutor?</option>
                      <option value={"student"}>Student</option>
                      <option value={"tutor"}>Tutor</option>
                    </select>
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    ADD USER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AddCustomer;
