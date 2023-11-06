import { useEffect, useState } from "react";


function useVerifySession() {

	const [isVerifySession, setIsVerifySession] = useState(false)
	const [userDataFound, setUserDataFound] = useState(false)

	useEffect(() => {

		const userData = window.localStorage.getItem('userDataEva')
		userData ? setUserDataFound(true) : setUserDataFound(false)
		setIsVerifySession(true)

	}, []);

	return {
		isVerifySession,
		userDataFound,
	}
}

export default useVerifySession;