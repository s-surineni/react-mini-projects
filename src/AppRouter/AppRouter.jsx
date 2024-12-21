import { Route, Routes } from 'react-router'
import RefreshInterval from '../refreshInterval/refreshInterval'
import Employee from '../employee/Employee'
function AppRouter() {
    return (
        
            <Routes>
                <Route path="/refresh" element={<RefreshInterval />} />
                <Route path="/employee" element={<Employee />} />
            </Routes>
    )
}

export default AppRouter