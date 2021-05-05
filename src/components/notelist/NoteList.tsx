import { h } from 'preact';
import { Link } from 'preact-router/match';
import { NoteData } from '../../types/Note';
import Note from '../notebutton/NoteButton';
import style from './style.css';
import noteStyle from '../notebutton/style.css';
import { randomToken } from '../../utils/random';

const NoteList = ({
	selected,
	data,
	updateNote,
}: {
	selected: string;
	data: NoteData;
	updateNote: (id: string, data: import('../../types/Note').Note) => void;
}) => {
	return (
		<div class={style.notelist}>
			<div
				onClick={() => {
					updateNote(randomToken(), {
						content: '# New Note\n:General',
						modified: Date.now(),
					});
				}}
				style={{ background: 'var(--col-acc-2)' }}
				class={noteStyle.note}
			>
				New
			</div>
			{Object.entries(data.notes)
				.sort((a, b) => b[1].modified - a[1].modified)
				.map(([k, x]) => (
					<Note data={x} notes={data} selected={k == selected} id={k}></Note>
				))}
		</div>
	);
};

export default NoteList;
