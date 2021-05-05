import { Component, h } from 'preact';
import Editor from '../../components/editor/Editor';
import NoteList from '../../components/notelist/NoteList';
import style from './style.css';
import { Link } from 'preact-router';
let Home = class Home extends Component {
    render({ note , updateNote , data  }) {
        if (!(note in data.notes) && note != '00000000000000000000000000000000') return( /*#__PURE__*/ h("div", {
            class: style.home
        }, /*#__PURE__*/ h(Link, {
            href: "/notes/"
        }, "Encountered an error (Deleted Note?); Please click to return to notes menu.")));
        return( /*#__PURE__*/ h("div", {
            class: style.home
        }, /*#__PURE__*/ h(NoteList, {
            updateNote: updateNote,
            selected: note,
            data: data
        }), /*#__PURE__*/ h(Editor, {
            updateNote: updateNote,
            data: data
        })));
    }
};
export default Home;

