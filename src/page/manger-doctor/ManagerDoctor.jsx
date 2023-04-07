import React, { useState, useEffect } from "react";
import CustomGrid from "../../components/grid/CustomGrid";
import { GetDoctors, AddDoctor, DeleteDoctor } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Loading from "../loading/Loading";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ManagerDoctor(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    phone: yup.string().min(9).max(10).required(),
    position: yup.string().min(3).max(32).required(),
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
      await dispatch(GetDoctors(value))
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
    console.log("data", data);
    setEdit(!edit);
    setLoading(true);
    try {
      await dispatch(
        AddDoctor({
          token,
          ...data,
        })
      ).then((res) => {
        console.log(res);
        if (!res.payload) {
          toast.warning("email đã tồn tại");
          setLoading(false);
          return;
        }
        setLoading(false);
        setActive(!active);
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
        DeleteDoctor({
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
      <h4 className="my-4">Danh sách Bác sỹ</h4>
      {role === "1" || "2" ? (
        !edit ? (
          <Button className="my-3" variant="contained" onClick={handleClick}>
            Thêm tài khoản Bác sỹ
          </Button>
        ) : (
          <StyleButton>
            <Button
              variant="contained"
              onClick={() => setEdit(!edit)}
            >
              Đóng
            </Button>
          </StyleButton>
        )
      ) : (
        ""
      )}
      {edit ? (
        <div>
          <StyleForm onSubmit={handleSubmit(onSubmitHandler)}>
            <label className="sr-only">Full Name</label>
            <input
              {...register("fullname")}
              placeholder="Full name"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.fullname?.message}</p>
            <label className="sr-only">Email</label>
            <input
              {...register("email")}
              placeholder="Email"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
            <label className="sr-only">Address</label>
            <input
              {...register("address")}
              placeholder="Address"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.address?.message}</p>
            <label className="sr-only">Phone</label>
            <input
              {...register("phone")}
              placeholder="Phone"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.phone?.message}</p>
            <label className="sr-only">Position</label>
            <input
              {...register("position")}
              placeholder="Position"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.position?.message}</p>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Submit
            </button>
          </StyleForm>
        </div>
      ) : (
        ""
      )}
      <CustomGrid data={data} handleDelete={handleDelete} path={"/quan-ly/"} />
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
const StyleButton = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
`;
const StyleLink = styled.div`
  &:hover {
    color: blue;
  }
`;
export default ManagerDoctor;
