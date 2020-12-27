import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	Avatar,
	Button,
	Box,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import logo from '../assets/amazon-logo.png';
import { auth } from '../config/firebase';
import './Login.css';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright'} &#xa9;
			<Link className="login__link" to="/">
				{' '}
				Amazon.com
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(5),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		widht: '100%',
		marginTop: theme.spacing(1),
	},
	textfield: {
		'&:hover': {
			borderColor: 'red',
			color: 'green',
		},
	},

	submit: {
		margin: theme.spacing(3, 0, 2),
		background: '#f0c14b',
		borderRadius: '2px',
		border: '1px solid',
		borderColor: '#a88734 #9c7e31 #846a29',
		'&:hover': {
			background: '#f0c14b',
		},
	},
}));

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const classes = useStyles();

	const login = (event) => {
		event.preventDefault();
		// login logic
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				// logged in successful, redirect to home page
				history.push('/');
			})
			.catch((err) =>
				console.warn(
					`User does not exist in the database, Please register for SignIn ${err.message}`
				)
			);
	};

	return (
		<div className="login">
			<Container maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Link to="/">
						<img className="login__logo" src={logo} alt="amazon logo" />
					</Link>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign In
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							className={classes.textfield}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							className={classes.textfield}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="password"
							name="password"
							label="Password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							className={classes.submit}
							onClick={login}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link className="login__link" to="/login">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link className="login__link" to="/signup">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Container>
		</div>
	);
};
export { Copyright };
export default Login;

/*By signing-in you agree to Amazon's Condition of Use & Sale.
Please see our Privacy Notice, our Cookies Notice and our Intrest-Based Ads Notice.
*/
