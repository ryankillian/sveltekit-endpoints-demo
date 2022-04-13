import data from '$lib/data';

export async function get({ params }) {
	const numberOfWords = parseInt(params.numberOfWords);
	const startsWith = params.startsWith.toLowerCase();
	const words = data.filter((word) => word.startsWith(startsWith)).slice(0, numberOfWords);
	return {
		body: words
	};
}
