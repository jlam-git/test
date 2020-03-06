import React from 'react';
import './HeaderBar.css';
export default function HeaderBar({children}) {
	return (
		<div className="headerBar">
			<span>Money money money</span>
			{children}
		</div>
	);
}