export const randomToken = (
	length = 32,
	alphabet = '0123456789abcdef'.split('')
) =>
	new Array(length)
		.fill(0)
		.map((x) => alphabet[(Math.random() * alphabet.length) | 0])
		.join('');
