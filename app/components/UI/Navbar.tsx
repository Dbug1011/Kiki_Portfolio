'use client';
import { useCookies } from 'react-cookie';
import React, { FormEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import VideoHeader from '@/components/VideoHeader';
import HomeProps from '@/app/page';
import { useSwitchContext } from '@/app/context/switch-context';

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
	// const [cookies, setCookie] = useCookies(["Switch"]);
	// const [isOn, setIsOn] = useState(false);
	// const [kiki, setKiki] = useState("");

	// useEffect(() => {
	//   if (cookies.Switch !== undefined) {
	//     setIsOn(cookies.Switch === "true");
	//   }
	// }, [cookies.Switch]);

	const handleSwitch = () => {
		const newIsOn = !isOn;
		setIsOn(newIsOn);
		// setCookie("Switch", newIsOn, {
		//   path: "/",
		//   maxAge: 25920000,
		// });
	};

	return (
		<div className='w-full flex md:flex-row flex-col items-start text-white justify-between p-4 z-[999] gap-2'>
			<div className='w-[120px]'>
				<Switch
					onCheckedChange={handleSwitch}
					checked={isOn}></Switch>
			</div>
			<div className='font-roboto text-xl font-bold space-x-3'>GET TO KNOW ME</div>
			<a href='/Karis-Ruth-Jumawan-FlowCV-Resume.pdf'>
				<Button
					className='w-[120px]'
					variant={'default-white'}>
					RESUME
				</Button>
			</a>
		</div>
	);
};

export default Navbar;
