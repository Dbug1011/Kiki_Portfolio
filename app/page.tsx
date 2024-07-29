import { cookies } from 'next/headers';
import LandingPage from './layouts/LandingPage';

const Home = () => {
	return (
		<main className='bg-[rgb(22,22,22)] w-full flex h-screen flex-col items-center justify-between p-10'>
			<LandingPage />
		</main>
	);
};

export default Home;
