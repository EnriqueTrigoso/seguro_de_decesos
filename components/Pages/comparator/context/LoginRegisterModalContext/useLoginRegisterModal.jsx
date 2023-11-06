import { useContext } from "react";
import { LoginRegisterModalContext } from "./LoginRegisterModalContext";

export const useLoginRegisterModal = () => {
	
	const context = useContext(LoginRegisterModalContext);

	if (!context) {
		throw new Error('useLoginRegister debe ser usado dentro de un LoginRegisterProvider');
	}

	return context;
};