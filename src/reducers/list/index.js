import { ListActions } from '../../actions/constants';
export default function ListReducer(state = { accounts: [] }, action) {
	switch (action.type) {
	case ListActions.ACCOUNTS_RECEIVED: {
		return {
			...state,
			accounts: action.accounts,
		}
	}
	case ListActions.UPDATE_COUNTRIES: {
		return {
			...state,
			countries: action.countries,
		}
	}
	default:
		return state;
	}
}
