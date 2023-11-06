import { useEffect, useState } from "react";
import { isLoginContext } from "./IsLoginContext";

export const IsLoginProvider = ({ children }) => {

	const [isLogin, setIsLogin] = useState(null);
	const [isLoggedOut, setIsLoggedOut] = useState(false);

	useEffect(() => {
		
		let userData = JSON.parse(window.localStorage.getItem('userDataEva'));
		let isUserLogin = Boolean(userData);

		if (isUserLogin) {

			setIsLogin({
				name: userData['name'],
				surname: userData['surname'],
				photo: userData['photo']
			})
			
		}


	}, []);

	useEffect(() => {
		if (isLoggedOut) {
			setIsLogin(null);
			setIsLoggedOut(false);
		}
	}, [isLoggedOut]);

	return (
		<isLoginContext.Provider value={{ isLogin, setIsLogin, setIsLoggedOut }}>
			{children}
		</isLoginContext.Provider>
	);
};