import React, { Component } from 'react';
import { Route } from "react-router-dom";

import './styles/styles.css';
import HomePage from './pages/HomePage/HomePage';
import BusinessDetailsPage from './pages/BusinessDetailsPage/BusinessDetailsPage';
import FeedbackPage from './pages/FeedbackPage/FeedbackPage';
import ParkingDetailsPage from './pages/ParkingDetailsPage/ParkingDetailsPage';


class App extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={HomePage} />
				<Route path="/feedback" component={FeedbackPage} />
				<Route path="/business/:id" component={BusinessDetailsPage} />
				<Route path="/parking/:id" component={ParkingDetailsPage} />
			</div>
		);
	}
}

export default App;
