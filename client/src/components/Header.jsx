import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  
  return (
    <div className="flex-grow bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Job Applications Are Open Now
        </h1>
        <p className="mt-4 text-xl font-medium opacity-90 max-w-xl">
          Join our team and take the next step in your career. Apply today!
        </p>
        <button
          onClick={() => navigate('/add-application')}
          className="mt-8 bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default Header
