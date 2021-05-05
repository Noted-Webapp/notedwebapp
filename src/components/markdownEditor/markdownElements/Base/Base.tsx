import style from '../../style.css';

export class ElementType {
	static matchElement = /TEMPLATE DO NOT USE/m;
	/**
	 *
	 * @param {string} sub
	 */
	static convert(sub: string) {
		return <p class={style.text}>{sub}</p>;
	}
}
