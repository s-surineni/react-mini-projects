import { NavLink } from "react-router";

export default function AppNav() {
    return (
        <nav>
            <NavLink to="/refresh">Refresh</NavLink>
            <NavLink to="/employee">Employee</NavLink>
            <NavLink to="/accordion">Accordion</NavLink>
            <NavLink to="/login1">Login1</NavLink>
            <NavLink to="/progressbar2">Progressbar2</NavLink>
            <NavLink to="/progressbar">Progressbar</NavLink>
        </nav>
    )
}