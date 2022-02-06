import { useEffect, useState } from 'react';
import { BreedGrid } from './BreedGrid';

export const BreedsScreen = () => {
	const [breeds, setBreeds] = useState([]);

	useEffect(() => {
		const getBreeds = async () => {
			const resp = await fetch('https://dog.ceo/api/breeds/list/all');
			const data = await resp.json();

			const breeds = data.message;

			let breedsArr = [];

			for (const breed in breeds) {
				if (breeds[breed].length) {
					const subBreeds = breeds[breed];

					breedsArr = [
						...breedsArr,
						...subBreeds.map(subBreed => ({
							name: `${subBreed} ${breed}`,
							searchUrl: `${breed}/${subBreed}`
						}))
					];
				} else {
					breedsArr = [...breedsArr, { name: breed, searchUrl: breed }];
				}
			}

			setBreeds(breedsArr);
		};

		getBreeds();
	}, []);

	return (
		<main className="container">
			<BreedGrid breeds={breeds} />
		</main>
	);
};
