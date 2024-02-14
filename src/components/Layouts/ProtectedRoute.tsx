import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentToken } from "../../redux/features/Auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  const user = verifyToken(token);
  console.log(user);
  return children;
};

export default ProtectedRoute;
