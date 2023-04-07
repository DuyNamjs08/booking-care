import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { GetOneAccount, UpdateOneAccount } from "../../redux/authSlice";
import Loading from "../loading/Loading";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

function ViewAccount(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [active, setActive] = useState(false);
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  // console.log("path", path.pathname.split("/")[2]);
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
  const getDataDetails = async (value) => {
    setLoading(true);
    try {
      await dispatch(GetOneAccount(value))
        .unwrap()
        .then((res) => {
          console.log("resxXZBXbZBXbZBX", res);
          setData([{ ...res }]);
          setValue({
            ...value,
            username: res.username,
            email: res.email,
            password: res.password,
          });
          setLoading(false);
        });
    } catch (error) {
      toast.error("có lỗi xảy ra !");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (token) {
      getDataDetails({ token, url: path.pathname.split("/")[2] });
    }
  }, [token, active]);
  const handleClick = () => {
    setEdit(!edit);
  };
  const onSubmitHandler = async (data) => {
    console.log("datat namdz", data);
    setEdit(!edit);
    setLoading(true);
    try {
      await dispatch(
        UpdateOneAccount({
          url: path.pathname.split("/")[2],
          token,
          ...data,
        })
      ).then((res) => {
        if (!res.payload) {
          toast.warning("email đã tồn tại");
          return;
        }
        setLoading(false);
        setActive(!active);
        toast.success("update success !");
        navigate("/tai-khoan");
      });
    } catch (error) {
      setLoading(false);
      setActive(!active);
    }
    reset();
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {data.length > 0 ? (
        <>
          {!edit ? (
            <Button className="mx-3" variant="contained" onClick={handleClick}>
              Edit dịch vụ
            </Button>
          ) : (
            <StyleButton>
              <Button variant="contained" onClick={() => setEdit(!edit)}>
                Đóng
              </Button>
            </StyleButton>
          )}
          {!edit ? (
            <Container>
              <h4> {data[0]?.username}</h4>
              <h3> {data[0]?.email}</h3>
              <h5> {data[0]?.updatedAt}</h5>
            </Container>
          ) : (
            <StyleForm onSubmit={handleSubmit(onSubmitHandler)}>
              <label className="sr-only">Username</label>
              <TextField
                value={value?.username}
                {...register("username")}
                placeholder="username"
                type="text"
                required
                onChange={(e) =>
                  setValue({ ...value, username: e.target.value })
                }
              />
              <p style={{ color: "red" }}>{errors.username?.message}</p>
              <label className="sr-only">Email</label>
              <TextField
                {...register("email")}
                value={value?.email}
                placeholder="Email"
                type="text"
                required
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
              <label className="sr-only">Password</label>
              <TextField
                value={value?.password}
                {...register("password")}
                placeholder="password"
                type="password"
                required
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
              />
              <p style={{ color: "red" }}>{errors.password?.message}</p>
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Submit
              </button>
            </StyleForm>
          )}
        </>
      ) : null}
    </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  height: 50vh;
  width: 100%;
`;
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
export default ViewAccount;
