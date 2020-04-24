import React, { Suspense } from 'react';
import {
	Switch,
	Route,
	useRouteMatch,
	Redirect,
	withRouter,
	useParams,
} from 'react-router-dom';
import './Marketing.scss';
import Loader from './../../common/components/loader/Loader';
import Dashboard from './dashboard/Dashboard';
import MarketingState from './state/MarketingState';

function Marketing(props) {
	let { path } = useRouteMatch();
	return (
		<>
			<Switch>
				<Route exact path={path + '/state'} component={MarketingState} />
				<Route exact path={path + '/dashboard'} component={Dashboard} />
				<Redirect to={path + '/dashboard'} />
			</Switch>
		</>
	);
}

export default withRouter(Marketing);
