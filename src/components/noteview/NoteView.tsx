import { h } from 'preact';
import { Link } from 'preact-router/match';
import { Note, NoteData } from '../../types/Note';
import MarkdownEditor from '../markdownEditor/MarkdownEditor';
import * as style from './style.css';

class NoteView {
	render({
		data,
		id,
		updateNote,
	}: {
		data: NoteData;
		id?: string;
		path: string;
		updateNote: (id: string, data: Note) => void;
	}) {
		return (
			<MarkdownEditor updateNote={updateNote} id={id} note={data.notes[id]} />
		);
	}
}

export default NoteView;
