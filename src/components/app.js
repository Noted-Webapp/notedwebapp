import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header/Header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home/Home';
import Settings from '../routes/settings/Settings';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" note="00000000000000000000000000000000" />
			<Home path="/notes/" note="00000000000000000000000000000000" />
			<Home path="/notes/:note" />
			<Settings path="/settings/" />
		</Router>
	</div>
);

export default App;
