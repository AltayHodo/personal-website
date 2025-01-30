import './styles/App.css'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <h1>Welcome to my website</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default App
