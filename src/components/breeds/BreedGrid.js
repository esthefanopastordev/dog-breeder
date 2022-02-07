import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { getAlphabet } from '../../util/getAlphabet';

import './BreedGrid.css';

import { BreedGridItem } from './BreedGridItem';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const BreedGrid = ({ breeds = [] }) => {
	const [filteredBreeds, setFilteredBreeds] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const currentLetter = searchParams.get('letter');

	useEffect(() => {
		let letter = searchParams.get('letter');
		const letterIsValid = getAlphabet().find(l => l.toLowerCase() === letter);

		if (letter) {
			if (letterIsValid) {
				letter = letter.toLowerCase();
				const filtered = breeds.filter(
					breed => breed.name.charAt(0) === letter
				);

				setFilteredBreeds(filtered);
			} else {
				navigate('/breeds');
			}
		} else {
			setFilteredBreeds(breeds);
		}
	}, [breeds, searchParams, navigate]);

	const handleFilterByLetter = (letter = '') => {
		if (letter) setSearchParams({ letter });
		else setSearchParams({});
	};

	return (
		<>
			<h1 className="mb-4">Breeds</h1>

			<ol className="alphabet-filter mb-4">
				<li
					className={!currentLetter ? 'active' : ''}
					onClick={() => handleFilterByLetter()}
				>
					All
				</li>

				{getAlphabet().map(letter => (
					<li
						key={letter}
						className={currentLetter === letter.toLowerCase() ? 'active' : ''}
						onClick={() => handleFilterByLetter(letter.toLowerCase())}
					>
						{letter}
					</li>
				))}
			</ol>

			{filteredBreeds.length > 0 ? (
				<div className="cards-container">
					{filteredBreeds.map(breed => (
						<BreedGridItem key={breed.name} breed={breed} />
					))}
				</div>
			) : (
				<h4 className="text-center">Nothing to show 😢</h4>
			)}
		</>
	);
};

BreedGrid.propTypes = {
	breeds: PropTypes.array.isRequired
};
