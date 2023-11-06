
export const setEvaCookie = () => {

	const token = localStorage.getItem('eva-cookie-token')

	if (!token) {

		const promise1 = fetch('https://get.geojs.io/v1/ip/geo.json')
			.then(response => response.json())

		const promise2 = fetch(`${process.env.NEXT_PUBLIC_API_URL}/tracking/generate_cookie_token`)
			.then(response => response.json())

		Promise.allSettled([
			promise1, promise2
		])
			.then((results) => {

				let data = []

				results.forEach((result) => {

					if (result.status === 'fulfilled') {
						data.push(result.value)
					} else {
						data.push({})
						// console.log(result.reason);
					}
				});

				localStorage.setItem('eva-cookie-token', data[1].cookie_token)

				const userInformation = {
					cookie_token: data[1].cookie_token,
					city: data[0].city,
					country_code: data[0].country_code,
					ip: data[0].ip
				}

				fetch(`${process.env.NEXT_PUBLIC_API_URL}/tracking/add_token_data`, {
					method: 'POST',
					body: JSON.stringify(userInformation),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => response.json())
					.then(data => {

					})
					.catch(error => {

					});

			})
			.catch(error => {
				// console.log({ error })
			})

	}
}

