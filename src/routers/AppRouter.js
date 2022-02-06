import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { BreedScreen } from '../components/breed/BreedScreen';

import { BreedsScreen } from '../components/breeds/BreedsScreen';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path="/" element={<Navigate to="/breeds" />} />

				<Route path="breeds" element={<BreedsScreen />} />
				<Route path="breed/:breedName" element={<BreedScreen />} />

				{/* <Route
					path="*"
					element={
						<main className="container">
							<h1>There's nothing here!</h1>
						</main>
					}
				/> */}
			</Routes>
		</BrowserRouter>
	);
};
