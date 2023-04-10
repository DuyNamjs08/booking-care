import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Card from "../../components/card/Card";
import { dataDepartment, dataBreadCrumbs } from "../../constant";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FetchDataService } from "../../redux/authSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AddService, DeleteService, FetchService } from "../../redux/authSlice";
import Loading from "../loading/Loading";

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
const StyleSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h5 {
    margin: 0;
  }
  input {
    border: 1px solid black;
    border-radius: 100px;
    outline: none;
    padding: 6px 20px;
  }
  input:focus {
    border: 1px solid blue;
  }
`;

function Departments(props) {
  const role = localStorage.getItem("role");
  const path = useLocation();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);
  const token = localStorage.getItem("token");
  const [state, setState] = useState(token);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);
  const GetData = async (value) => {
    setLoading(true);
    try {
      await dispatch(FetchDataService(value))
        .unwrap()
        .then((res) => {
          const newData = res.map((item, index) => {
            return { ...item, ...dataDepartment[index] };
          });
          setData(newData);
        });

      await dispatch(FetchService(value))
        .unwrap()
        .then((res) => {
          setDataDetail(res);
        });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("có lỗi xảy ra ");
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    // if (token) {
    GetData(token);
    setState(token);
    // }
  }, [token, active]);
  const handleClick = () => {
    setEdit(!edit);
  };
  const handleSubmit = async () => {
    setLoading(true);
    setEdit(!edit);
    try {
      await dispatch(
        AddService({
          value,
          token,
        })
      ).then((res) => {
        setLoading(false);
        setValue("");
        setActive(!active);
      });
    } catch (error) {
      setLoading(false);
      setActive(!active);
    }
  };
  const typingRef = useRef(null);
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    typingRef.current = setTimeout(() => {
      handleFilter(value);
    }, 300);
  };
  const handleFilter = (value) => {
    if (value) {
      const newData = [...data].filter((item) =>
        item.title.toLocaleLowerCase().includes(value)
      );
      setData(newData);
    } else {
      setData(dataDepartment);
    }
  };

  const getBreadCrumbs = () => {
    if (dataBreadCrumbs.find((item) => item.path === path.pathname)) {
      return dataBreadCrumbs.find((item) => item.path === path.pathname).title;
    } else {
      return "sai";
    }
  };

  const handleChooseService = () => {
    // if (!state) {
    //   toast.warning("Bạn cần đăng nhập để đăng kí dịch vụ của chúng tôi !");
    // }
  };
  if (loading) {
    return <Loading />;
  }
  const hanldeDelete = async (url) => {
    console.log("url", url);
    setLoading(true);
    setEdit(!edit);
    try {
      await dispatch(
        DeleteService({
          url,
          token,
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

  return (
    <div className="container">
      <BreadCrumbs getBreadCrumbs={getBreadCrumbs} />
      {/* <StyleSearch className="mt-4 mb-5">
        <h5>Search</h5>
        <input
          type="text"
          placeholder="Tìm chuyên khoa"
          onChange={handleSearch}
          value={search}
        />
      </StyleSearch> */}
      {role === "1" || role === "1" ? (
        !edit ? (
          <Button className="my-3" variant="contained" onClick={handleClick}>
            Thêm dịch vụ
          </Button>
        ) : (
          <Button className="my-3" variant="contained" onClick={handleSubmit}>
            submit
          </Button>
        )
      ) : (
        ""
      )}
      {edit ? (
        <div className="mb-4">
          <TextField
            id="outlined-basic"
            label="Edit Name"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      ) : null}
      <StyleGrid>
        {data
          ? data.map((item, index) => (
              <div
                onClick={handleChooseService}
                key={item.id}
                style={{ cursor: "pointer", margin: "20px 0" }}
              >
                <Card
                  data={dataDetail.length > 0 ? dataDetail[index] : "hello"}
                  img={item.img}
                  title={item.name}
                  width={240}
                  // link={item.path}
                  role={role}
                  link={`${item._id}`}
                  token={state}
                  hanldeDelete={hanldeDelete}
                />
              </div>
            ))
          : ""}
      </StyleGrid>
    </div>
  );
}

export default Departments;
