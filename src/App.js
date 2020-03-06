import React from 'react';
import { Provider } from 'react-redux';
import AccountList from './components/AccountList/AccountList.component';


import store from './store';
import saga from './sagas';
import Layout from './containers/Layout';
// import Main from './layouts/main'
import { sagaMiddleware } from './middleware';

const App = () => (
	<Provider store={store}>
		<Layout>
			<h4><span>Account list</span></h4>
			<AccountList />
		</Layout>
	</Provider>
);

sagaMiddleware.run(saga);

export default App

