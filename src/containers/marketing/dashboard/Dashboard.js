import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

class Dashboard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const accountID = this.props.match.params.accountID;
		const year = this.props.match.params.year;
		const navLink =
			'/home/producers/marketing/' + accountID + '/' + year + '/state';
		return (
			<div className="text-center">
				<h2>MARKETING Dashboard</h2>
				<p>Account ID - {accountID}</p>
				<p>Account Year - {year}</p>

				<Link to={navLink}>Go To marketing</Link>
			</div>
		);
	}
}

export default Dashboard;
