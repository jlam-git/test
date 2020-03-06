import React from 'react';
import PropTypes from 'prop-types';

function Text({ data, dataKey }) {
	return <span className={'list-cell list-cell-text'}>{data[dataKey]}</span>
}

Text.propTypes = {
	data: PropTypes.object,
	dataKey: PropTypes.string,
};

export default Text;