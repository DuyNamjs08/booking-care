import React, { useEffect, useState, useRef } from "react";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { useLocation } from "react-router-dom";
import { dataBreadCrumbs } from "../../constant";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FetchDataServiceDetail } from "../../redux/authSlice";
import styled from "styled-components";
import { HiOutlineMapPin } from "react-icons/hi2";
import Avatar from "@mui/material/Avatar";
import BasicSelect from "../../components/selectmui/SelectMui";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { UpdateOneServiceDetail } from "../../redux/authSlice";
import Loading from "../loading/Loading";

function DepartmentDetail(props) {
  const role = localStorage.getItem("role");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);
  const path = useLocation();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [active, setActive] = useState(false);
  // console.log("path", path.pathname.split("/")[2]);
  const getDataDetails = async (value) => {
    try {
      await dispatch(FetchDataServiceDetail(value))
        .unwrap()
        .then((res) => {
          console.log(res);
          setData([{ ...res }]);
          setValue(res.name);
        });
    } catch (error) {
      toast.error("có lỗi xảy ra !");
    }
  };
  useEffect(() => {
    if (token) {
      getDataDetails({ token, url: path.pathname.split("/")[2] });
    }
  }, [token, active]);

  const getChildBreadCrumbs = () => {
    if (
      dataBreadCrumbs.find((item) =>
        item.childs.find((el) => el.path === path.pathname)
      )
    ) {
      return dataBreadCrumbs.map((item) => {
        return {
          titleTotal: item.title,
          ...item.childs.find((el) => el.path === path.pathname),
        };
      });
    } else {
      return "";
    }
  };
  const handleClick = () => {
    setEdit(!edit);
  };
  const handleSubmit = async () => {
    setLoading(true);
    setEdit(!edit);
    try {
      await dispatch(
        UpdateOneServiceDetail({
          url: path.pathname.split("/")[2],
          value,
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
  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  const setTextInputRef = (element) => {
    inputRef.current = element;
  };
  if (loading) {
    return <Loading />;
  }

  return (
    // <div className="container">
    //   <BreadCrumbs getChildBreadCrumbs={getChildBreadCrumbs} />

    // </div>
    <div style={{ background: "#ccc", padding: "20px 0" }}>
      <Container className="container">
        <div>
          {role === "1" || "2" ? (
            !edit ? (
              <Button
                className="my-3"
                variant="contained"
                onClick={handleClick}
              >
                Edit dịch vụ
              </Button>
            ) : (
              <Button
                className="my-3"
                variant="contained"
                onClick={handleSubmit}
              >
                submit
              </Button>
            )
          ) : (
            ""
          )}
          {edit ? (
            <div>
              <TextField
                ref={setTextInputRef}
                id="outlined-basic"
                label="Edit Name"
                variant="outlined"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          ) : (
            <h3>{data[0]?.name}</h3>
          )}

          <p>
            Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:
          </p>
          <ul className="m-0">
            <li>
              Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm
            </li>
            <li>
              Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy
              tại Đại học Y khoa Hà Nội
            </li>
            <li>
              Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ
              Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh
              Viện E.
            </li>
            <li>
              Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội
              Cơ Xương Khớp, Hội Thấp khớp học,...
            </li>
            ....
          </ul>
          {!state && (
            <a onClick={() => setState(true)} href="#">
              Xem thêm
            </a>
          )}
          {state && (
            <div>
              <h5>Bệnh Cơ Xương Khớp</h5>
              <ul>
                <li>Gout</li>
                <li>
                  Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ
                </li>
                <li>Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân</li>
                <li>
                  Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy,
                  Tràn dịch khớp vai
                </li>
                <li>Loãng xương, đau nhức xương</li>
                <li>Viêm xương, gai xương</li>
                <li>Viêm cơ, Teo cơ, chứng đau mỏi cơ </li>
                <li>Yếu cơ, Loạn dưỡng cơ</li>
                <li>....</li>
              </ul>
            </div>
          )}
          {state && (
            <a onClick={() => setState(false)} href="#">
              Ẩn bớt
            </a>
          )}
        </div>
        <div className="main">
          <div className="item1">
            <div className="item1left">
              <Avatar>H</Avatar>
              <div>
                <a href="#">Xem thêm</a>
              </div>
            </div>
            <div className="item1right">
              <h5>
                <a href="#">Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan</a>
              </h5>
              <p>
                Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện E Hà Nội Được phong
                tặng Danh hiệu Thầy thuốc Ưu tú Bác sĩ khám cho người bệnh từ 16
                tuổi trở lên
              </p>
              <p>
                <HiOutlineMapPin /> Hà Nội
              </p>
            </div>
          </div>
          <div className="item2">
            <BasicSelect />
            <Button variant="contained">Đặt lịch khám</Button>
            <p>
              ĐỊA CHỈ KHÁM Hệ thống Y tế Thu Cúc cơ sở Thụy Khuê 286 Thụy Khuê,
              quận Tây Hồ, Hà Nội
            </p>
            <h5>GIÁ KHÁM:150000</h5>
            <h5>LOẠI BẢO HIỂM ÁP DỤNG</h5>
          </div>
        </div>
        <div className="main">
          <div className="item1">
            <div className="item1left">
              <Avatar>H</Avatar>
              <div>
                <a href="#">Xem thêm</a>
              </div>
            </div>
            <div className="item1right">
              <h5>
                <a href="#">Bác sĩ Chuyên khoa II Nguyễn Thị Kim Xuyến</a>
              </h5>
              <p>
                Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện E Hà Nội Được phong
                tặng Danh hiệu Thầy thuốc Ưu tú Bác sĩ khám cho người bệnh từ 16
                tuổi trở lên
              </p>
              <p>
                <HiOutlineMapPin /> Hà Nội
              </p>
            </div>
          </div>
          <div className="item2">
            <BasicSelect />
            <Button variant="contained">Đặt lịch khám</Button>
            <p>
              ĐỊA CHỈ KHÁM Hệ thống Y tế Thu Cúc cơ sở Thụy Khuê 286 Thụy Khuê,
              quận Tây Hồ, Hà Nội
            </p>
            <h5>GIÁ KHÁM:150000</h5>
            <h5>LOẠI BẢO HIỂM ÁP DỤNG</h5>
          </div>
        </div>
      </Container>
    </div>
  );
}
const Container = styled.div`
  .main {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    border-radius: 8px;
    padding: 10px 20px;
    margin-bottom: 20px;
    .item1 {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 10px;
      .item1left {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .item1right {
        flex: 5;
        a {
          text-decoration: none;
        }
      }
    }
    .item2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10px 0;
      button {
        width: 40%;
      }
    }
  }
`;

export default DepartmentDetail;
