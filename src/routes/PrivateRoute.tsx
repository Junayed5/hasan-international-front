import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }:any) => {
    const { user, isUserLoading } = useAuth();
    const location = useLocation();
    if (isUserLoading) return <div>Loading...</div>;
    
    if (user) return children;
    return <Navigate to='/sing-in' state={{ from: location }} replace />
};

export default PrivateRoute;