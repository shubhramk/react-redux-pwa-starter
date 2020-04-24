import React, { Component } from 'react';
import classes from './Producers.module.scss';
import { Link } from 'react-router-dom';
import OnlineStatus from '../../hoc/online-status/onlineStatus';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Producers extends Component {
	constructor(props) {
		super(props);
		this.randomID = Math.floor(Math.random() * 100 + 1);
		this.randomLink = '/home/producers/' + this.randomID;
		props.getProducers();
	}
	render() {
		const items = this.props.producers.map((item, key) => (
			<div className="col">
				<div className="card">
					<div className="card-body">{item.name}</div>
				</div>
			</div>
		));
		return (
			<div className="text-center">
				<h2>PRODUCER LIST</h2>
				<div className="container">
					<div className="row row-cols-3">{items}</div>
				</div>
				{/* <OnlineStatus>{status => (status ? 'on' : 'off')}</OnlineStatus> */}
				<Link to={this.randomLink}>Go To Producer {this.randomID}</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		producers: state.producers.list,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProducers: () => dispatch(actions.getProducers()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Producers);
