import { useState } from 'react';

import PropTypes from 'prop-types';

import { getAlphabet } from '../../util/getAlphabet';

import './BreedGrid.css';

import { BreedGridItem } from './BreedGridItem';

export const BreedGrid = ({ breeds = [] }) => {
	const [currentLetter, setCurrentLetter] = useState('');

	return (
		<>
			<h1 className="mb-4">Breeds</h1>

			<ol className="alphabet-filter mb-4">
				<li className={!currentLetter ? 'active' : ''}>All</li>

				{getAlphabet().map(letter => (
					<li
						key={letter}
						className={currentLetter === letter.toLowerCase() ? 'active' : ''}
					>
						{letter}
					</li>
				))}
			</ol>

			<div className="cards-container">
				{breeds.map(breed => (
					<BreedGridItem key={breed.name} breed={breed} />
				))}
			</div>
		</>
	);
};

BreedGrid.propTypes = {
	breeds: PropTypes.array.isRequired
};
