import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleLink = styled.li`
  a {
    color: unset;
    text-decoration: none;
  }
`;

function BreadCrumbs({
  getBreadCrumbs = null,
  getChildBreadCrumbs = null,
}) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <StyleLink className="breadcrumb-item">
          <Link to="/">Home</Link>
        </StyleLink>
        {getBreadCrumbs ? (
          <StyleLink className="breadcrumb-item active">
            <a href="#">{getBreadCrumbs()}</a>
          </StyleLink>
        ) : (
          null
        )}
        {getChildBreadCrumbs ? (
          <>
            <StyleLink className="breadcrumb-item ">
              <a href="#">{getChildBreadCrumbs()[0]?.titleTotal}</a>
            </StyleLink>
            <StyleLink className="breadcrumb-item active">
              <a href="#">{getChildBreadCrumbs()[0]?.title}</a>
            </StyleLink>
          </>
        ) : (
          null
        )}
      </ol>
    </nav>
  );
}

export default BreadCrumbs;
