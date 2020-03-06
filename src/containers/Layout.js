import React from 'react';
import Header from '../components/HeaderBar/Header.component';
import './layout.css';

export default function Layout (props) {
	return (
		<div className="layout">
			<Header />
			<div className="content">
				{ props.children }
			</div>
		</div>
	);
}