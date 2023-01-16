import React from "react";
import { Link } from "@reach/router";

const footer = () => (
  <>
    <div className="container py-5">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "70%" }}>
          <span onClick={() => window.open("", "_self")}>
            <span className="copy">
              &copy; Copyright 2023 - Development of NFTs Platform
            </span>
            <br />
            <span className="copy">
              Project of{" "}
              <a href="https://hadiraza.com" target="_blank">
                hadiraza.com
              </a>
            </span>
          </span>
        </div>

        <div style={{ width: "20%" }}>
          <div className="social-icons">
            <span onClick={() => window.open("", "_self")}>
              <a
                href="http://linkedin.com/in/hadi-raza-0365a11a2"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-lg mx-2 "></i>
              </a>
            </span>
            <span onClick={() => window.open("", "_self")}>
              <a href="https://github.com/HadiScript" target="#">
                <i className="fa fa-github fa-lg mx-2 "></i>
              </a>
            </span>
            <span onClick={() => window.open("", "_self")}>
              <a href="https://hadiraza.com/#contact" target="#">
                <i className="fa fa-envelope fa-lg mx-2 "></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </>

  // <footer className="">
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-md-12">
  //         <div className="de-flex">
  //           <div className="de-flex-col">

  //           </div>
  //           <div className="de-flex-col ">

  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </footer>
);
export default footer;
