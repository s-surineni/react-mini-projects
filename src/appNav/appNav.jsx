import { NavLink } from "react-router";

export default function AppNav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/employee">Employee</NavLink>
        </nav>
    )
}