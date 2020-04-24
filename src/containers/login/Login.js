import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Box,
	Typography,
	makeStyles,
	Grid,
	Paper,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Loader from '../../common/components/loader/Loader';
import { httpInstance } from '../../common/services/http.service';
import withErrorHandler from '../../hoc/with-error-handler/withErrorHandler';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			React Starter {new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function Login(props) {
	const classes = useStyles();
	const [userName, setName] = useState('eve.holt@reqres.in');
	const [userPwd, setPwd] = useState('cityslicka');

	let authRedirect = null;
	if (props.isAuthenticated) {
		authRedirect = <Redirect to={props.authRedirectPath} />;
	}
	function handleSubmit(e) {
		e.preventDefault();
		props.onAuth(userName, userPwd);
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} onSubmit={handleSubmit}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							value={userName}
							onChange={e => setName(e.target.value)}
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={userPwd}
							onChange={e => setPwd(e.target.value)}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							disabled={props.loading ? true : false}
						>
							{props.loading ? <Loader /> : 'Sign In'}
						</Button>
						<Grid container>
							<Grid item xs>
								Forgot password?
							</Grid>
							<Grid item>{"Don't have an account? Sign Up"}</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
		</Grid>
	);
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		authRedirectPath: state.auth.authRedirectPath,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(Login, httpInstance));
