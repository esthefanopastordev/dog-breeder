import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { capitalizeText } from '../../util/capitalizeText';

import './BreedScreen.css';

import { Spinner } from '../ui/Spinner';

export const BreedScreen = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [urlImage, setUrlImage] = useState('');
	const { breedName } = useParams();

	useEffect(() => {
		getRandomImageFromBreed();
	}, []);

	const getRandomImageFromBreed = async () => {
		if (isLoading) return;

		setIsLoading(true);

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
		setIsLoading(false);
	};

	return (
		<main className="breed-screen__container container text-center">
			<h2 className="mb-4">
				Look at this cute {capitalizeText(breedName.replace('-', ' '))}
			</h2>

			<div className="breed-screen__img__container mb-4">
				{isLoading ? (
					<Spinner />
				) : (
					<div
						className="breed-screen__img"
						style={{ backgroundImage: `url(${urlImage})` }}
					></div>
				)}
			</div>

			<button
				type="button"
				className="btn btn-dark"
				disabled={isLoading}
				onClick={getRandomImageFromBreed}
			>
				get another image
			</button>
		</main>
	);
};
