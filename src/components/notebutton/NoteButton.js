import { h } from 'preact';
import { Link } from 'preact-router/match';
import MDRender from '../markdownEditor/MarkdownRender';
import style from './style.css';
/**
 *
 * @param {string[]} colors
 * @returns string
 */ const getGradientFromColorList = (colors)=>`linear-gradient(to right,${colors.map((x, i)=>`${x} ${1 / colors.length * i * 100}%, ${x} ${1 / colors.length * (i + 1) * 100}%`
    ).join(', ')}) 1`
;
const r = /^(?:# )(.+)$/m;
const Note = ({ data , notes , id , selected  })=>{
    const tagColors = MDRender.splitParts(data.content)[1].substr(1).split(', ').map((x)=>notes.tags[x]?.color ?? '#e526e5'
    );
    console.log(data.content);
    return( /*#__PURE__*/ h(Link, {
        class: style.note + ' ' + (selected ? style.selected : ''),
        style: {
            borderImage: getGradientFromColorList(tagColors)
        },
        href: '/notes/' + id
    }, data.content.match(r)[1]));
};
export default Note;

