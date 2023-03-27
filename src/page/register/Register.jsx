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
  flex: 1.2;
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
function Register(props) {
  return (
    <StyleContainer>
      <StyleOutLine>1</StyleOutLine>
      <StyleForm>
        <h1 className="h3 mb-3 font-weight-normal text-center"> Sign up</h1>
        <label className="sr-only">Email</label>
        <input
          type="text"
          id="usename"
          className="form-control"
          placeholder="UserName"
          required
          autofocus
        />
        <label className="sr-only">SDT</label>
        <input
          type="text"
          id="sdt"
          className="form-control"
          placeholder="SDT"
          required
          autofocus
        />
        <label className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Email"
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
        <label className="sr-only">Re-password</label>
        <input
          type="password"
          id="repassword"
          className="form-control"
          placeholder="Re-Password"
          required
        />
        <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">
          Sign up
        </button>
        <Link className="text-black text-decoration-none" to="/login">
          <StyleLink>Are alredy account</StyleLink>
        </Link>
      </StyleForm>
      <div></div>
    </StyleContainer>
  );
}

export default Register;
