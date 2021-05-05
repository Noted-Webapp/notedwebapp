import { Note } from '../../types/Note';
import MarkdownLine from './MarkdownLine';
import MDRender from './MarkdownRender';
import style from './style.css';

MDRender;

/**
 *
 * @param {{note:import("../../types/Note").Note}} param0
 */
class MarkdownEditor {
	updateLine({
		note,
		updateNote,
		id,
	}: {
		id: string;
		note: Note;
		updateNote: (id: string, data: Note) => void;
	}): (index: number, text: string) => void {
		return function (index: number, text: string) {
			const ps = MDRender.splitParts(note.content);
			ps[index] = text;
			updateNote(id, { ...note, content: ps.join('\n') });
		}.bind(this);
	}

	render({
		note,
		updateNote,
		id,
	}: {
		note: Note;
		updateNote: (id: string, data: Note) => void;
		id: string;
	}) {
		const ps = MDRender.splitParts(note.content);
		return (
			<div class={style.markdownEditor}>
				{ps.map((x, i) => (
					<MarkdownLine
						updateLine={this.updateLine({ id, note, updateNote })}
						lineNum={i}
						line={x}
					></MarkdownLine>
				))}
			</div>
		);
	}
}

export default MarkdownEditor;
