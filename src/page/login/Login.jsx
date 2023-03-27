import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;
const StyleOutLine = styled.div`
  flex: 3;
`;
const StyleForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px 80px 60px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const StyleLink = styled.div`
  &:hover {
    color: blue;
  }
`;
function Login(props) {
  return (
    <StyleContainer>
      <StyleOutLine>1</StyleOutLine>
      <StyleForm>
        <h1 className="h3 mb-3 font-weight-normal text-center">Sign in</h1>
        <label className="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label className="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox my-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <div>
          <Link className="text-black text-decoration-none" to="/register">
            <StyleLink>Are you'nt account</StyleLink>
          </Link>
        </div>
      </StyleForm>
    </StyleContainer>
  );
}

export default Login;
