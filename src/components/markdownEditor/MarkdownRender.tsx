import style from './style.css';

import { Header } from './markdownElements/Header/Header';
import { Tags } from './markdownElements/Tags/Tags';
import { ElementType } from './markdownElements/Base/Base';

const stripRegex = (a) =>
	a.toString().substr(1, a.toString().length - a.flags.length - 2);

// @ts-ignore
const MDRender = (window.MDRender = class MDRender {
	static elementTypes: {
		matchElement: RegExp;
		convert: (sub: string) => preact.JSX.Element;
	}[] = [];

	static splitParts(str: string) {
		const r = new RegExp(
			'(' +
				this.elementTypes.map((x) => stripRegex(x.matchElement)).join('|') +
				'|(?:^.+$))',
			'gm'
		);

		console.log(str.match(r));

		return [...str.match(r)];
	}

	static convert(subs: string[]) {
		return subs.map((x) =>
			(
				MDRender.elementTypes.find((y) => y.matchElement.test(x)) ?? PlainText
			).convert(x)
		);
	}
});

class PlainText extends ElementType {
	static matchElement = /(^.+$)/m;
	/**
	 *
	 * @param {string} sub
	 */
	static convert(sub) {
		console.log(sub);
		const m = sub.match(/^.+$/m);
		return <p class={style.text}>{m[0]}</p>;
	}
}

MDRender.elementTypes.push(Header);
MDRender.elementTypes.push(Tags);
export default MDRender;
