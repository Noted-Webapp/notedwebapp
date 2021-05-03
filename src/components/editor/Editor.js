import { h } from 'preact';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import NoteView from '../noteview/NoteView';
import style from './style.css';

/**
 *
 * @param {{data:import('../../types/Note').NoteData}} params
 */
const Editor = ({ data }) => (
	<div class={style.editor}>
		<Router>
			<NoteView path="/notes/:id" data={data} />
		</Router>
	</div>
);

export default Editor;
