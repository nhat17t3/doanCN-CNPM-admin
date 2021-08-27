import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../actions";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ backgroundColor: "#a01111" }}
    >
      {/* <aside className="main-sidebar sidebar-dark-primary elevation-4" > */}

      <Link to={"#"} className="brand-link">
        <img
          src="/assets/img/AdminLTELogo.png"
          alt="Avatar"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">Admin</span>
      </Link>
      <div className="sidebar">
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Hoàng Long Nhật
            </a>
          </div>
        </div> */}

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <NavLink to={`/home`} className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>&nbsp; 
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/listcustomer`} className="nav-link">
                <i class="fas fa-users-cog"></i>&nbsp; 
                <p> Manage Users</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/list-tutor-must-verify`} className="nav-link">
                <i class="fas fa-user-check"></i>&nbsp; 
                <p> Verify Tutor</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/list-tutor-completed`} className="nav-link">
                <i class="fas fa-user-graduate"> </i>&nbsp; 

                <p>Completed Tutor</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/listpost`} className="nav-link">
                <i class="fas fa-envelope-open-text"></i>&nbsp;

                <p>Manage Posts</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/listpost-must-verify`} className="nav-link">
                <i class="fas fa-calendar-check"></i>&nbsp; 
                <p>Verify Posts</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/notifycation`} className="nav-link">
                <i class=" nav-icon fas fa-list-alt"></i>&nbsp; 
                <p>Notification</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/updatepass`} className="nav-link">
                <i class="fas fa-unlock-alt"></i>&nbsp; 
                <p>Update Password</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                href="/home"
                className="nav-link"
                onClick={() => dispatch(logout())}
              >
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
