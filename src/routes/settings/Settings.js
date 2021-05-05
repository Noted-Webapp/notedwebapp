import { h } from 'preact';
import style from './style.css';
const resetData = ()=>{
    if (confirm('Are you sure you want to reset ALL user data?')) {
        delete localStorage.notes;
        location.href = location.href;
    }
};
// Note: `user` comes from the URL, courtesy of our router
const Settings = ()=>{
    return( /*#__PURE__*/ h("div", {
        class: style.profile
    }, /*#__PURE__*/ h("h1", null, "Settings"), /*#__PURE__*/ h("button", {
        onClick: resetData
    }, "Reset Data")));
};
export default Settings;

