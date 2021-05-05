import { Component, h } from 'preact';
import Editor from '../../components/editor/Editor';
import NoteList from '../../components/notelist/NoteList';
import style from './style.css';
import programtags from '../../assets/data/programmingtags.json';
import { randomToken } from '../../utils/random';
const baseNoteData = {
    tags: {
        ...programtags,
        General: {
            color: '#303030'
        }
    },
    notes: {
        [randomToken()]: {
            content: `\n# Welcome\nWelcome to Noted.\nThis notes app utilizes markdown and will allow plugins in the future.\n`,
            tags: [
                'General'
            ]
        },
        [randomToken()]: {
            content: `\n# Welcome: Code\nThis note serves as a tutorial for the programming aspects of Noted.\n\`\`\`js\nconsole.log("hello");\n\`\`\`\n`,
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
        this.setState(JSON.parse(localStorage.notes ?? JSON.stringify(baseNoteData)), ()=>{
            localStorage.notes = JSON.stringify(this.state);
        });
    }
    updateNote(noteID, newData) {
        this.setState({
            notes: {
                ...this.state.notes,
                [noteID]: newData
            }
        }, ()=>{
            localStorage.notes = JSON.stringify(this.state);
        });
    }
    render() {
        console.log(this.state);
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

