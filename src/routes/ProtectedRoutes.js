import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({children}) => {
    const isAuth = JSON.parse(localStorage.getItem("Authenticated") || false);
    return isAuth? children : <Navigate to="/" />;
}
