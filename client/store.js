import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const initialState = {
  schools: [],
  currentSchool: {},
    // may do something with these loading/error states eventually...
  loading: false,
  error: false
}

// actions
const SET_SCHOOLS = 'SET_SCHOOLS'
const SET_CURRENT_SCHOOL = 'SET_CURRENT_SCHOOL'
// action creators

export const setSchools = schools => ({
  type: SET_SCHOOLS,
  schools
})

export const setCurrentSchool = school => ({
  type: SET_CURRENT_SCHOOL,
  school
})

// thunk creator
export const getSchools = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/schools')
      const schools = response.data
      dispatch(setSchools(schools))
    } catch (error) {
      console.log(error)
    }
  }
}

// reducer

const reducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case SET_SCHOOLS:
      newState.schools = action.schools
      return newState
    case SET_CURRENT_SCHOOL:
      newState.currentSchool = action.school
      return newState
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
