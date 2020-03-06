import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from '../List';
import Actions from '../../actions'

function AccountList({collection, countries, ...rest}) {
	const { fetchAccounts } = rest;
	useEffect(() => {
		// calling service
		fetchAccounts({ value: "my payload" });
	});
	return (
		<React.Fragment>
			<List.Manager collection={collection} countries={countries}>
				<List.Content>
					<List.Text dataKey={'tag'}></List.Text>
					<List.Text dataKey={'accountNumber'}></List.Text>
					<List.Text dataKey={'bic'}></List.Text>
					<List.Numeric dataKey={'amount'}></List.Numeric>
				</List.Content>
				<List.Summary />
				<List.Map />
			</List.Manager>
		</React.Fragment>
	);
}

AccountList.propTypes = {
	collection: PropTypes.arrayOf(),
	dataKey: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
	fetchAccounts: (payload) => dispatch(Actions.AccountsAction.fetchAccounts(payload)),
});

const ConnectedAccountList = connect((state) => {
	const collection = state.list.accounts;
	return {
		collection,
		countries: state.list.countries,
	};
}, mapDispatchToProps)(AccountList);

export default ConnectedAccountList;
