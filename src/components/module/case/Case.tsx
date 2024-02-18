import { useNavigate } from 'react-router-dom';
import ModuleTable from '../../ModuleTable';

function Case() {
	const navigate = useNavigate();

	const onLogout = () => {
		navigate('/');
	};

	return (
		<>
			<h2>Case</h2>
			<ModuleTable/>
		</>
	);
}

export default Case;