import React from 'react';
import {Outlet} from 'react-router-dom'

function DepartMentTotal(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default DepartMentTotal;