import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import logo1 from "../assets/bocongthuong.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import { FiMapPin, FiCheck, FiSmartphone } from "react-icons/fi";

const Container = styled.div`
  background: #efefef;
`;
const Container2 = styled.div`
  background: #64b9e5;
  color: #fff;
`;
const StyleFooter = styled.div`
  display: flex;
  padding: 30px 15px 0;
`;
const StyleFooterItem1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const StyleFooterItem2 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const StyleImg = styled.img.attrs({
  src: `${logo}`,
})`
  width: 200px;
  object-fit: contain;
`;
const StyleImg1 = styled.img.attrs({
  src: `${logo1}`,
})`
  width: 78px;
  object-fit: contain;
`;
const StyleLink = styled.div`
  color: #45c3d2;
  cursor: pointer;
`;
const StyleFooter2 = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 10px 15px 30px;
`;
const StyleFooter3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;
const ImgIcon1 = styled.img.attrs({
  src: `${facebook}`,
})`
  width: 32px;
  object-fit: contain;
`;
const ImgIcon2 = styled.img.attrs({
  src: `${youtube}`,
})`
  width: 32px;
  object-fit: contain;
`;
const StyleIcon = styled.div`
  display: flex;
  gap: 10px;
`;
function Footer(props) {
  return (
    <>
      <Container>
        <StyleFooter className="container">
          <StyleFooterItem2>
            <StyleImg src="" alt="" />
            <h6>Công ty Cổ phần Công nghệ BookingCare</h6>
            <p className="m-0">
              <FiMapPin /> Tầng 6, Tòa nhà D'Office, tổ 28, P. Dịch Vọng, Q. Cầu
              Giấy, Tp. Hà Nội
            </p>
            <p className="m-0">
              <FiCheck /> ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày
              16/03/2015
            </p>
            <div>
              <StyleImg1 alt="" />
              <StyleImg1 alt="" />
            </div>
          </StyleFooterItem2>
          <StyleFooterItem1>
            <StyleLink>Liên hệ hợp tác</StyleLink>
            <StyleLink>Gói chuyển đổi số doanh nghiệp</StyleLink>
            <StyleLink>Tuyển dụng</StyleLink>
            <StyleLink>Câu hỏi thường gặp</StyleLink>
            <StyleLink>Điều khoản sử dụng</StyleLink>
            <StyleLink>Quy trình hỗ trợ giải quyết khiếu nại</StyleLink>
            <StyleLink>Quy chế hoạt động</StyleLink>
          </StyleFooterItem1>
          <StyleFooterItem1>
            <div className="mb-3">
              <h6>Trụ sở tại Hà Nội</h6>
              <p className="m-0">
                {" "}
                Tầng 6, Tòa nhà D'Office, tổ 28, P. Dịch Vọng, Q. Cầu Giấy, Tp.
                Hà Nội
              </p>
            </div>
            <div className="mb-3">
              <h6>Văn phòng tại TP Hồ Chí Minh</h6>
              <p className="m-0"> Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
            </div>
            <div className="mb-3">
              <h6>Hỗ trợ khách hàng</h6>
              <p className="m-0"> support@bookingcare.vn (7h -20h)</p>
            </div>
          </StyleFooterItem1>
        </StyleFooter>
        <StyleFooter2 className="container">
          <FiSmartphone /> Tải ứng dụng BookingCare cho điện thoại hoặc máy tính
          bảng:{" "}
          <StyleLink className="ms-3"> Android-Iphone/ipad-Khác</StyleLink>
        </StyleFooter2>
      </Container>
      <Container2>
        <StyleFooter3 className="container">
          <div>© 2023 BookingCare.</div>
          <StyleIcon>
            <ImgIcon1 />
            <ImgIcon2 />
          </StyleIcon>
        </StyleFooter3>
      </Container2>
    </>
  );
}

export default Footer;
