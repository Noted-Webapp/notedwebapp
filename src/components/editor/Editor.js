import { h } from 'preact';
import Router from 'preact-router';
import NoteView from '../noteview/NoteView';
import style from './style.css';
const Editor = ({ data , updateNote  })=>/*#__PURE__*/ h("div", {
        class: style.editor
    }, /*#__PURE__*/ h(Router, null, /*#__PURE__*/ h(NoteView, {
        updateNote: updateNote,
        path: "/notes/:id",
        data: data
    })))
;
export default Editor;

