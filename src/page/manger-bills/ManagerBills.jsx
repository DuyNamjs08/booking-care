import React, { useState, useEffect } from "react";
import CustomGrid from "../../components/grid/CustomGrid";
import numeral from "numeral";
import { Link } from "react-router-dom";
import {
  FetchBills,
  FetchGetbillbypatientid,
  FetchTotalrevenue,
  GetPatients,
  GetDoctors,
  AddBills,
  DeleteBills,
  ExportBills,
} from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Loading from "../loading/Loading";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { saveAs } from "file-saver";
import dayjs, { Dayjs } from "dayjs";
import BasicSelect from "../../components/selectmui/SelectMui";
import { format } from 'date-fns';


function ManagerBills(props) {
  const idUser = localStorage.getItem("idUser");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [dataPatient, setDataPatient] = useState([]);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalrevenue, setTotalrevenue] = useState(0);
  const [active, setActive] = useState(false);
  const [dataDoctor, setDataDoctor] = useState([]);
  const [dataPatientId, setDataPatientId] = useState([]);
  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState("");

  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    totalprice: yup.string().required(),
    patient: yup.string().required(),
    doctor: yup.string().required(),
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
      await dispatch(FetchBills(value))
        .unwrap()
        .then((res) => {
          setData(res);
          setLoading(false);
        });
      await dispatch(FetchTotalrevenue(value))
        .unwrap()
        .then((res) => {
          setTotalrevenue(res);
          setLoading(false);
        });
      await dispatch(GetPatients(value))
        .unwrap()
        .then((res) => {
          setDataPatientId(res);
          setLoading(false);
        });
      await dispatch(GetDoctors(value))
        .unwrap()
        .then((res) => {
          setDataDoctor(res);
          setLoading(false);
        });
    } catch (error) {
      toast.error("có lỗi xảy ra !");
      setLoading(false);
    }
  };
  const GetDataParent = async (value) => {
    setLoading(true);
    try {
      await dispatch(FetchGetbillbypatientid(value))
        .unwrap()
        .then((res) => {
          setDataPatient(res);
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
      GetDataParent(idUser);
    }
  }, [token, active, idUser]);
  useEffect(() => {
    if (!token) {
      toast.warning("bạn cần đăng nhập tài khoản");
    }
  }, []);
  const handleClick = (params) => {
    setEdit(!edit);
  };
  const handleDelete = async (url) => {
    setLoading(true);
    try {
      await dispatch(
        DeleteBills({
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
  const onSubmitHandler = async (data) => {
    console.log("data", data);
    setEdit(!edit);
    setLoading(true);
    try {
      await dispatch(
        AddBills({
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

  const columns = [
    { index: 1, field: "id", headerName: "ID", width: 90, align: "center" },
    {
      index: 2,
      field: "name",
      headerName: "Tên hóa đơn",
      width: 150,
      editable: true,
    },
    {
      index: 3,
      field: "description",
      headerName: "Mô tả",
      width: 160,
      editable: true,
    },
    {
      index: 4,
      field: "totalprice",
      headerName: "Đơn giá",
      width: 160,
      editable: true,
    },
    {
      index: 5,
      field: "createdAt",
      headerName: "Ngày đăng kí",
      width: 160,
      editable: true,
    },
    {
      index: 100,
      field: "action",
      headerName: "Action",
      width: 200,
      editable: true,
      renderCell: (row) => {
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to={`${row.row._id}`}>
              <button className="btn btn-primary">View</button>
            </Link>
            <button
              onClick={() => handleDelete(row.row._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const handleDownloadExcel = async () => {
    if(!value && !value1){
      return toast.error('vui lòng chọn ngày !')
    }
    
    const date = {todate:format(value, 'yyyy-dd-MM') , fromdate:format(value1, 'yyyy-dd-MM')}
    console.log('date>>??' , date)
    try {
      await dispatch(
        ExportBills({
          token,date
        })
      ).then((response) => {
        const href = URL.createObjectURL(response.payload);
        const link = document.createElement("a");
        console.log(href);
        link.href = href;
        link.setAttribute("download", "dataExcel.xlsx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      });
    } catch (error) {}
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      {((role === "1") ||(role === "1")) ? (
        !edit ? (
          <Button className="my-3" variant="contained" onClick={handleClick}>
            Thêm hóa đơn
          </Button>
        ) : (
          <StyleButton>
            <Button variant="contained" onClick={() => setEdit(!edit)}>
              Đóng
            </Button>
          </StyleButton>
        )
      ) : (
        ""
      )}
      {((role === "1") ||(role === "1"))? (
        <div>
          <div className="d-flex mb-3" style={{ gap: "10px" }}>
            <BasicSelect name='todate' value={value} setValue={setValue} label="Từ ngày" />
            <BasicSelect name='fromdate' value={value1} setValue={setValue1} label="Tới ngày" />
          </div>
          <Button variant="contained" onClick={handleDownloadExcel}>
            Xuất file Excel
          </Button>
        </div>
      ) : (
        ""
      )}
      {edit ? (
        <div>
          <StyleForm onSubmit={handleSubmit(onSubmitHandler)}>
            <label className="sr-only">Tên hóa đơn</label>
            <input
              {...register("name")}
              placeholder="Tên hóa đơn"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
            <label className="sr-only">Description</label>
            <input
              {...register("description")}
              placeholder="description"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.description?.message}</p>
            <label className="sr-only">Giá</label>
            <input
              {...register("totalprice")}
              placeholder="Totalprice"
              type="text"
              required
            />
            <p style={{ color: "red" }}>{errors.totalprice?.message}</p>
            <label className="sr-only">Tên bệnh nhân </label>
            <select {...register("patient")}>
              <option value="">Choose</option>
              {dataPatientId.length > 0
                ? dataPatientId.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.fullname}
                    </option>
                  ))
                : null}
            </select>
            <p style={{ color: "red" }}>{errors.patient?.message}</p>
            <label className="sr-only">Tên bác sỹ </label>
            <select {...register("doctor")}>
              <option value="">Choose</option>
              {dataDoctor.length > 0
                ? dataDoctor.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.fullname}
                    </option>
                  ))
                : null}
            </select>
            <p style={{ color: "red" }}>{errors.doctor?.message}</p>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Submit
            </button>
          </StyleForm>
        </div>
      ) : (
        ""
      )}
      {role === "1" || role === "2" ? (
        <h4 className="my-4">
          Tổng doanh thu:
          {totalrevenue
            ? " " + numeral(totalrevenue).format("0,0") + " vnd"
            : "0"}
        </h4>
      ) : (
        ""
      )}

      <h4 className="my-4">Danh sách hóa đơn</h4>
      {role === "1" || role === "2" ? (
        <CustomGrid
          fullname={"fullname"}
          billColums={columns}
          data={data}
          handleDelete={handleDelete}
          path={"/quan-ly/"}
          major={true}
          gender={true}
        />
      ) : (
        <CustomGrid
          fullname={"fullname"}
          billColums={columns}
          data={dataPatient}
          handleDelete={handleDelete}
          path={"/quan-ly/"}
          major={true}
          gender={true}
        />
      )}
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

export default ManagerBills;
