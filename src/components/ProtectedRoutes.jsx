import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = () => {
  const active =true ;
  if(active){
      return <Outlet />
  } else { 
      return <Navigate to='/' />
  } 
};

export default ProtectedRoutes;