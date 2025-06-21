import { NavLink, Outlet } from "react-router-dom";

export default function Component2 () {
    return (
        <div className="navbarHeader">
            <h1 >Navigation Bar</h1>
            <div className="navbarLinks">
                {/* <NavLink to="/">Home</NavLink> */}
                <NavLink className="navLink" to="/Component3">Component 3</NavLink>
                <NavLink className="navLink" to="/Component4">Component 4</NavLink>
                <Outlet />
            </div>
        </div>
    );    
}

