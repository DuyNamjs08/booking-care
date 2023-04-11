import React, { useState } from "react";
import { FcHeadset } from "react-icons/fc";
import logo from "../assets/full-logo.png";
import styled from "styled-components";
import { headerData } from "../constant";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

const StyleHeader = styled.div`
  height: 76px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
const StyleImg = styled.img.attrs({
  src: `${logo}`,
})`
  width: 160px;
  object-fit: contain;
`;
const StyleTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const StyleText = styled.div`
  font-size: 14px;
  color: "#ccc";
`;
const StyleIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
const StyleSupport = styled.div`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const StyleLink = styled.div`
  cursor: pointer !important;
  a {
    cursor: pointer !important;
    color: #000;
    text-decoration: none;
  }
`;
function Header(props) {
  const [data, setData] = useState([]);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token && role === "1") {
      setData(headerData.filter((item) => item.role.includes("1")));
    } else if (token && role === "2") {
      setData(headerData.filter((item) => item.role.includes("2")));
    } else {
      setData(headerData.filter((item) => item.role.includes("3")));
    }
  }, [role, token]);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyleHeader className="container d-flex gap-3">
      <div className="d-flex gap-3 align-items-center">
        <Link to="/">
          <StyleImg src={logo} alt="" />
        </Link>
      </div>
      <div className="d-flex gap-3 align-items-center">
        {data.map((item) => {
          if (true) {
            return (
              <StyleLink key={item.id} className="link">
                <Link to={item.path}>
                  <StyleTitle>{item.title}</StyleTitle>
                  <StyleText>{item.text}</StyleText>
                </Link>
              </StyleLink>
            );
          }
        })}
      </div>
      {/* <div className="d-flex align-items-center gap-1">
        <StyleIcon>
          <FcHeadset />
        </StyleIcon>
        <StyleSupport className="mb-0 link">
          <StyleLink>
            <Link to="/benh-nhan">Bệnh nhân</Link>
          </StyleLink>
        </StyleSupport>
      </div> */}
      <div className="d-flex align-items-center gap-1">
        <StyleSupport className="mb-0 link">
          <StyleLink>
            {token ? (
              <Tooltip title="Logout" onClick={handleLogout}>
                <IconButton>
                  <Avatar>H</Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              <Link to="/login">Đăng nhập</Link>
            )}
          </StyleLink>
        </StyleSupport>
      </div>
    </StyleHeader>
  );
}

export default Header;
