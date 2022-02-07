import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-4">
			<div className="container">
				<NavLink className="navbar-brand" to="/breeds">
					DogsApp
				</NavLink>
			</div>
		</nav>
	);
};
