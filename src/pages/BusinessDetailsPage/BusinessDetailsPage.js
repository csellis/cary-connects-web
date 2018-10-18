import React from 'react';
import PropTypes from 'prop-types';

const BusinessDetailsPage = props => {
	return (
		<div>
			<p>Business Details Page for ID: { this.props.match.params.id }</p>
		</div>
	);
};

BusinessDetailsPage.propTypes = {

};

export default BusinessDetailsPage;
