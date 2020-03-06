import { combineReducers, applyMiddleware, createStore  } from 'redux';
import reducer from './reducers';
import { sagaMiddleware } from './middleware';

export default createStore(
	combineReducers({
		list: reducer.list
	}),
	applyMiddleware(sagaMiddleware)
);
