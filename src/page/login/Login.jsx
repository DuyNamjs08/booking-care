import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FetchLogin } from "../../redux/authSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import backgroundImg from "../../assets/Rectangle.svg";
import lefttt from "../../assets/bac si.svg";

const StyleContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: url(${backgroundImg});
`;
const StyleOutLine = styled.div`
  flex: 3;
  margin-left: 40px;
`;
const StyleForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px 80px 60px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background: #fff;
  border-radius: 10px;
`;
const StyleLink = styled.div`
  &:hover {
    color: blue;
  }
`;
function Login(props) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).max(32).required(),
  });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = async (data) => {
    console.log("data", { data });
    await dispatch(FetchLogin(data)).then((res) => {
      console.log(res);
      if (!res.payload?.status) {
        localStorage.setItem("token", res?.payload?.accessToken);
        localStorage.setItem("idUser", res?.payload?.user?._id);
        localStorage.setItem(
          "role",
          JSON.stringify(res?.payload?.user?.roleid)
        );
        toast.success("Đăng nhập thành công!");
        navigate("/");
      } else {
        toast.error(res.payload?.msg, " !");
      }
    });
    reset();
  };

  return (
    <StyleContainer>
      <StyleOutLine>
        <img src={lefttt} alt="" />
      </StyleOutLine>
      <StyleForm onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className="h3 mb-3 font-weight-normal text-center">Sign in</h1>
        <label className="sr-only">Username</label>
        <input
          {...register("username")}
          placeholder="username"
          type="text"
          required
        />
        <p style={{ color: "red" }}>{errors.username?.message}</p>
        <label className="sr-only">Password</label>
        <input
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
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
