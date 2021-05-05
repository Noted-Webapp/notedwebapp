import { Component, h } from 'preact';
import style from './style.css';
import tagStyle from '../../components/markdownEditor/markdownElements/Tags/style.css';
const flattenColor = (hex)=>parseInt(hex.substr(1, 2), 16) * 0.299 + parseInt(hex.substr(3, 2), 16) * 0.587 + parseInt(hex.substr(5, 2), 16) * 0.114
;
const resetData = ()=>{
    if (confirm('Are you sure you want to reset ALL user data?')) {
        delete localStorage.notes;
        location.href = location.href;
    }
};
// Note: `user` comes from the URL, courtesy of our router
let Settings = class Settings extends Component {
    render({ data , updateState  }) {
        const tagData = data.tags;
        return( /*#__PURE__*/ h("div", {
            class: style.profile
        }, /*#__PURE__*/ h("h1", null, "Settings"), /*#__PURE__*/ h("button", {
            class: style.padding,
            onClick: resetData
        }, "Reset Data"), /*#__PURE__*/ h("form", {
            onSubmit: this.onSubmitTagForm({
                data,
                updateState
            })
        }, /*#__PURE__*/ h("input", {
            type: "text",
            value: this.state.tagFormIDValue,
            onInput: this.onIDInputTagForm.bind(this)
        }), /*#__PURE__*/ h("input", {
            type: "text",
            value: this.state.tagFormValue,
            onInput: this.onInputTagForm.bind(this)
        }), /*#__PURE__*/ h("button", {
            type: "submit"
        }, "Submit")), /*#__PURE__*/ h("div", {
            class: style.padding + ' ' + style.box
        }, Object.keys(tagData).map((x)=>{
            const col = tagData[x]?.color;
            return( /*#__PURE__*/ h("div", {
                onClick: ()=>this.setState({
                        tagFormIDValue: x,
                        tagFormValue: col
                    })
                ,
                style: {
                    '--tag-color': col,
                    color: flattenColor(col) > 150 ? 'var(--col-fg-dark)' : 'var(--col-fg-light)'
                },
                class: tagStyle.tag
            }, x));
        }))));
    }
    constructor(...args){
        super(...args);
        this.state = {
            tagFormValue: '',
            tagFormIDValue: ''
        };
        this.onSubmitTagForm = ({ data , updateState  })=>(e)=>{
                updateState({
                    tags: {
                        ...data.tags,
                        [this.state.tagFormIDValue]: this.state.tagFormValue == '' ? undefined : {
                            color: this.state.tagFormValue
                        }
                    }
                });
                console.log(`[${this.state.tagFormIDValue}]: ${this.state.tagFormValue}`);
                e.preventDefault();
            }
        ;
        this.onInputTagForm = (e)=>{
            const { value: tagFormValue  } = e.target;
            this.setState({
                tagFormValue
            });
        };
        this.onIDInputTagForm = (e)=>{
            const { value: tagFormIDValue  } = e.target;
            this.setState({
                tagFormIDValue
            });
        };
    }
};
export default Settings;

