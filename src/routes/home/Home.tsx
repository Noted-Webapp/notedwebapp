import { Component, h } from 'preact';
import Editor from '../../components/editor/Editor';
import NoteList from '../../components/notelist/NoteList';
import style from './style.css';

import programtags from '../../assets/data/programmingtags.json';
import { Note, NoteData as baseNoteData, NoteData } from '../../types/Note';
import { randomToken } from '../../utils/random';

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
Welcome to Noted.
This notes app utilizes markdown and will allow plugins in the future.
`,
			tags: ['General'],
		},
		[randomToken()]: {
			content: `
# Welcome: Code
This note serves as a tutorial for the programming aspects of Noted.
\`\`\`js
console.log("hello");
\`\`\`
`,
			tags: ['JavaScript', 'CSS', 'HTML'],
		},
	},
};

class Home extends Component<{}, baseNoteData> {
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
					[noteID]: newData,
				},
			},
			() => {
				localStorage.notes = JSON.stringify(this.state);
			}
		);
	}

	render() {
		console.log(this.state);
		return (
			<div class={style.home}>
				<NoteList data={this.state}></NoteList>
				<Editor
					updateNote={this.updateNote.bind(this)}
					data={this.state}
				></Editor>
			</div>
		);
	}
}

export default Home;
