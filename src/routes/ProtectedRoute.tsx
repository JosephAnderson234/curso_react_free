import { Navigate, Outlet } from "react-router-dom";
import useToken from "../hooks/useToken";

type PropsProtectedRoutes = {
    children?: React.ReactNode;
    url?: string;
    requiredRole?: string;
}

const ProtectedRoutes = ({ children, url = "/login"  }: PropsProtectedRoutes) => {

    const { token } = useToken();
    if (!token ) {
        return <Navigate to={url} />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoutes;