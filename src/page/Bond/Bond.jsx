import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { HiOutlineMapPin } from "react-icons/hi2";

function Bond(props) {
  const [state, setState] = useState(false);
  return (
    <div style={{ background: "#ccc" }}>
      <Container className="container">
        <div>
          <h3>Cơ Xương Khớp</h3>
          <h5>Bác sĩ Cơ Xương Khớp giỏi</h5>
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
          <div className="item2">2</div>
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
      align-items: center;
    }
  }
`;

export default Bond;
