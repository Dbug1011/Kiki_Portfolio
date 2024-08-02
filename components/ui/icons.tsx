import React from 'react';
import { SiArduino, SiBlender } from 'react-icons/si';
import { BsAndroid } from 'react-icons/bs';
import { RiNextjsFill } from 'react-icons/ri';
import Link from 'next/link';

const Icons = () => {
	return (
		<div className='flex gap-4 text-white text-7xl mx-auto w-full'>
			<Link href={'#'}>
				<SiArduino className='hover:scale-110 transition-transform' />
			</Link>
			<BsAndroid className='hover:scale-110 transition-transform' />
			<RiNextjsFill className='hover:scale-110 transition-transform' />
			<SiBlender className='hover:scale-110 transition-transform' />
		</div>
	);
};

export default Icons;
