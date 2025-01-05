import { Route, Routes } from 'react-router'
import RefreshInterval from '../refreshInterval/refreshInterval'
import Employee from '../employee/Employee'
import Accordion from '../Accordion/Accordion'
function AppRouter() {
    return (
        
            <Routes>
                <Route path="/refresh" element={<RefreshInterval />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/accordion" element={<Accordion />} />
            </Routes>
    )
}

export default AppRouter