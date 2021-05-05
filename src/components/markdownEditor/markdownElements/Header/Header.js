import style from '../../style.css';
import { ElementType } from '../Base/Base';
export let Header = class Header extends ElementType {
    static convert(sub) {
        const m = sub.match(/^(#+) (.+)$/);
        return( /*#__PURE__*/ h("p", {
            style: {
                fontSize: 2.5 * 0.8 ** m[1].length + 'em'
            },
            class: style.text + ' ' + style.header
        }, m[2]));
    }
};
Header.matchElement = /(^#+ [^\n]+$)/m;

