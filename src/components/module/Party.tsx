import { useNavigate } from 'react-router-dom';
import ModuleGrid from '../ModuleGrid';

function Party() {
	const navigate = useNavigate();

	const onLogout = () => {
		navigate('/');
	};

	return (
		<>
			<h2>Party</h2>
			<ModuleGrid/>
		</>
	);
}

export default Party;