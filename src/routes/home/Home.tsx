import { Component, h } from 'preact';
import Editor from '../../components/editor/Editor';
import NoteList from '../../components/notelist/NoteList';
import style from './style.css';

import { Note, NoteData } from '../../types/Note';
import { Link } from 'preact-router';

class Home extends Component<
	{
		note?: string;
		updateNote: (id: string, data: Note) => void;
		data: NoteData;
		path?: string;
	},
	{}
> {
	render({
		note,
		updateNote,
		data,
	}: {
		note: string;
		updateNote: (id: string, data: Note) => void;
		data: NoteData;
		path?: string;
	}) {
		if (!(note in data.notes) && note != '00000000000000000000000000000000')
			return (
				<div class={style.home}>
					<Link href="/notes/">
						Encountered an error (Deleted Note?); Please click to return to
						notes menu.
					</Link>
				</div>
			);

		return (
			<div class={style.home}>
				<NoteList
					updateNote={updateNote}
					selected={note}
					data={data}
				></NoteList>
				<Editor updateNote={updateNote} data={data}></Editor>
			</div>
		);
	}
}

export default Home;
