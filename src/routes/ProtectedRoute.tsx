import { Navigate, Outlet } from "react-router-dom";

type PropsProtectedRoutes = {
    children?: React.ReactNode;
    url?: string;
    requiredRole?: string;
}

const ProtectedRoutes = ({ children, url = "/login"  }: PropsProtectedRoutes) => {

    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    if (!isAuthenticated) {
        return <Navigate to={url} />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoutes;