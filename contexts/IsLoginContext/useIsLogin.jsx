import { useContext } from "react";
import { isLoginContext } from "./IsLoginContext";

export const useIsLogin = () => {
	
	const context = useContext(isLoginContext);

	if (!context) {
		throw new Error('useIsLogin debe ser usado dentro de un IsLoginProvider');
	}

	return context;
};