import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import './assets/sass/base.scss'
import {Provider} from "react-redux"
import store from "./store"
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

