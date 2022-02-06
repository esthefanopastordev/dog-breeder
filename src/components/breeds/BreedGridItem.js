import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import './BreedGridItem.css';

export const BreedGridItem = ({ breed }) => {
	const [imageUrl, setImageUrl] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const getRandomImageFromBreed = async () => {
			const resp = await fetch(
				`https://dog.ceo/api/breed/${breed.searchUrl}/images/random`
			);
			const data = await resp.json();

			const imageUrl = data.message;
			setImageUrl(imageUrl);
		};

		getRandomImageFromBreed();
	}, []);

	const navigateBreed = () => {
		const { name } = breed;
		const isSubBreed = name.trim().includes(' ');
		let url = '';

		if (isSubBreed) url = name.replace(' ', '-');
		else url = name;

		navigate(`/breed/${url}`);
	};

	return (
		<div
			className="card-item"
			style={{ backgroundImage: `url(${imageUrl})` }}
			onClick={navigateBreed}
		>
			<div className="card-item__body">
				<h5 className="card-item__title">{breed.name}</h5>
			</div>
		</div>
	);
};

BreedGridItem.propTypes = {
	breed: PropTypes.object.isRequired
};
