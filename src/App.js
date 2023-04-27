import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './Components/DashboardLayout';
import DashboardHome from './Screens/DashboardHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardLayout/>}>
          <Route path='/' element={<DashboardHome/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
