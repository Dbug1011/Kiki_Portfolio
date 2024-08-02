'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useSwitchContext } from '@/app/context/switch-context';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';

const NavbarItems = [
	{
		name: 'Home',
		icon: '',
		label: 'Home',
		url: '/',
	},
	{
		name: 'About-Kiki',
		icon: '',
		label: 'About-Kiki',
		url: '/about-kiki',
	},
	{
		name: 'Ambot',
		icon: '',
		label: 'ambot',
		url: '/ambot',
	},
	{
		name: 'Mao',
		icon: '',
		label: 'mao',
		url: '/mao',
	},
];

const Navbar = () => {
	const { isOn, setIsOn } = useSwitchContext();

	const handleSwitch = () => {
		const newIsOn = !isOn;
		setIsOn(newIsOn);
	};

	return (
		<div className='w-full flex items-start text-white justify-between p-4 z-[999]'>
			<div className='w-[200px] flex items-center gap-2'>
				<Switch onCheckedChange={handleSwitch} checked={isOn}></Switch>
				<span className='text-m animate-pulse text-white flex gap-2 items-center justify-center'>
					<IoIosArrowDown className='rotate-90' /> Toggle Me!
				</span>
			</div>
			<div className='font-roboto text-xl font-bold space-x-3'>GET TO KNOW ME</div>
			<div className='flex justify-end w-[200px]'>
				<Button asChild className='w-[100px]' font-roboto variant={'default-white'}>
					<Link href='/pdf/Karis-Ruth-Jumawan-FlowCV-Resume.pdf'>Resume</Link>
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
