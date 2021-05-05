import { ElementType } from '../Base/Base';
import style from './style.css';
const flattenColor = (hex)=>parseInt(hex.substr(1, 2), 16) * 0.299 + parseInt(hex.substr(3, 2), 16) * 0.587 + parseInt(hex.substr(5, 2), 16) * 0.114
;
export let Tags = class Tags extends ElementType {
    static convert(sub) {
        const tagData = JSON.parse(localStorage.notes).tags;
        const m = sub.match(/^(:)(.+)$/);
        const tags = m[2].split(', ');
        console.log(tags);
        return( /*#__PURE__*/ h("div", {
            class: style.tagContainer
        }, tags.map((x)=>{
            const col = tagData[x]?.color ?? '#e526e5';
            return( /*#__PURE__*/ h("span", {
                style: {
                    '--tag-color': col,
                    color: flattenColor(col) > 150 ? 'var(--col-fg-dark)' : 'var(--col-fg-light)'
                },
                class: style.tag
            }, x));
        })));
    }
};
Tags.matchElement = /(^:(?:[a-zA-Z0-9]+, )*(?:[a-zA-Z0-9]+)$)/m;

