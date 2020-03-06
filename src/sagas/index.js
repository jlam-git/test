import { call, all } from 'redux-saga/effects';
import watchers from './watchers';

const sagas = {
	...watchers.list,
};

const rootSagas = [];
Object.keys(sagas).forEach((sagaName) => {
	rootSagas.push(call(sagas[sagaName]));
});

export default function* rootSaga() {
	yield all(rootSagas);
}