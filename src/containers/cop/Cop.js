import React, { Suspense } from 'react';
import {
	Switch,
	Route,
	useRouteMatch,
	Redirect,
	withRouter,
	useParams,
} from 'react-router-dom';
import './Cop.scss';
import Loader from './../../common/components/loader/Loader';
import Dashboard from './dashboard/Dashboard';
import CopState from './state/CopState';

function Cop(props) {
	let { path } = useRouteMatch();
	return (
		<>
			<Switch>
				<Route exact path={path + '/state'} component={CopState} />
				<Route exact path={path + '/dashboard'} component={Dashboard} />
				<Redirect to={path + '/dashboard'} />
			</Switch>
		</>
	);
}

export default withRouter(Cop);
