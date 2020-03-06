import React from 'react';
import PropTypes from 'prop-types';

function Numeric({ data, dataKey }) {
	return <span className={'list-cell list-cell-number'}>{data[dataKey]}</span>
}

Numeric.propTypes = {
	data: PropTypes.object,
	dataKey: PropTypes.string,
};
export default Numeric;