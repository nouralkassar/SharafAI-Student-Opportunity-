
// import { Navigate } from "react-router-dom";
// import { getRouteByRole } from "../shared/constants/roleRoutes";
// import { getStoredUser, getStoredToken } from "../shared/utils/authStorage";

// function ProtectedRoute({ children, allowedRoles }) {
//   try {
//     const token = getStoredToken();
//     const user = getStoredUser();
//     if (!token || !user) {
//       return <Navigate to="/login" replace />;
//     }

//     if (user.status === "pending") {
//       return <Navigate to="/pending" replace />;
//     }

//     if (user.status === "rejected") {
//       return <Navigate to="/rejected" replace />;
//     }

//     const role = user.role;

//     if (allowedRoles && role && !allowedRoles.includes(role)) {
//       return <Navigate to={getRouteByRole(role)} replace />;
//     }

//     return children;

//   } catch (err) {
//     console.error("❌ Error in ProtectedRoute:", err);
//     return <Navigate to="/login" replace />;
//   }
// }

// export default ProtectedRoute;