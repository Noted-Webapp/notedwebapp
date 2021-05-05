import { Component, h } from 'preact';
import Editor from '../../components/editor/Editor';
import NoteList from '../../components/notelist/NoteList';
import style from './style.css';
import programtags from '../../assets/data/programmingtags.json';
/** @type {import('../../types/Note').NoteData} */ const NoteData = {
    tags: {
        ...programtags,
        General: {
            color: '#303030'
        }
    },
    notes: {
        ['0'.repeat(32)]: {
            content: "# Toto's First Note\n## Hello\n### Hello\n#### Hello\nThis is my first Noted note.",
            tags: [
                'General'
            ]
        },
        ['test']: {
            content: "# Toto's Special\nThis is another Noted note meant for code.",
            tags: [
                'JavaScript',
                'CSS',
                'HTML'
            ]
        }
    }
};
let Home = class Home extends Component {
    constructor(){
        super();
        this.setState(NoteData);
    }
    updateNote(noteID, newData) {
        this.setState({
            notes: {
                ...this.state.notes,
                [noteID]: newData
            }
        });
    }
    render() {
        return( /*#__PURE__*/ h("div", {
            class: style.home
        }, /*#__PURE__*/ h(NoteList, {
            data: this.state
        }), /*#__PURE__*/ h(Editor, {
            updateNote: this.updateNote.bind(this),
            data: this.state
        })));
    }
};
export default Home;

