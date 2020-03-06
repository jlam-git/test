import React, { useContext } from 'react';

export const ListContext = React.createContext();

export function useListContext() {
	const context = useContext(ListContext);
	if (!context) {
		throw Error(
			'List: you are using a sub component out of List.',
		);
	}
	return context;
}
