import { h } from 'preact';
import { Link } from 'preact-router/match';
import Note from '../notebutton';
import style from './style.css';

/**
 *
 * @param {{data:import('../../types/Note').NoteData}} params
 */
const NoteList = ({ data }) => {
	console.log(data);
	return (
		<div class={style.notelist}>
			{data.notes.map((x) => (
				<Note data={x} notes={data}></Note>
			))}
		</div>
	);
};

export default NoteList;
