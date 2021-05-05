import { h } from 'preact';
import { Link } from 'preact-router/match';
import Note from '../notebutton/NoteButton';
import style from './style.css';

/**
 *
 * @param {{data:import('../../types/Note').NoteData}} params
 */
const NoteList = ({ data }) => {
	return (
		<div class={style.notelist}>
			{Object.entries(data.notes).map(([k, x]) => (
				<Note data={x} notes={data} id={k}></Note>
			))}
		</div>
	);
};

export default NoteList;
