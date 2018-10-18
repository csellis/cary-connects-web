import React from 'react';
import PropTypes from 'prop-types';

const ParkingDetailsPage = props => {
	return (
		<div>
			<p>Parking Details Page for ID: { props.match.params.id }</p>
		</div>
	);
};

ParkingDetailsPage.propTypes = {

};

export default ParkingDetailsPage;
