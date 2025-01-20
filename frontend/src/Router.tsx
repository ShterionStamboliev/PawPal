import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import Dashboard from './components/UserDashboard/Dashboard';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/profile' element={<Dashboard />} />
        </Routes>
    );
}

export default App;
