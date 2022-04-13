import data from '$lib/data';

// 4. Form data
export async function post({ request }) {
	const { numberOfWords, startsWith } = Object.fromEntries(await request.formData());
	const words = data.filter((word) => word.startsWith(startsWith)).slice(0, numberOfWords);
	return {
		body: words
	};
}
