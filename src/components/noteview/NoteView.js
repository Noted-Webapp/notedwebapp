import { h } from 'preact';
import MarkdownEditor from '../markdownEditor/MarkdownEditor';
let NoteView = class NoteView {
    render({ data , id , updateNote  }) {
        return( /*#__PURE__*/ h(MarkdownEditor, {
            updateNote: updateNote,
            id: id,
            note: data.notes[id]
        }));
    }
};
export default NoteView;

