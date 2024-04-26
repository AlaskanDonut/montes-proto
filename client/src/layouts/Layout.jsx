// Features
import SideNav from '../features/Nav/Nav.jsx'
// React Router
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="flex flex-row font-light">
      <div className="h-screen pt-5 pl-5 pr-5">
        <SideNav />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  )
}
