import { Route, Routes } from 'react-router'
import RefreshInterval from '../refreshInterval/refreshInterval'
import Employee from '../employee/Employee'
import Accordion from '../Accordion/Accordion'
import Login1 from '../login/Login1/Login1'
function AppRouter() {
    return (
        
            <Routes>
                <Route path="/refresh" element={<RefreshInterval />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/login1" element={<Login1 />} />
            </Routes>
    )
}

export default AppRouter