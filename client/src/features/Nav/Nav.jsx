// React Router
import { Link, NavLink } from 'react-router-dom'
// Components
import NavHead from './NavHead.jsx'
import NavCourseDetails from './NavCourseDetails.jsx'
import NavSection from './NavSection.jsx'
import NavItem from './NavItem.jsx'
// Icons
import { BiHomeAlt2 } from "react-icons/bi";
import { BiDetail } from "react-icons/bi";
import { BiListCheck } from "react-icons/bi";
import { BiReceipt } from "react-icons/bi";

const dashboardItems = [
  {
    text: 'Dashboard',
    path: '/'
  },
  {
    text: 'Courses',
    path: '/courses'
  },
  {
    text: 'Course',
    path: '/course'
  },
]

const courseItems = [
  {
    text: 'Course Home',
    path: 'home',
    icon: <BiHomeAlt2 />
  },
  {
    text: 'Syllabus',
    path: 'syllabus',
    icon: <BiDetail />
  },
  {
    text: 'Assignments',
    path: 'assignments',
    icon: <BiListCheck />
  },
  {
    text: 'Grades',
    path: 'grades',
    icon: <BiReceipt />
  },
]

const courses = [
  { name: 'PSY 270 | Abnormal Psychology', path: '/course/1' },
  { name: 'PSY 101 | Intro. to Psychology', path: '/course/2' },
  { name: 'HIST 104 | Ethics', path: '/course/3' },
]

export default function Nav() {
  return (
    <nav className="flex-column w-full h-full p-5 pt-4 rounded-t-3xl overflow-auto bg-white">
      <NavHead />
      <NavCourseDetails />
      <NavSection text="PSY 270">
        <ul>
          { courseItems.map(item => (
            <li key={Math.random().toString()} className="mb-3">
              <NavItem to={item.path}>
                {item.icon}{item.text}
              </NavItem>
            </li>
          ))}
        </ul>
      </NavSection>
      <NavSection text="Courses">
        <ul>
          { courses.map(item => (
            <li key={Math.random().toString()} className="mb-2">
              <NavItem to={item.path}>{item.name}</NavItem>
            </li>
          ))}
        </ul>
      </NavSection>
    </nav>
  )
}