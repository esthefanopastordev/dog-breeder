export const getAlphabet = () => {
	const codes = Array.from(Array(26)).map((_, i) => i + 65);
	const alphabet = codes.map(x => String.fromCharCode(x));
	return alphabet;
};
