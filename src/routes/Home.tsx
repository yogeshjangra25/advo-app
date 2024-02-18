import { useNavigate } from 'react-router-dom';

function Home() {
	const navigate = useNavigate();

	const onLogout = () => {
		navigate('/');
	};

	return (
		<>
			<h2>Home</h2>
		</>
	);
}

export default Home;