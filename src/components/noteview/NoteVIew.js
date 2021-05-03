import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

/**
 *
 * @param {{data:import('../../types/Note').Note,notes:import('../../types/Note').NoteData}} params
 */
const NoteView = ({ data, id }) => {
	return <p>Hello world {id}</p>;
};

export default NoteView;
