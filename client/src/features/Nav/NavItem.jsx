import { NavLink } from 'react-router-dom'

export default function NavItem({ id, to, children }) {
  let defaultStyle = 'flex gap-3 items-center py-3 px-5 text-nowrap truncate rounded-lg'

  return (
    <NavLink
      className={({ isActive, isPending, isTransitioning }) =>
        [
          defaultStyle,
          isPending ? "pending" : "",
          isActive ? "bg-orange-200" : "",
          !isActive ? "bg-orange-50": "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")}
      to={to}>
      {children}
    </NavLink>
  )
}
// Something like this could work? 
// return (
//   <NavLink
//     className={`block p-2 text-nowrap truncate rounded-lg 
//     ${({ isActive }) => { isActive ? "bg-slate-300" : "bg-slate-50" }}`}
//   >
//     {children}
//   </NavLink>
// )