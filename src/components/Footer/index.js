import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 1.0
        </div>
        
        All rights reserved. & Design By{" "}
        <strong>
          <a
            href="#"
            target="_blank"
            className="copyrightlink"
          >
            Nhóm đồ án CNPM 16
          </a>
        </strong>
      </footer>
    </>
  );
};

export default Footer;
