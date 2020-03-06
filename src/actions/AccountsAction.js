import { ListActions } from './constants';

function fetchAccounts(payload) {
	return {
		type: ListActions.FETCH_LIST,
		payload,
	};
}

export default {
	fetchAccounts,
}