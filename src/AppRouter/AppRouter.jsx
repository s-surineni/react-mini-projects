import { BrowserRouter, Route, Routes } from 'react-router'
import RefreshInterval from '../refreshInterval/refreshInterval'
import Employee from '../employee/Employee'
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/refresh" element={<RefreshInterval />} />
                <Route path="/employee" element={<Employee />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter