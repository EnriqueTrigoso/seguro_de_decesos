
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useVerifyParams = () => {

	const [params, setParams] = useState({})
	const [isVerifyParams, setIsVerifyParams] = useState(false)

	useEffect(() => {

		const urlParams = new URLSearchParams(window.location.search);

		try {

			const name = decodeURIComponent(urlParams.get('name') || '');
			const email = decodeURIComponent(urlParams.get('email') || '');
			const phone = decodeURIComponent(urlParams.get('phone') || '');
			const postal_code = decodeURIComponent(urlParams.get('postal_code') || '');
			const birthdates = decodeURIComponent(urlParams.get('birthdates') || '').split(',');

			setIsVerifyParams(true)
			
			if (!name || !email || !phone || !postal_code || !birthdates) {
				return
			}

			setParams(
				{
					name,
					email,
					phone,
					postal_code,
					birthdates
				}
			)

		} catch {
			return
		}

	}, [])


	return {
		isVerifyParams,
		params,
	};
};

export default useVerifyParams;
