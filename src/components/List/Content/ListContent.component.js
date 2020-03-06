import React from 'react';
import PropTypes from 'prop-types';
import { useListContext } from '../context';

function ListContent({children}) {
	const { collection } = useListContext();
	if (!collection || collection.length === 0) {
		return (
			<div className="list-content">
				nothing to display
			</div>
		);
	}
	return (
		<React.Fragment>
			<div className="list-content">
				{ collection.map((row, index) => {
					// adding data props to children
					let elements = React.Children.toArray(children);
					elements = elements.map(element => (React.cloneElement(element, { data: row })));

					/**
					 *  might be simpler just to add a List.Header with its header as children just like the data
					 *  so that the header is also customizable> Knowing that i'm letting that as it is
					 *  as we don't need that for now, that way the header definition is based on data for now
 					 */
					// building header from children passed
					let headerElements = React.Children.toArray(children);
					const header = { ...row };
					Object.keys(header).forEach(key => {
						// setting key for values
						header[key] = key;
					});
					headerElements = headerElements.map(element => (React.cloneElement(element, { data: header })));
					if (index === 0) {
						return (
							<React.Fragment>
								<div key={`header${index}`} className="list-header">{headerElements}</div>
								<div key={`row${index}`} className="list-row">{elements}</div>
							</React.Fragment>
						);
					}
					return (
						<div key={`row${index}`} className="list-row">{elements}</div>
					);
				}) }
			</div>
		</React.Fragment>
	);
}

ListContent.propTypes = {
	children: PropTypes.node,
};

export default ListContent;
