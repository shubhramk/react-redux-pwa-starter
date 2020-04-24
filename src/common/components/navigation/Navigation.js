import React, { Component, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import './Navigation.scss';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = { isMenuOpen: false };
	}
	setMenuState = status => event => {
		this.setState({ isMenuOpen: status });
	};
	render() {
		return (
			<>
				<Drawer
					anchor="left"
					open={this.state.isMenuOpen}
					onClose={this.setMenuState(false)}
				>
					{/* Navigation Content Start */}
					<i
						className="fa fa-close"
						aria-hidden="true"
						onClick={this.setMenuState(false)}
					></i>
					<div> Welcome , {this.props.userInfo.email}</div>
					<div className="navigation-container">
						<ul>
							<li>
								<Link to="/home/producers/cop/4/2020/dashboard">Dashboard</Link>
							</li>
							<li>
								<Link to="/home/producers/4">Producers</Link>
							</li>
						</ul>
						<div className="btn-logout" onClick={this.props.onLogout}>
							Log out
						</div>
					</div>
					{/* Navigation Content End */}
				</Drawer>
				<i
					className="fa fa-bars"
					aria-hidden="true"
					onClick={this.setMenuState(true)}
				></i>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		userInfo: state.auth.userInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(actions.logout()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Navigation));
