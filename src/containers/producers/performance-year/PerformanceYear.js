import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './PerformanceYear.module.scss';

class PerformanceYear extends Component {
	constructor(props) {
		super(props);
		this.accountID = props.match.params.accountID;

		this.dashBoardCopLink = '/home/producers/cop/' + this.accountID + '/2020';
		this.dashBoardMarketLink =
			'/home/producers/marketing/' + this.accountID + '/2020';
	}

	render() {
		return (
			<div className="text-center">
				<h2>YEAR LIST of {this.accountID}</h2>
				<Link to={this.dashBoardCopLink}>Go To COP Dashboard</Link>
				<Link to={this.dashBoardMarketLink}>Go To Market Dashboard</Link>
			</div>
		);
	}
}

export default PerformanceYear;
