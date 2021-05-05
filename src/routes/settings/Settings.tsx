import { Component, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import tagStyle from '../../components/markdownEditor/markdownElements/Tags/style.css';
import { NoteData } from '../../types/Note';

const flattenColor = (hex: string) =>
	parseInt(hex.substr(1, 2), 16) * 0.299 +
	parseInt(hex.substr(3, 2), 16) * 0.587 +
	parseInt(hex.substr(5, 2), 16) * 0.114;

const resetData = () => {
	if (confirm('Are you sure you want to reset ALL user data?')) {
		delete localStorage.notes;
		location.href = location.href;
	}
};

// Note: `user` comes from the URL, courtesy of our router
class Settings extends Component<
	{
		data: NoteData;
		updateState: (newData: Partial<NoteData>) => void;
		path?: string;
	},
	{ tagFormValue: string; tagFormIDValue: string }
> {
	state = { tagFormValue: '', tagFormIDValue: '' };

	onSubmitTagForm = ({ data, updateState }) => (e) => {
		updateState({
			tags: {
				...data.tags,
				[this.state.tagFormIDValue]:
					this.state.tagFormValue == ''
						? undefined
						: { color: this.state.tagFormValue },
			},
		});
		console.log(`[${this.state.tagFormIDValue}]: ${this.state.tagFormValue}`);
		e.preventDefault();
	};

	onInputTagForm = (e) => {
		const { value: tagFormValue } = e.target;
		this.setState({ tagFormValue });
	};
	onIDInputTagForm = (e) => {
		const { value: tagFormIDValue } = e.target;
		this.setState({ tagFormIDValue });
	};

	render({
		data,
		updateState,
	}: {
		data: NoteData;
		updateState: (newData: Partial<NoteData>) => void;
		path?: string;
	}) {
		const tagData = data.tags;

		return (
			<div class={style.profile}>
				<h1>Settings</h1>
				<button class={style.padding} onClick={resetData}>
					Reset Data
				</button>

				<form onSubmit={this.onSubmitTagForm({ data, updateState })}>
					<input
						type="text"
						value={this.state.tagFormIDValue}
						onInput={this.onIDInputTagForm.bind(this)}
					/>
					<input
						type="text"
						value={this.state.tagFormValue}
						onInput={this.onInputTagForm.bind(this)}
					/>
					<button type="submit">Submit</button>
				</form>

				<div class={style.padding + ' ' + style.box}>
					{Object.keys(tagData).map((x) => {
						const col = tagData[x]?.color;

						return (
							<div
								onClick={() =>
									this.setState({ tagFormIDValue: x, tagFormValue: col })
								}
								style={{
									'--tag-color': col,
									color:
										flattenColor(col) > 150
											? 'var(--col-fg-dark)'
											: 'var(--col-fg-light)',
								}}
								class={tagStyle.tag}
							>
								{x}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Settings;
