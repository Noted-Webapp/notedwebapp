import { Component } from 'preact';
import MDRender from './MarkdownRender';
import style from './style.css';
let MarkdownLine = class MarkdownLine extends Component {
    constructor(){
        super();
        this.state = {
            editing: false
        };
    }
    // Lifecycle: Called whenever our component is created
    componentDidMount() {
    }
    // Lifecycle: Called just before our component will be destroyed
    componentWillUnmount() {
    }
    resize(e) {
        e.target.style.height = '0';
        e.target.style.height = e.target.scrollHeight + 'px';
    }
    onKey(fun, ln) {
        const that = this;
        const f = that.handleFinishEdit(fun, ln);
        return (function(e) {
            if (e.key == 'Enter' && e.ctrlKey) f(e);
        }).bind(that);
    }
    handleFinishEdit(fun, ln) {
        const that = this;
        return (function(e) {
            fun(ln, e.target.value);
            that.setState({
                editing: false
            });
        }).bind(that);
    }
    render({ line , updateLine , lineNum  }, state) {
        console.log(state);
        return state.editing ? /*#__PURE__*/ h("textarea", {
            onBlur: this.handleFinishEdit(updateLine, lineNum),
            onKeyPress: this.onKey(updateLine, lineNum),
            onKeyUp: this.resize,
            onKeyDown: this.resize,
            class: style.editorInput,
            type: "text",
            value: line
        }) : /*#__PURE__*/ h("div", {
            onClick: (e)=>{
                this.setState({
                    editing: true
                });
            }
        }, MDRender.convert([
            line
        ]));
    }
};
export default MarkdownLine;

