import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../SideBar";

const Layout = (props) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        {/* <!-- Main content --> */}
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid" style={{ paddingTop: "20px" }}>
              {props.children}
            </div>
          </section>
        </div>

        <Footer />
        {/* <!-- Control Sidebar --> */}
        
      </div>
    </>
  );
};

export default Layout;
