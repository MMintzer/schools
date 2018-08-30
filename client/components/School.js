import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const School = props => {
  const { school, deleteSchool } = props
  return (
    <div>
      <NavLink to={`/api/schools/${school.id}`}>
        <h3>{school.name}</h3>
      </NavLink>
      <button onClick={() => deleteSchool(school)}>
                DELETE SCHOOL
            </button>

    </div>
  )
}

export default School
