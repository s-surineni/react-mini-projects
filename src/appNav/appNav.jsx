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
            <NavLink to="/fileSystem">FileSystem</NavLink>
            <NavLink to="/render-order">Render Order</NavLink>
            <NavLink to="/use-memo">Use Memo</NavLink>
            <NavLink to="/promise">Promise</NavLink>
            <NavLink to="/username-input">Username Input</NavLink>
            <NavLink to="/counter-non-functional">Counter Non-Functional</NavLink>
        </nav>
    )
}