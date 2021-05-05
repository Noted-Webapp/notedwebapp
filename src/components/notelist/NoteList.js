import { h } from 'preact';
import Note from '../notebutton/NoteButton';
import style from './style.css';
import noteStyle from '../notebutton/style.css';
import { randomToken } from '../../utils/random';
const NoteList = ({ selected , data , updateNote  })=>{
    return( /*#__PURE__*/ h("div", {
        class: style.notelist
    }, /*#__PURE__*/ h("div", {
        onClick: ()=>{
            updateNote(randomToken(), {
                content: '# New Note\n:General',
                modified: Date.now()
            });
        },
        style: {
            background: 'var(--col-acc-2)'
        },
        class: noteStyle.note
    }, "New"), Object.entries(data.notes).sort((a, b)=>b[1].modified - a[1].modified
    ).map(([k, x])=>/*#__PURE__*/ h(Note, {
            data: x,
            notes: data,
            selected: k == selected,
            id: k
        })
    )));
};
export default NoteList;

