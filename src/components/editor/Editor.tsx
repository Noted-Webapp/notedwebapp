import { h } from 'preact';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import { Note, NoteData } from '../../types/Note';
import NoteView from '../noteview/NoteView';
import style from './style.css';

const Editor = ({
	data,
	updateNote,
}: {
	data: NoteData;
	updateNote: (id: string, data: Note) => void;
}) => (
	<div class={style.editor}>
		<Router>
			<NoteView updateNote={updateNote} path="/notes/:id" data={data} />
		</Router>
	</div>
);

export default Editor;
