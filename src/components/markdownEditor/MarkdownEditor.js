import MarkdownLine from './MarkdownLine';
import MDRender from './MarkdownRender';
import style from './style.css';
MDRender;
/**
 *
 * @param {{note:import("../../types/Note").Note}} param0
 */ let MarkdownEditor = class MarkdownEditor {
    updateLine({ note , updateNote , id  }) {
        return (function(index, text) {
            const ps = MDRender.splitParts(note.content);
            ps[index] = text;
            updateNote(id, {
                ...note,
                content: ps.join('\n')
            });
        }).bind(this);
    }
    render({ note , updateNote , id  }) {
        const ps = MDRender.splitParts(note.content);
        return( /*#__PURE__*/ h("div", {
            class: style.markdownEditor
        }, ps.map((x, i)=>/*#__PURE__*/ h(MarkdownLine, {
                updateLine: this.updateLine({
                    id,
                    note,
                    updateNote
                }),
                lineNum: i,
                line: x
            })
        )));
    }
};
export default MarkdownEditor;

