import { useParams } from 'react-router-dom';

import { capitalizeText } from '../../util/capitalizeText';

export const BreedScreen = () => {
	const { breedName } = useParams();

	console.log(breedName);

	return (
		<main className="container breed-screen__container">
			<h2>Look at this cute {capitalizeText(breedName.replace('-', ' '))}</h2>

			<img src="" alt="" />
		</main>
	);
};
