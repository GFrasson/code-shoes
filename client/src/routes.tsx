import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from "./auth";

const PrivateRoutes = () => {
    const location = useLocation();
    const auth = useContext(AuthContext);

    return auth.authenticated
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location }} />;
}

export { PrivateRoutes };