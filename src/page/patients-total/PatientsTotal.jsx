import React from "react";
import { Outlet } from "react-router-dom";

function PatientsTotal(props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PatientsTotal;
