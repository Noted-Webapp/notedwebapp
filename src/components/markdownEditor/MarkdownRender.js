import style from './style.css';

const stripRegex = (a) =>
	a.toString().substr(1, a.toString().length - a.flags.length - 2);

const MDRender = (window.MDRender = class MDRender {
	/** @type {{matchElement:RegExp,convert:(sub:string)=>JSX.Element}[]} */
	static elementTypes = [];

	/**
	 *
	 * @param {string} str
	 * @returns string[]
	 */
	static splitParts(str) {
		const r = new RegExp(
			'(' +
				this.elementTypes.map((x) => stripRegex(x.matchElement)).join('|') +
				'|(?:^.+$))',
			'gm'
		);

		console.log(str.match(r));

		return [...str.match(r)];
	}

	/**
	 *
	 * @param {string[]} subs
	 */
	static convert(subs) {
		return subs.map((x) =>
			(
				MDRender.elementTypes.find((y) => y.matchElement.test(x)) ?? PlainText
			).convert(x)
		);
	}
});

class ElementType {
	static matchElement = /TEMPLATE DO NOT USE/m;
	/**
	 *
	 * @param {string} sub
	 */
	static convert(sub) {
		return <p class={style.text}>{sub}</p>;
	}
}

class PlainText extends ElementType {
	static matchElement = /(^.+$)/m;
	/**
	 *
	 * @param {string} sub
	 */
	static convert(sub) {
		const m = sub.match(/^.+$/);
		return <p class={style.text}>{m[0]}</p>;
	}
}

class Header extends ElementType {
	static matchElement = /(^#+ [^\n]+$)/m;
	/**
	 *
	 * @param {string} sub
	 */
	static convert(sub) {
		const m = sub.match(/^(#+) (.+)$/);
		return (
			<p
				style={{ fontSize: 2.5 * 0.8 ** m[1].length + 'em' }}
				class={style.text + ' ' + style.header}
			>
				{m[2]}
			</p>
		);
	}
}

MDRender.elementTypes.push(Header);

export default MDRender;
