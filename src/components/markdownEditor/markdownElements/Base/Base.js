import style from '../../style.css';
export let ElementType = class ElementType {
    /**
	 *
	 * @param {string} sub
	 */ static convert(sub) {
        return( /*#__PURE__*/ h("p", {
            class: style.text
        }, sub));
    }
};
ElementType.matchElement = /TEMPLATE DO NOT USE/m;

