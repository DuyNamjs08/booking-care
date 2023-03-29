import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleLink = styled.div`
  a {
    color: unset;
    text-decoration: none;
  }
  &:hover {
    color: #19376d;
  }
`;

function Card({ img, title, iconCarousel, text, width, link }) {
  return (
    <div className="card" style={{ width: width }}>
      {link ? (
        <Link to={link}>
          <img
            src={img}
            className="card-img-top"
            height={150}
            alt="..."
            style={{ objectFit: "cover" }}
          />
        </Link>
      ) : (
        <img
          src={img}
          className="card-img-top"
          height={150}
          alt="..."
          style={{ objectFit: "cover" }}
        />
      )}

      <div className="card-body">
        {link ? (
          <StyleLink>
            <Link to={link}>
              <h5 className="card-title">{title}</h5>
            </Link>
          </StyleLink>
        ) : (
          <h5 className="card-title">{title}</h5>
        )}

        <p className="card-text">{text}</p>
        {iconCarousel ? (
          <a href="#" className="btn btn-primary">
            Xem chi tiết {iconCarousel}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
