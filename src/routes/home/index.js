import { h } from 'preact';
import Editor from '../../components/editor';
import NoteList from '../../components/notelist';
import style from './style.css';

import programtags from '../../assets/data/programmingtags.json';

/** @type {import('../../types/Note').NoteData} */
const NoteData = {
	tags: {
		...programtags,
		General: {
			color: '#303030',
		},
	},
	notes: {
		['0'.repeat(32)]: {
			name: "Toto's First Note",
			content: '# Hello\nThis is my first Noted note.',
			tags: ['General'],
		},
		['test']: {
			name: "Toto's Special",
			content: '# Hello\nThis is another Noted note meant for code.',
			tags: ['JavaScript', 'CSS', 'HTML'],
		},
	},
};

const Home = () => (
	<div class={style.home}>
		<NoteList data={NoteData}></NoteList>
		<Editor></Editor>
	</div>
);

export default Home;
