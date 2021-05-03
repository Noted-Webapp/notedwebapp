import { h } from 'preact';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import NoteView from '../noteview/NoteVIew';
import style from './style.css';

/**
 *
 * @param {{data:import('../../types/Note').NoteData}} params
 */
const Editor = ({ data }) => (
	<div class={style.editor}>
		<Router>
			<NoteView path="/notes/:note" data={data} />
		</Router>
	</div>
);

export default Editor;
