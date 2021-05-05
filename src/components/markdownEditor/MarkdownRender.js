var _class;
import style from './style.css';
import { Header } from './markdownElements/Header/Header';
import { Tags } from './markdownElements/Tags/Tags';
import { ElementType } from './markdownElements/Base/Base';
const stripRegex = (a)=>a.toString().substr(1, a.toString().length - a.flags.length - 2)
;
// @ts-ignore
const MDRender2 = window.MDRender = (_class = class MDRender {
    static splitParts(str) {
        const r = new RegExp('(' + this.elementTypes.map((x)=>stripRegex(x.matchElement)
        ).join('|') + '|(?:^.+$))', 'gm');
        console.log(str.match(r));
        return [
            ...str.match(r)
        ];
    }
    static convert(subs) {
        return subs.map((x)=>(MDRender.elementTypes.find((y)=>y.matchElement.test(x)
            ) ?? PlainText).convert(x)
        );
    }
}, _class.elementTypes = [], _class);
let PlainText = class PlainText extends ElementType {
    /**
	 *
	 * @param {string} sub
	 */ static convert(sub) {
        console.log(sub);
        const m = sub.match(/^.+$/m);
        return( /*#__PURE__*/ h("p", {
            class: style.text
        }, m[0]));
    }
};
PlainText.matchElement = /(^.+$)/m;
MDRender2.elementTypes.push(Header);
MDRender2.elementTypes.push(Tags);
export default MDRender2;

