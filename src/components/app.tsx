import { Component, h } from 'preact';
import { Router } from 'preact-router';

import Header from './header/Header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home/Home';
import Settings from '../routes/settings/Settings';
import { Note, NoteData } from '../types/Note';
import programtags from '../assets/data/programmingtags.json';
import { randomToken } from '../utils/random';

const baseNoteData: NoteData = {
	tags: {
		...programtags,
		General: {
			color: '#303030',
		},
	},
	notes: {
		[randomToken()]: {
			content: `
# Welcome
:General
Welcome to Noted.
This notes app utilizes markdown and will allow plugins in the future.
`,
			modified: Date.now() - 1000,
		},
		[randomToken()]: {
			content: `
# Welcome: Code
:JavaScript, HTML, CSS
This note serves as a tutorial for the programming aspects of Noted.
\`\`\`js
console.log("hello");
\`\`\`
`,
			modified: Date.now(),
		},
	},
};

localStorage.notes = JSON.stringify(
	JSON.parse(localStorage.notes ?? JSON.stringify(baseNoteData))
);

class App extends Component<{}, NoteData> {
	constructor() {
		super();
		this.setState(
			JSON.parse(localStorage.notes ?? JSON.stringify(baseNoteData)),
			() => {
				localStorage.notes = JSON.stringify(this.state);
			}
		);
	}

	updateNote(noteID: string, newData: Note) {
		this.setState(
			{
				notes: {
					...this.state.notes,
					[noteID]: { ...newData, modified: Date.now() },
				},
			},
			() => {
				localStorage.notes = JSON.stringify(this.state);
			}
		);
	}

	updateData(newData: Partial<NoteData>) {
		this.setState(newData, () => {
			localStorage.notes = JSON.stringify(this.state);
		});
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router>
					<Home
						updateNote={this.updateNote.bind(this)}
						data={this.state}
						path="/"
						note="00000000000000000000000000000000"
					/>
					<Home
						updateNote={this.updateNote.bind(this)}
						data={this.state}
						path="/notes/"
						note="00000000000000000000000000000000"
					/>
					<Home
						updateNote={this.updateNote.bind(this)}
						data={this.state}
						path="/notes/:note"
					/>
					<Settings
						data={this.state}
						updateState={this.updateData.bind(this)}
						path="/settings/"
					/>
				</Router>
			</div>
		);
	}
}

export default App;
