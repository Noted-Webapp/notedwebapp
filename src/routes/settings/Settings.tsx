import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

const resetData = () => {
	if (confirm('Are you sure you want to reset ALL user data?')) {
		delete localStorage.notes;
		location.href = location.href;
	}
};

// Note: `user` comes from the URL, courtesy of our router
const Settings = () => {
	return (
		<div class={style.profile}>
			<h1>Settings</h1>
			<button onClick={resetData}>Reset Data</button>
		</div>
	);
};

export default Settings;
