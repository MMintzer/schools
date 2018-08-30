import React from 'react'
import SchoolList from './SchoolList'
import SingleSchool from './SingleSchool'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSchools } from '../store'

class App extends React.Component {
  componentDidMount () {
    this.props.getSchools()
  }
  render () {
    return (
      <div id='main'>
        <h1>Schools</h1>
        <Switch>
          <Route path='/schools/:schoolId' component={SingleSchool} />
          <Route path='/schools' component={SchoolList} />
        </Switch>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  getSchools: () => dispatch(getSchools())
})
export default connect(null, mapDispatch)(App)
