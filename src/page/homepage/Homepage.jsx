import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../../assets/chamsoctuxa.jpg";
import appstore from "../../assets/appp.svg";
import googleplay from "../../assets/gg.png";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import {
  dataHomepage,
  dataBanner,
  dataCarousel1,
  dataDashboard,
} from "../../constant";
import Carousel from "../../components/carousel/Carousel";
import Ifame from "../../components/iframe/Ifame";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Loading from "../loading/Loading";
import Banner from "../../components/banner/Banner";
import footer1 from "../../assets/footersub.png";
import footer2 from "../../assets/footer2.png";
import footer3 from "../../assets/footer3.png";

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;
const StyleBanner = styled.div`
  padding: 45px 0;
  height: 50vh;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.25),
    rgba(255, 255, 255, 0.1)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyleTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #333;
`;
const StyleformInput = styled.div`
  width: 30vw;
  background: #f7d800;
  color: #000;
  outline: none;
  border-radius: 25px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 30px;
`;
const StyleInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
`;
const StyleImg = styled.img.attrs({
  src: `${appstore}`,
})`
  width: 128px;
  object-fit: contain;
`;
const StyleImg1 = styled.img.attrs({
  src: `${googleplay}`,
})`
  width: 160px;
  object-fit: contain;
`;
const StyleImg2 = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;
const StyleListContainer = styled.div`
  height: 50vh;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 1)
  );
  padding-top: 30px;
  padding-bottom: 20px;
`;
const StyleDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 0 auto;
  transition: all ease-in-out 200ms;
  &:hover {
    background: #ebb02d;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
const StyleListHomepage = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
const StyleLi = styled.li`
  list-style: none;
  width: 230px;
  text-align: center;
  cursor: pointer;
`;
const StyleCustomCarousel = styled.div`
  padding: 30px 0;
  background: #f5f5f5;
  border-bottom: 3px solid #efeef5;
`;
const StyleCustomCarousel1 = styled.div`
  padding: 30px 0;
  background: #fff;
  border-bottom: 3px solid #efeef5;
`;
const StyleUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 10px;
  margin-top: 40px;
`;

function Homepage(props) {
  const [placer, setPlacer] = useState("Tìm phòng khám");
  useEffect(() => {
    const runTime = setInterval(() => {
      setPlacer(placer === "Tìm phòng khám" ? "Tìm bác sỹ" : "Tìm phòng khám");
    }, 2000);
    return () => {
      clearInterval(runTime);
    };
  }, [placer]);
  return (
    <>
      <Banner />
      {/* <Container>
        <Loading />
        <StyleBanner>
          <StyleTitle>Nền tảng y tế </StyleTitle>
          <StyleTitle>chăm sóc sức khỏe toàn diện</StyleTitle>
          <StyleformInput>
            <FiSearch />
            <StyleInput type="text" placeholder={placer} />
          </StyleformInput>
          <div>
            <StyleImg />
            <StyleImg1 />
          </div>
        </StyleBanner>
        <StyleListContainer>
          <StyleListHomepage>
            {dataHomepage.map((item) => (
              <StyleLi key={item.id}>
                <StyleDiv>
                  <StyleImg2 src={item.icon} />
                </StyleDiv>
                <h6>{item.title}</h6>
              </StyleLi>
            ))}
          </StyleListHomepage>
        </StyleListContainer>
      </Container> */}
      <div className="container my-5">
        <Carousel
          width={"22rem"}
          data={dataBanner}
          iconCarousel={<FiChevronRight />}
          options={settings}
        />
      </div>
      <StyleCustomCarousel>
        <div className=" container d-flex justify-content-between align-items-center my-4">
          <h4>Bác sĩ từ xa qua Video</h4>
          <button type="button" class="btn btn-primary">
            Xem thêm
          </button>
        </div>
        <div className="container">
          <Carousel
            width={"16rem"}
            data={dataCarousel1}
            iconCarousel={null}
            options={settings1}
          />
        </div>
      </StyleCustomCarousel>
      <StyleCustomCarousel1>
        <div className=" container d-flex justify-content-between align-items-center my-4">
          <h4>Chuyên khoa phổ biến</h4>
          <button type="button" class="btn btn-primary">
            Xem thêm
          </button>
        </div>
        <div className="container">
          <Carousel
            width={"16rem"}
            data={dataCarousel1}
            iconCarousel={null}
            options={settings1}
          />
        </div>
      </StyleCustomCarousel1>
      <StyleCustomCarousel>
        <div className=" container d-flex justify-content-between align-items-center my-4">
          <h4>Cơ sở y tế nổi bật</h4>
          <button type="button" class="btn btn-primary">
            Tìm kiếm
          </button>
        </div>
        <div className="container">
          <Carousel
            width={"16rem"}
            data={dataCarousel1}
            iconCarousel={null}
            options={settings1}
          />
        </div>
      </StyleCustomCarousel>
      <StyleCustomCarousel1>
        <div className=" container d-flex justify-content-between align-items-center my-4">
          <h4>Bác sĩ nổi bật tuần qua</h4>
          <button type="button" class="btn btn-primary">
            Tìm kiếm
          </button>
        </div>
        <div className="container">
          <Carousel
            width={"16rem"}
            data={dataCarousel1}
            iconCarousel={null}
            options={settings1}
          />
        </div>
      </StyleCustomCarousel1>
      <div className="container my-4 d-flex">
        <div>
          <Ifame
            src="https://www.youtube.com/embed/FyDQljKtWnI"
            width={"570"}
            height={"320"}
          />
        </div>
        <div>
          <StyleUl>
            {dataDashboard.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt="" style={{ objectFit: "contain" }} />
              </li>
            ))}
          </StyleUl>
        </div>
      </div>
      <StyleSubheader>
        <div className="footer1">
          <img src={footer1} alt="" />
          <h2>Câu lạc bộ khách hàng ưu tiên</h2>
        </div>
        <div className="footer2">
          <img src={footer2} alt="" />
          <img src={footer3} alt="" />
        </div>
      </StyleSubheader>
      <StyeleDiv></StyeleDiv>
    </>
  );
}
const StyeleDiv = styled.div`
  height: 40px;
  background-color: #fff;
`;
const StyleSubheader = styled.div`
  background-color: #232d42;
  border-top-right-radius: 35px;
  padding: 60px 20px 40px 40px;
  display: flex;
  justify-content: space-between;
  .footer1 {
    width: 20%;
    h2 {
      color: #fff;
    }
  }
  .footer2 {
    width: 70%;
    display: flex;
    gap: 20px;
    img {
      border-radius: 20px;
    }
  }
`;
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};
const settings1 = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        // right: "0px",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <div className="text-carousel">
        <FiChevronRight />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        // left: "0px",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <div className="text-carousel">
        <FiChevronLeft />
      </div>
    </div>
  );
}
export default Homepage;
