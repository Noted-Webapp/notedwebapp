export type Note = { name: string; tags: string[]; content: string };
type TagDef = { color: string };

export type NoteData = {
	tags: Record<string, TagDef>;
	notes: Note[];
};
