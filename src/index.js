import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import producerReducer from './store/reducers/producer';
import ErrorBoundary from './hoc/error-boundary/ErrorBoundary';
// import i18n (needs to be bundled ;))
import './i18n';

const rootReducer = combineReducers({
	auth: authReducer,
	producers: producerReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename="/">
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
