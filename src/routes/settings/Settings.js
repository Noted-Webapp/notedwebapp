import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Settings = () => {
	return (
		<div class={style.profile}>
			<h1>Settings</h1>
			<p>No settings yet ;(.</p>
		</div>
	);
};

export default Settings;
