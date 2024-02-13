import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const PrivateRoute:React.FC = () => {
  
  return (
    <> 
        <Navbar/>
        <Outlet/>
    </>
  );
}

export default PrivateRoute;
