import React from "react";
import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import Logo from "../assets/logo.png";
import "../MyFooter.css";

export const MyFooter = () => {
  return (
    <footer className="shadow">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={Logo} width="80px" />
            </a>

            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <CDBBox
              className="d-flex"
              flex="column"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <a href="/">Audio and Subtitles</a>
              <a href="/">Media Center</a>
              <a href="/">Privacy</a>
              <a href="/">Contact us</a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <CDBBox
              className="d-flex"
              flex="column"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <a href="/">Audio Description</a>
              <a href="/">Investor Relations</a>
              <a href="/">Legal Notices</a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <CDBBox
              className="d-flex"
              flex="column"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <a href="/">Help Center</a>
              <a href="/">Jobs</a>
              <a href="/">Cookie Preferences</a>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; Netflix, 2023. All rights reserved.
        </small>
      </CDBBox>
    </footer>
  );
};
export default MyFooter;
