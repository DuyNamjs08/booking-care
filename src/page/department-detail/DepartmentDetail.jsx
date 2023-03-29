import React from "react";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { useLocation } from "react-router-dom";
import { dataBreadCrumbs } from "../../constant";

function DepartmentDetail(props) {
  const path = useLocation();

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
      return "sai";
    }
  };

  return (
    <div className="container">
      <BreadCrumbs getChildBreadCrumbs={getChildBreadCrumbs} />
      DepartmentDetail
    </div>
  );
}

export default DepartmentDetail;
