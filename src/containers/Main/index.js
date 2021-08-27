import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListCustomer, getListPostCompleted } from "../../actions";
import Layout from "../../components/Layout";

const Main = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCustomer());
  }, []);

  useEffect(() => {
    dispatch(getListPostCompleted());
  }, []);

  const customers = useSelector((state) => state.customers.listCustomer);
  const students = customers?.filter((customer) => {
    return customer.roles[0] === "ROLE_STUDENT";
  });
  const tutors = customers?.filter((customer) => {
    return customer.roles[0] === "ROLE_TUTOR";
  });
  const posts = useSelector((state) => state.posts.listPostCompleted);


  return (
    <>
      <Layout>
        
            {/* <div
              className="container-fluid"
              style={{ paddingTop: "20px" }}
            ></div> */}
            <div className="row">
              <div className="col-lg-4 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{students?.length}</h3>
                    <p>STUDENTS</p>
                  </div>
                  <div className="icon">
                    <i class="fas fa-user-graduate"></i>
                  </div>
                  <Link
                    to="/listcustomer"
                    href="#"
                    className="small-box-footer"
                  >
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-4 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>{tutors?.length}</h3>
                    <p>TUTORS</p>
                  </div>
                  <div className="icon">
                    <i class="fas fa-user-edit"></i>
                  </div>
                  <Link
                    to="/listcustomer"
                    href="#"
                    className="small-box-footer"
                  >
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-4 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{posts?.length}</h3>
                    <p>POSTS</p>
                  </div>
                  <div className="icon">
                    <i class="fas fa-envelope-open-text"></i>
                  </div>
                  <Link to="/listpost" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
         
              {/* ./col */}
            </div>
         
      </Layout>
    </>
  );
};

export default Main;
