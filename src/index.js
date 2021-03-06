import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './scss/style.scss';
import { Provider } from 'react-redux';
import store from './store';
const app = (
	<Provider store={store}>
		<App/>
	</Provider>)


render(app,  document.getElementById('mount-point'));
