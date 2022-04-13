import data from '$lib/data';

// 2. query parameters
//    GET api/listOfWords?numberOfWords=2&startsWith=a
//    api/listOfWords/index.ts

export async function get({ url }) {
	const numberOfWords = parseInt(url.searchParams.get('numberOfWords'));
	const startsWith = url.searchParams.get('startsWith');
	const words = data.filter((word) => word.startsWith(startsWith)).slice(0, numberOfWords);
	return {
		body: words
	};
}

// 3. POST
//   params passed in body
//   retrieved via request.json()

export async function post({ request }) {
	const { numberOfWords, startsWith } = await request.json();
	const words = data.filter((word) => word.startsWith(startsWith)).slice(0, numberOfWords);
	return {
		body: words
	};
}
