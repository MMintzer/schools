import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SchoolList extends Component {
	render() {
		const schools = this.props.schools;
		return (
			<div>
				{schools.map((school) => {
					return;
					<NavLink key={school.id} to={`/api/school/${school.id}`}>
						<h1>{school.name}</h1>
					</NavLink>;
				})}
			</div>
		);
	}
}

const mapState = (state) => ({
	schools: state.schools
});

export default connect(mapState, null)(SchoolList);
