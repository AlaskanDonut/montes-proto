import { useState } from 'react'
// Icons
import { AiOutlineDown } from "react-icons/ai";

export default function NavSection({text, children}) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <hr className="w-20 m-auto my-5 text-center border-gray-200" />
      {children}
    </>
  )
}