import { useState } from "react";
import { LoginRegisterModalContext } from "./LoginRegisterModalContext";

export const LoginRegisterModalProvider = ({ children }) => {

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [sendData, setSendData] = useState(false)
	const [isOpenEmailModal, setIsOpenEmailModal] = useState(false);
	const [comparativeData, setComparativeData] = useState({})

	return (
		<LoginRegisterModalContext.Provider value={{ isOpenModal, setIsOpenModal, sendData, setSendData, isOpenEmailModal, setIsOpenEmailModal, comparativeData, setComparativeData }}>
			{children}
		</LoginRegisterModalContext.Provider>
	);
};