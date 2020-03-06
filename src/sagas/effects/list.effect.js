import { put, call, /*all*/ } from 'redux-saga/effects';
import { ListActions } from '../../actions/constants';

function getAccounts(payload) {
	// retrieving json from public folder
	return fetch('dataTestDevFront.json',  {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	}).then((response) => {
		return response.json();
	});
}

// function getInstrucmentsRate(instrument) {
// 	return fetch(`https://api.ibanfirst.com/PublicAPI/Rate/${instrument}`)
// 		.then((response) => {
// 			return response.json();
// 		});
// }

export function* fetchAccounts(payload) {
	const json = yield call(getAccounts, payload);
	// const instrumentToRetrieve = new Set(
	// 	json.accounts
	// 		.map(account => (account.currency))
	// 		.filter(currency => currency !== 'EUR')
	// 		.map(currency => `${currency}EUR`)
	// );
	//
	// calling api and creating { instrument: rate } object
	// const instruments = yield all(Array.from(instrumentToRetrieve).map(instrument => {
	// 	return call(getInstrucmentsRate, instrument);
	// }));

	// creating an array of unique countries from the data
	const countries = Array.from(new Set(json.accounts.map(account => [account?.holderBank?.address?.country])));

	// mocking instruments
	const instrumentsEur = {
		USD: 0.88,
		GBP: 1.16,
		CHF: 0.94,
	};

	// converting currency to country

	yield put({ type: ListActions.ACCOUNTS_RECEIVED, accounts: json.accounts.map(account => {
			const amountInEur = account.currency === 'EUR' ?
				account.amount : parseFloat((account.amount * instrumentsEur[account.currency]).toFixed(2));
			return {
				tag: account.tag,
				accountNumber: account.accountNumber,
				bic: account?.holderBank?.bic,
				country: account?.holderBank?.address?.country,
				amount: `${account.amount} ${account.currency}`,
				amountInEur,
			};
		}),
	});
	yield put({ type: ListActions.UPDATE_COUNTRIES, countries })
}