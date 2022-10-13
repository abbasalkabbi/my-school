import { Outlet, useLocation } from "react-router-dom";
import NavBar from '../components/NavBar'
function Layout() {
    const location = useLocation();


    return (
        
        <>
            {
                location.pathname !=='/login'?<NavBar/>:''
            }
            <Outlet />
        </>
    )
}
export default Layout;