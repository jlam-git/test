import { call, take } from 'redux-saga/effects';
import * as effects from '../effects/list.effect';
import { ListActions } from '../../actions/constants';

function* fetchList(payload) {
	while (true) {
		const action = yield take(ListActions.FETCH_LIST);
		yield call(effects.fetchAccounts, action.payload);
	}
}

export default {
	fetchList,
};
