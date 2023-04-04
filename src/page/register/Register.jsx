import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { FetchRegister } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = async(data) => {
    console.log({ data });
    await dispatch(FetchRegister(data)).then((res) => {
      console.log(res)
      if (res?.payload) {
        setTimeout(() => {
          navigate("/login");
        }, 300);
      } else {
        alert("Tài khoản đã tồn tại");
      }
    });
    reset();
  };
  return (
    <StyleContainer>
      <StyleOutLine>1</StyleOutLine>
      <StyleForm onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className="h3 mb-3 font-weight-normal text-center"> Sign up</h1>
        <label className="sr-only">Username</label>
        <input
          {...register("username")}
          placeholder="Username"
          type="text"
          required
        />
        <p style={{ color: "red" }}>{errors.username?.message}</p>
        <label className="sr-only">Email</label>
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          required
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <label className="sr-only">Password</label>
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          required
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <label className="sr-only">Re-password</label>
        <input
          {...register("repassword")}
          placeholder="Re-password"
          type="password"
          required
        />
        <p style={{ color: "red" }}>{errors.repassword?.message}</p>
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
