import MDRender from '../../MarkdownRender';
import style from '../../style.css';
import { ElementType } from '../Base/Base';

export class Header extends ElementType {
	static matchElement = /(^#+ [^\n]+$)/m;
	static convert(sub: string) {
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
