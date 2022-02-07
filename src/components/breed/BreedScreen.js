import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import './BreedScreen.css';

import { capitalizeText } from '../../util/capitalizeText';

export const BreedScreen = () => {
	const [urlImage, setUrlImage] = useState('');
	const { breedName } = useParams();

	useEffect(() => {
		const getRandomImageFromBreed = async () => {
			let url = '';

			if (breedName.includes('-')) {
				url = `https://dog.ceo/api/breed/${breedName.replace(
					'-',
					'/'
				)}/images/random`;
			} else {
				url = `https://dog.ceo/api/breed/${breedName}/images/random`;
			}

			const resp = await fetch(url);
			const { message } = await resp.json();
			setUrlImage(message);
		};

		getRandomImageFromBreed();
	}, []);

	return (
		<main className="breed-screen__container container text-center">
			<h2 className="mb-4">
				Look at this cute {capitalizeText(breedName.replace('-', ' '))}
			</h2>

			<div
				className="breed-screen__img mb-4"
				style={{ backgroundImage: `url(${urlImage})` }}
			></div>

			<button type="button" className="btn btn-dark">
				get another image
			</button>
		</main>
	);
};
