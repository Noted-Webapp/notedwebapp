import { Component, h } from 'preact';
import { Router } from 'preact-router';
import Header from './header/Header';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home/Home';
import Settings from '../routes/settings/Settings';
import programtags from '../assets/data/programmingtags.json';
import { randomToken } from '../utils/random';
const baseNoteData = {
    tags: {
        ...programtags,
        General: {
            color: '#303030'
        }
    },
    notes: {
        [randomToken()]: {
            content: `\n# Welcome\n:General\nWelcome to Noted.\nThis notes app utilizes markdown and will allow plugins in the future.\n`,
            modified: Date.now() - 1000
        },
        [randomToken()]: {
            content: `\n# Welcome: Code\n:JavaScript, HTML, CSS\nThis note serves as a tutorial for the programming aspects of Noted.\n\`\`\`js\nconsole.log("hello");\n\`\`\`\n`,
            modified: Date.now()
        }
    }
};
localStorage.notes = JSON.stringify(JSON.parse(localStorage.notes ?? JSON.stringify(baseNoteData)));
let App = class App extends Component {
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
                [noteID]: {
                    ...newData,
                    modified: Date.now()
                }
            }
        }, ()=>{
            localStorage.notes = JSON.stringify(this.state);
        });
    }
    updateData(newData) {
        this.setState(newData, ()=>{
            localStorage.notes = JSON.stringify(this.state);
        });
    }
    render() {
        return( /*#__PURE__*/ h("div", {
            id: "app"
        }, /*#__PURE__*/ h(Header, null), /*#__PURE__*/ h(Router, null, /*#__PURE__*/ h(Home, {
            updateNote: this.updateNote.bind(this),
            data: this.state,
            path: "/",
            note: "00000000000000000000000000000000"
        }), /*#__PURE__*/ h(Home, {
            updateNote: this.updateNote.bind(this),
            data: this.state,
            path: "/notes/",
            note: "00000000000000000000000000000000"
        }), /*#__PURE__*/ h(Home, {
            updateNote: this.updateNote.bind(this),
            data: this.state,
            path: "/notes/:note"
        }), /*#__PURE__*/ h(Settings, {
            data: this.state,
            updateState: this.updateData.bind(this),
            path: "/settings/"
        }))));
    }
};
export default App;

