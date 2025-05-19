import { Route, Routes } from 'react-router'
import RefreshInterval from '../refreshInterval/refreshInterval'
import Employee from '../employee/Employee'
import Accordion from '../Accordion/Accordion'
import Login1 from '../login/Login1/Login1'
import ProgressBarSample2 from '../ProgressBarSample2/ProgressBarSample2'
import ProgressBarSample from '../ProgressBarSample/ProgressBarSample'
import FileSystem from '../FileSystem/FileSystem'
import RenderOrder from '../RenderOrder/RenderOrder'
import UseMemoSample from '../UseMemoSample/UseMemoSample'
import PromiseSample from '../PromiseSample/PromiseSample'
import UsernameInput from '../components/UsernameInput'

function AppRouter() {
    return (
        
            <Routes>
                <Route path="/refresh" element={<RefreshInterval />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/login1" element={<Login1 />} />
                <Route path="/progressbar2" element={<ProgressBarSample2 />} />
                <Route path="/progressbar" element={<ProgressBarSample />} />
                <Route path="/fileSystem" element={<FileSystem />} />
                <Route path="/render-order" element={<RenderOrder />} />
                <Route path="/use-memo" element={<UseMemoSample />} />
                <Route path="/promise" element={<PromiseSample />} />
                <Route path="/username-input" element={<UsernameInput />} />
            </Routes>
    )
}

export default AppRouter