import { Component, createRef } from 'preact';
import MDRender from './MarkdownRender';
import style from './style.css';

class MarkdownLine extends Component<
	{
		line: string;
		lineNum: number;
		updateLine: (index: number, text: string) => void;
	},
	{ editing: boolean }
> {
	constructor() {
		super();

		this.state = { editing: false };
	}

	// Lifecycle: Called whenever our component is created
	componentDidMount() {}

	// Lifecycle: Called just before our component will be destroyed
	componentWillUnmount() {}

	resize(e: KeyboardEvent) {
		(e.target as HTMLTextAreaElement).style.height = '0';
		(e.target as HTMLTextAreaElement).style.height =
			(e.target as HTMLTextAreaElement).scrollHeight + 'px';
	}

	onKey(fun: (index: number, text: string) => void, ln: number) {
		const that = this;
		const f = that.handleFinishEdit(fun, ln);
		return function (e: KeyboardEvent) {
			if (e.key == 'Enter' && e.ctrlKey) f(e);
		}.bind(that);
	}

	handleFinishEdit(fun: (index: number, text: string) => void, ln: number) {
		const that = this;
		return function (e: { target: { value: any } }) {
			fun(ln, e.target.value);
			that.setState({ editing: false });
		}.bind(that);
	}

	render({ line, updateLine, lineNum }, state: { editing: boolean }) {
		console.log(state);
		return state.editing ? (
			<textarea
				onBlur={this.handleFinishEdit(updateLine, lineNum)}
				onKeyPress={this.onKey(updateLine, lineNum)}
				onKeyUp={this.resize}
				onKeyDown={this.resize}
				class={style.editorInput}
				type="text"
				value={line}
			></textarea>
		) : (
			<div
				onClick={(e) => {
					this.setState({ editing: true });
				}}
			>
				{MDRender.convert([line])}
			</div>
		);
	}
}

export default MarkdownLine;
