import React, { useState, useEffect } from "react";
import CustomGrid from "../../components/grid/CustomGrid";
import { GetAccount, AddAcoust, DeleteAccount } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Loading from "../loading/Loading";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ExaminationPackage(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const GetData = async (value) => {
    setLoading(true);
    try {
      await dispatch(GetAccount(value))
        .unwrap()
        .then((res) => {
          //   console.log("ress..////", res);
          setData(res);
          setLoading(false);
        });
    } catch (error) {
      toast.error("có lỗi xảy ra !");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (token) {
      GetData(token);
    }
  }, [token, active]);
  const handleClick = (params) => {
    setEdit(!edit);
  };
  const onSubmitHandler = async (data) => {
    setEdit(!edit);
    setLoading(true);
    try {
      await dispatch(
        AddAcoust({
          token,
          ...data,
        })
      ).then((res) => {
        if (!res.payload) {
          toast.warning("email đã tồn tại");
          setLoading(false);
          return;
        }
        setLoading(false);
        setActive(!active);
        toast.success("tạo tk");
      });
    } catch (error) {
      setLoading(false);
      setActive(!active);
    }
    reset();
  };
  const handleDelete = async (url) => {
    setLoading(true);
    try {
      await dispatch(
        DeleteAccount({
          token,
          url,
        })
      ).then((res) => {
        setLoading(false);
        setActive(!active);
      });
    } catch (error) {
      setLoading(false);
      setActive(!active);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <h4 className="my-4">Danh sách Tài khoản</h4>
      {role === "1" || "2" ? (
        !edit ? (
          <Button className="my-3" variant="contained" onClick={handleClick}>
            Thêm tài khoản
          </Button>
        ) : <StyleButton>
        <Button
          variant="contained"
          onClick={() => setEdit(!edit)}
        >
          Đóng
        </Button>
      </StyleButton>
      ) : (
        ""
      )}
      {edit ? (
        <div>
          <StyleForm onSubmit={handleSubmit(onSubmitHandler)}>
            <label className="sr-only">Username</label>
            <input
              {...register("username")}
              placeholder="username"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.username?.message}</p>
            <input
              {...register("email")}
              placeholder="Email"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
            <label className="sr-only">Password</label>
            <input
              {...register("password")}
              placeholder="password"
              type="password"
              required
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Submit
            </button>
          </StyleForm>
        </div>
      ) : (
        ""
      )}
      <CustomGrid data={data} handleDelete={handleDelete} path={'/tai-khoan/'} />
    </div>
  );
}
const StyleForm = styled.form`
  width: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px 80px 60px;
`;
const StyleLink = styled.div`
  &:hover {
    color: blue;
  }
`;
const StyleButton = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
`;
export default ExaminationPackage;
