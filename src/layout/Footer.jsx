import React from "react";
import styled from "styled-components";
import logo from "../assets/full-logo.png";
import logo1 from "../assets/bocongthuong.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import { FiMapPin, FiCheck, FiSmartphone } from "react-icons/fi";

const Container = styled.div`
  background: #232d42;
`;
const Container2 = styled.div`
  background: #64b9e5;
  color: #fff !important;
`;
const StyleFooter = styled.div`
  display: flex;
  padding: 30px 15px 0;
  color: #fff !important;
`;
const StyleFooterItem1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #fff !important;
`;
const StyleFooterItem2 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #fff !important;
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
const StyleLink = styled.a`
  color: #45c3d2;
  cursor: pointer;
  text-decoration: none;
`;
const StyleFooter2 = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 10px 15px 30px;
  color: #fff !important;
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
            <h6>Công ty Cổ phần Công nghệ Med247</h6>
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
            <StyleLink href="https://bookingcare.vn/hop-tac-voi-bookingcare">
              Liên hệ hợp tác
            </StyleLink>
            <StyleLink href="https://bookingcare.vn/hop-tac-voi-bookingcare">
              Gói chuyển đổi số doanh nghiệp
            </StyleLink>
            <StyleLink href="https://bookingcare.vn/hop-tac-voi-bookingcare">
              Tuyển dụng
            </StyleLink>
            <StyleLink href="https://bookingcare.vn/hop-tac-voi-bookingcare">
              Câu hỏi thường gặp
            </StyleLink>
            <StyleLink href="https://bookingcare.vn/hop-tac-voi-bookingcare">
              Điều khoản sử dụng
            </StyleLink>
            <StyleLink href="https://bookingcare.vn/hop-tac-voi-bookingcare">
              Quy trình hỗ trợ giải quyết khiếu nại
            </StyleLink>
            <StyleLink href="https://bookingcare.vn/hop-tac-voi-bookingcare">
              Quy chế hoạt động
            </StyleLink>
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
              <p className="m-0"> support@Med24h.vn (7h -20h)</p>
            </div>
          </StyleFooterItem1>
        </StyleFooter>
        <StyleFooter2 className="container">
          <FiSmartphone /> Tải ứng dụng Med24h cho điện thoại hoặc máy tính
          bảng:{" "}
          <StyleLink className="ms-3 mx-3"> Android-Iphone/ipad-Khác</StyleLink>
          <StyleIcon>
            <ImgIcon1 />
            <ImgIcon2 />
          </StyleIcon>
        </StyleFooter2>
      </Container>
    </>
  );
}

export default Footer;
