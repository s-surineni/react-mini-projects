import { NavLink } from "react-router";
import "./appNav.css";

export default function AppNav() {
    return (
        <nav className="app-nav">
            <div className="nav-container">
                <NavLink to="/refresh" className="nav-link">Refresh</NavLink>
                <NavLink to="/employee" className="nav-link">Employee</NavLink>
                <NavLink to="/accordion" className="nav-link">Accordion</NavLink>
                <NavLink to="/login1" className="nav-link">Login1</NavLink>
                <NavLink to="/progressbar2" className="nav-link">Progressbar2</NavLink>
                <NavLink to="/progressbar" className="nav-link">Progressbar</NavLink>
                <NavLink to="/fileSystem" className="nav-link">FileSystem</NavLink>
                <NavLink to="/render-order" className="nav-link">Render Order</NavLink>
                <NavLink to="/use-memo" className="nav-link">Use Memo</NavLink>
                <NavLink to="/promise" className="nav-link">Promise</NavLink>
                <NavLink to="/use-callback" className="nav-link">Use Callback</NavLink>
                <NavLink to="/username-input" className="nav-link">Username Input</NavLink>
                <NavLink to="/counter-non-functional" className="nav-link">Counter Non-Functional</NavLink>
            <NavLink to="/use-transition">With UseTransition</NavLink>
            <NavLink to="/use-transition-without">Without UseTransition</NavLink>
            <NavLink to="/use-transition-react">Use Transition React</NavLink>
            <NavLink to="/folder-manager" className="nav-link">Folder Manager</NavLink>
            <NavLink to="/file-system2" className="nav-link">Folder Manager2</NavLink>
            <NavLink to="/stopwatch" className="nav-link">Stopwatch</NavLink>

            </div>
        </nav>
    )
}
