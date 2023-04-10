import React from 'react';
import {Outlet} from 'react-router-dom'

function BillTotals(props) {
    return (
        <div>
         <Outlet />
        </div>
    );
}

export default BillTotals;