import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-start p-4 border-b border-gray-300">
      <div>
        <NavLink to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrA2aKKvb9cSMzOX42y9Cu4fY62sxj3rMkA&s"
            alt="Logo"
            className="w-50 h-15 cursor-pointer"
          />
        </NavLink>
      </div>

      <ul className="flex gap-8 font-medium ml-36">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-semibold' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-application" className={({ isActive }) => isActive ? 'text-primary font-semibold' : ''}>
            Add Application
          </NavLink>
        </li>
        <li>
          <NavLink to="/kanban-board" className={({ isActive }) => isActive ? 'text-primary font-semibold' : ''}>
            Kanban Board
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics-dashboard" className={({ isActive }) => isActive ? 'text-primary font-semibold' : ''}>
            Analytics Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
