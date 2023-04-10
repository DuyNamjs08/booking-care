import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FetchBillsbyId, UpdateOnePatients } from "../../redux/authSlice";
import Loading from "../../page/loading/Loading";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ViewBills(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [active, setActive] = useState(false);
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    address: "",
    phone: "",
    gender: "",
  });
  const [data, setData] = useState([]);
  // console.log("path", path.pathname.split("/")[2]);
  const schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    phone: yup.string().min(9).max(10).required(),
    gender: yup.string().required(),
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
      await dispatch(FetchBillsbyId(value))
        .unwrap()
        .then((res) => {
          console.log("resxXZBXbZBXbZBX", res);
          setData([{ ...res }]);
          setValue({
            ...value,
            fullname: res.fullname,
            email: res.email,
            address: res.address,
            phone: res.phone,
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
        UpdateOnePatients({
          url: path.pathname.split("/")[2],
          token,
          ...data,
        })
      ).then((res) => {
        if (!res.payload) {
          setLoading(false);
          toast.warning("email đã tồn tại");
          navigate("/danh-sach-benh-nhan");
          return;
        }
        setLoading(false);
        setActive(!active);
        toast.success("update success !");
        navigate("/danh-sach-benh-nhan");
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
          {/* {!edit ? (
            <Button className="mx-3" variant="contained" onClick={handleClick}>
              Edit dịch vụ
            </Button>
          ) : (
            <Button
              className="mx-3"
              variant="contained"
              onClick={() => setEdit(!edit)}
            >
              Đóng
            </Button>
          )} */}
          {!edit ? (
            <Container>
              <h4>Tên hóa đơn: {data[0]?.name}</h4>
              <h4>SDT: {data[0]?.totalprice}</h4>
              <h5>Email: {data[0]?.description}</h5>
              <h5>Ngày tạo: {data[0]?.updatedAt}</h5>
            </Container>
          ) : (
            <StyleForm onSubmit={handleSubmit(onSubmitHandler)}>
              <label className="sr-only">Full Name</label>
              <input
                {...register("fullname")}
                placeholder="Full name"
                type="text"
                required
                value={value?.fullname}
                onChange={(e) =>
                  setValue({ ...value, fullname: e.target.value })
                }
              />
              <p style={{ color: "red" }}>{errors.fullname?.message}</p>
              <label className="sr-only">Email</label>
              <input
                {...register("email")}
                placeholder="Email"
                type="text"
                required
                value={value?.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
              <label className="sr-only">Address</label>
              <input
                {...register("address")}
                placeholder="Address"
                type="text"
                required
                value={value?.address}
                onChange={(e) =>
                  setValue({ ...value, address: e.target.value })
                }
              />
              <p style={{ color: "red" }}>{errors.address?.message}</p>
              <label className="sr-only">Phone</label>
              <input
                {...register("phone")}
                placeholder="Phone"
                type="text"
                required
                value={value?.phone}
                onChange={(e) => setValue({ ...value, phone: e.target.value })}
              />
              <p style={{ color: "red" }}>{errors.phone?.message}</p>
              <label className="sr-only">Giới tính</label>
              <select {...register("gender")}>
                <option value="">Choose</option>
                <option value={1}>Nam</option>
                <option value={2}>Nữ</option>
                <option value={3}>Khác</option>
              </select>
              <p style={{ color: "red" }}>{errors.gender?.message}</p>
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
export default ViewBills;

