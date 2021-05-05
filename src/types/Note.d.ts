export type Note = { content: string; modified: number };
type TagDef = { color: string };

export type NoteData = {
	tags: Record<string, TagDef>;
	notes: Record<string, Note>;
};
