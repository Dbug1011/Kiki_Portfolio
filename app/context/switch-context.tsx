'use client';
import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

//createContext
//createProvider
//useContext

interface SwitchContextType {
	isOn: boolean;
	setIsOn: (value: boolean) => void;
}

const SwitchContext = createContext<SwitchContextType | undefined>(undefined);

export const SwitchProvider = ({ children }: { children: ReactNode }) => {
	const [isOn, setIsOn] = useState<boolean>(false);

	const contextValue = useMemo(
		() => ({
			setIsOn,
			isOn,
		}),
		[isOn]
	);

	return <SwitchContext.Provider value={contextValue}>{children}</SwitchContext.Provider>;
};

export const useSwitchContext = () => {
	const context = useContext(SwitchContext);

	if (!context) {
		throw new Error('UseSwitchContext must be within a SwitchContext Provider');
	}

	return context;
};
