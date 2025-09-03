import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

const AddApplication = () => {
  const [isAdding, setIsAdding] = useState(false)

  const [candidateName, setCandidateName] = useState('')
  const [role, setRole] = useState('')
  const [yearsExperience, setYearsExperience] = useState('')
  const [resumeLink, setResumeLink] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (!candidateName || !role || !yearsExperience || !resumeLink) {
      return toast.error('Please fill all required fields')
    }

    setIsAdding(true)
    try {
      const application = { candidateName, role, yearsExperience, resumeLink }

      const { data } = await axios.post('/api/applications/add', application)
      if (data.success) {
        toast.success('Application added successfully')
        setCandidateName('')
        setRole('')
        setYearsExperience('')
        setResumeLink('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    // Full screen container to center content vertically & horizontally
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={onSubmitHandler}
        className="max-w-md w-full bg-white p-8 rounded shadow-lg space-y-6"
      >
        <div>
          <label className="block mb-1 font-semibold">Candidate Name *</label>
          <input
            type="text"
            required
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter candidate's full name"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Role *</label>
          <input
            type="text"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter role applied for"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Years of Experience *</label>
          <input
            type="number"
            min="0"
            required
            value={yearsExperience}
            onChange={(e) => setYearsExperience(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter years of experience"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Resume Link *</label>
          <input
            type="url"
            required
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter URL to resume"
          />
        </div>

        <button
          type="submit"
          disabled={isAdding}
          className="bg-primary text-white py-2 px-6 rounded disabled:opacity-50"
        >
          {isAdding ? 'Adding...' : 'Add Application'}
        </button>
      </form>
    </div>
  )
}

export default AddApplication
