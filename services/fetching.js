export const GET = async (xToken, url) => {
	const headers = {
		"Content-Type": "text/plain",
		"x-token": xToken,
	};

	// console.log('GET')
	// console.log('API_URL_AWS')
	// console.log(process.env.NEXT_PUBLIC_API_URL)

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
		method: "GET",
		headers: headers,
	}
	);

	return res;
}

export const POST = async (url, body, token) => {

	const headers = {
		"Content-Type": "text/plain",
	}
	
	if (token) {
		headers["x-token"] = token;
	}
	// console.log('POST')
	// console.log('API_URL_AWS')
	// console.log(process.env.NEXT_PUBLIC_API_URL)

	// const api_url = mode === 'prod' ? process.env.NEXT_PUBLIC_URL_PROD : process.env.NEXT_PUBLIC_URL_DEV
	const api_url = process.env.NEXT_PUBLIC_API_URL

	return fetch(`${api_url}${url}`, {
		method: "POST",
		headers: headers,
		body: JSON.stringify(body),
	}).then(res => res.json());
}

export const verificar_email = async (email) => {
	const response = await POST(
		'/user/verify_existing_email',
		{ email }
	)
	return response
}
