import React from 'react';
import PropTypes from 'prop-types';
import { ListContext } from '../context';
import { useCountryFilter } from './hooks/useCollectionFilter.hook';
import '../List.css';

function Manager({ children, collection, countries }) {

	// Filter by text
	const { filteredCollection, countryFilter, setCountryFilter } = useCountryFilter(collection);
	collection = filteredCollection;

	const contextValues = {
		collection,
		countries,
		setCountryFilter,
		countryFilter,
	};

	return (
		<ListContext.Provider value={contextValues}>
			<div className="list">{children}</div>
		</ListContext.Provider>
	);
}

Manager.propTypes = {
	children: PropTypes.node,
	collection: PropTypes.array,
	countries: PropTypes.array,
};
export default Manager;
