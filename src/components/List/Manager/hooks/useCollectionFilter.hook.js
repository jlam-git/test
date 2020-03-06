import { useMemo, useState } from 'react';

// here the filter  function is filtering on country
// but the best would have been to pass a filter function directly from props to the hook to make the
// list component independant from the data and call the hook useListFilter
export function filter(countryFilter, collection) {
	if (!countryFilter) {
		return collection;
	}
	return collection.filter(item => (item.country === countryFilter)
	);
}

export const useCountryFilter = (collection = [], initialCountryFilter) => {
	const [countryFilter, setCountryFilter] = useState(initialCountryFilter);

	return {
		filteredCollection: useMemo(() => filter(countryFilter, collection), [countryFilter, collection]),
		countryFilter,
		setCountryFilter,
	};
};
