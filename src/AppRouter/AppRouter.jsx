import { Route, Routes } from 'react-router'
import RefreshInterval from '../refreshInterval/refreshInterval'
import Employee from '../employee/Employee'
import Accordion from '../Accordion/Accordion'
import ProgressBarSample2 from '../ProgressBarSample2/ProgressBarSample2'
function AppRouter() {
    return (
        
            <Routes>
                <Route path="/refresh" element={<RefreshInterval />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/progressbar2" element={<ProgressBarSample2 />} />

            </Routes>
    )
}

export default AppRouter