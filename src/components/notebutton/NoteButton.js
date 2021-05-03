import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

/**
 *
 * @param {string[]} colors
 * @returns string
 */
const getGradientFromColorList = (colors) =>
	`linear-gradient(to right,${colors
		.map(
			(x, i) =>
				`${x} ${(1 / colors.length) * i * 100}%, ${x} ${
					(1 / colors.length) * (i + 1) * 100
				}%`
		)
		.join(', ')}) 1`;

console.log(getGradientFromColorList);

/**
 *
 * @param {{data:import('../../types/Note').Note,notes:import('../../types/Note').NoteData,id:string}} params
 */
const Note = ({ data, notes, id }) => {
	const tagColors = data.tags.map((x) => notes.tags[x].color);
	console.log(tagColors);
	return (
		<Link
			class={style.note}
			style={{ borderImage: getGradientFromColorList(tagColors) }}
			href={'/notes/' + id}
		>
			{data.name}
		</Link>
	);
};

export default Note;
