export const capitalizeText = text => {
	const capitalizedWords = text.split(' ').map(word => {
		const firstLetter = word.charAt(0);
		const wordRest = word.slice(1);
		return `${firstLetter.toUpperCase()}${wordRest}`;
	});

	return capitalizedWords.join(' ');
};
