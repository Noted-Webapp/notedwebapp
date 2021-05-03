import { h } from 'preact';
import { Link } from 'preact-router/match';
import * as style from './style.css';

/**
 *
 * @param {{data:import('../../types/Note').NoteData,id?:string,path:string}} params
 */
const NoteView = ({ data, id }) => {
	return <div>{data.notes[id].content}</div>;
};

export default NoteView;
