import React, { createContext, useState } from 'react';

export const ContextVariable = createContext();

export const ContextFunction = ({ children }) => {
	const [isProjectRendered, setIsProjectRendered] = useState(true);

	return (
		<ContextVariable.Provider
			value={{ isProjectRendered, setIsProjectRendered }}
		>
			{children}
		</ContextVariable.Provider>
	);
};
