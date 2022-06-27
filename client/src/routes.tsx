import React from "react";
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { isAuthenticated } from "./auth";

const PrivateRoutes = () => {
    const location = useLocation();
    //   const { authLogin } = useContext();

    return isAuthenticated()
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location }} />;
}

export { PrivateRoutes };