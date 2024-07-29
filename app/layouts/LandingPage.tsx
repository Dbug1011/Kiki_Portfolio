'use client';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import VideoHeader from '@/components/VideoHeader';
import React from 'react';
import { useSwitchContext } from '../context/switch-context';
import Navbar from '../components/UI/Navbar';

const LandingPage = () => {
	const { setIsOn, isOn } = useSwitchContext();
	return (
		<div className='w-full flex flex-col h-full bg-black md:p-5 p-2 rounded-md item-start justify-between relative'>
			<Navbar />
			{isOn ? (
				<>
					<div className='w-full h-full md:block hidden'>
						<VideoHeader />
						{/* landscape ratio */}
					</div>
					<div className='w-full h-full md:hidden block'>
						<VideoHeader />
						{/* portrait ratio */}
					</div>
				</>
			) : (
				<div className='flex flex-col w-full h-fit gap-5 px-5 justify-between'>
					<div className='text-white font-roboto font-extrabold md:text-7xl text-4xl w-full'>
						KARIS RUTH JUMAWAN
						<br />
						<TextRevealCard
							text='She Goes Tech'
							revealText='Software Developer'
						/>
					</div>
					<button className='text-sm font-semibold px-6 py-3 border text-black bg-white border-white hover:bg-transparent hover:text-white rounded-full h-fit w-fit text-nowrap uppercase'>
						Click Me
					</button>
				</div>
			)}
			<div className='text-white font-roboto text-sm text-center mx-auto'>@Kiki/2024</div>
		</div>
	);
};

export default LandingPage;
