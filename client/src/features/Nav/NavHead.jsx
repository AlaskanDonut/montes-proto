import { CgArrowLongLeft } from "react-icons/cg";

export default function NavHead() {
  return (
    <div className="flex justify-between items-center mb-4 px-5">
      <CgArrowLongLeft className="*:fill-slate-500" fill="red" />
      <h1 className="text-lg text-slate-500 font-light">Montes</h1>
      <span className="size-8 rounded-full overflow-hidden bg-slate-300">
        <img className="size-full"
        src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </span>
    </div>
  )
}