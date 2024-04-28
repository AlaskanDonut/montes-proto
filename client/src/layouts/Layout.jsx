// Features
import SideNav from '../features/Nav/Nav.jsx'
// React Router
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex-basis fixed flex h-svh w-full basis-full">
      <div className="w-96 pt-5 pl-5 pr-5">
        <SideNav />
      </div>
      <div className="w-full overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}
