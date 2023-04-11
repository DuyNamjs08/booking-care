import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FetchPamacy } from "../../redux/authSlice";
import Loading from "../../page/loading/Loading";
import { toast } from "react-toastify";

function Pamacy(props) {
  const token = localStorage.getItem("token");
  const idUser = localStorage.getItem("idUser");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const GetData = async (value) => {
    setLoading(true);
    try {
      await dispatch(FetchPamacy(value))
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
    window.scroll(0, 0);
    if (token) {
      GetData({ token, url: idUser });
    } else {
      toast.warning("bạn cần đăng nhập để xem đơn thuốc");
    }
  }, [token, active]);
  return (
    <Container className="container">
      {data.length > 0
        ? data.map((item) => (
            <div>
              <h5>Tên Đơn thuốc:{item?.name}</h5>
              <h5>Ngày Tạo : {item?.totalPrice}</h5>
              <h5>Số Tiền : {item?.updatedAt}</h5>
            </div>
          ))
        : ""}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  margin-top: 40px;
`;

export default Pamacy;
