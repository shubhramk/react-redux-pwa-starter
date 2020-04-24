import React, { Suspense } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import './Home.scss';
import Loader from './../../common/components/loader/Loader';

const Cop = React.lazy(() => import('./../cop/Cop'));
const Marketing = React.lazy(() => import('./../marketing/Marketing'));
const Producers = React.lazy(() => import('./../producers/Producers'));
const PerformanceYear = React.lazy(() =>
	import('./../producers/performance-year/PerformanceYear')
);

function Home() {
	let { path } = useRouteMatch();
	return (
		<>
			<Switch>
				<Route
					exact
					path={path + '/producers/:accountID'}
					render={props => (
						<Suspense fallback={<Loader />}>
							<PerformanceYear {...props} />
						</Suspense>
					)}
				/>
				<Route
					exact
					path={path + '/producers'}
					render={props => (
						<Suspense fallback={<Loader />}>
							<Producers {...props} />
						</Suspense>
					)}
				/>
				<Route
					path={path + '/producers/cop/:accountID/:year'}
					render={props => (
						<Suspense fallback={<Loader />}>
							<Cop {...props} />
						</Suspense>
					)}
				/>
				<Route
					path={path + '/producers/marketing/:accountID/:year'}
					render={props => (
						<Suspense fallback={<Loader />}>
							<Marketing {...props} />
						</Suspense>
					)}
				/>
				<Redirect to={path + '/producers'} />
			</Switch>
		</>
	);
}

export default Home;
