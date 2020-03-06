import React from 'react';
import { useListContext } from '../context';

function Summary() {
	const { collection } = useListContext();

	return (
		<div className="list-total">Total in Euros: {
			collection.map(item => item.amountInEur).reduce((acc, current) => {
				return acc + current;
			}, 0).toFixed(2)
		}</div>
	);
}

export default Summary;