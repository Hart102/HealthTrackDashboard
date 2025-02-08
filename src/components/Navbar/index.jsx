import { Link } from "react-router-dom"
import { Cog6ToothIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { navLinks } from "./links"
import Logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="w-full rounded-full flex items-center justify-between bg-white px-6 py-4">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Tech.Care Logo" width={200} height={40} />
      </div>

      <div className="hidden lg:flex flex-wrap space-x-8 text-sm font-semibold">
        {navLinks.map(({ label, icon: Icon, href, className }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center space-x-2 font-semibold cursor-pointer ${className} text-cs-gray-100-50 hover:text-cyan-500`}>
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-3 cursor-pointer">
        <img src="./jose.png" alt="" />
        <div className="hidden lg:flex flex-col">
          <span className="text-sm font-bold text-gray-900">Dr. Jose Simmons</span>
          <small className="text-sm text-cs-gray-100">General Practitioner</small>
        </div>
        <Cog6ToothIcon className="w-6 h-6" />
        <EllipsisVerticalIcon className="w-6 h-6" />
      </div>
    </nav>
  )
}

export default Navbar