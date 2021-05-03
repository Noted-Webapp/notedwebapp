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

`#bcbcbc 0%,#bcbcbc 25%,#ffcd02 25%,#ffcd02 50%,#e84f47 50%,#e84f47 75%,#65c1ac 75%,#65c1ac 100%`;

console.log(getGradientFromColorList);

/**
 *
 * @param {{data:import('../../types/Note').Note,notes:import('../../types/Note').NoteData}} params
 */
const Note = ({ data, notes }) => {
	const tagColors = data.tags.map((x) => notes.tags[x].color);
	console.log(tagColors);
	return (
		<div
			class={style.note}
			style={{ borderImage: getGradientFromColorList(tagColors) }}
		>
			{data.name}
		</div>
	);
};

export default Note;
