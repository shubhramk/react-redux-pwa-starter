import React from 'react';

import classes from './Layout.module.scss';
import Navigation from './../../common/components/navigation/Navigation';

const layout = props => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<span className={classes.NavigationContainer}>
						<Navigation />
					</span>
					<div className="container-fluid">{props.children}</div>
				</div>
			</div>
		</>
	);
};

export default layout;
