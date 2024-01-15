import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome,FaListAlt} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export const AdminLayout =() =>{
    return(<>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li><NavLink to="/admin/users"><FaUser /> users</NavLink></li>
                    <li><NavLink to="/admin/contacts"> <FaMessage /> contacts</NavLink></li>
                    <li><NavLink to="/service"><FaListAlt /> sevices</NavLink></li>
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet />
    </>);
}