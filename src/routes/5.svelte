<script lang="ts">
	let data = [];
	let startsWith = 'a';
	let numberOfWords = 0;
	let dataPromise;
	let isLoading = false;

	// 1. path parameters
	//    GET api/listOfWords/ab/2
	//    api/listOfWords/[numberOfWords]/[startsWith]/index.ts

	// async function fetchData() {
	// 	const response = await fetch(`api/listOfWords/${numberOfWords}/${startsWith}`);
	// 	return await response.json();
	// }

	// 2. query parameters
	//    GET api/listOfWords?numberOfWords=2&startsWith=a
	//    api/listOfWords/index.ts

	// async function fetchData() {
	// 	const query = new URLSearchParams();
	// 	if (numberOfWords) query.set('numberOfWords', numberOfWords.toString());
	// 	if (startsWith) query.set('startsWith', startsWith);
	// 	const response = await fetch(`api/listOfWords?${query.toString()}`);
	// 	return await response.json();
	// }

	// 3. POST
	//   params passed in body
	//   retrieved via request.json()

	async function fetchData() {
		const response = await fetch(`api/listOfWords`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				numberOfWords,
				startsWith
			})
		});
		return await response.json();
	}

	// 4. FORM submit
</script>

<form action="api/form" method="POST">
	<label>Starts with<input name="startsWith" type="text" bind:value={startsWith} /></label>
	<label
		>Number of words<input
			name="numberOfWords"
			type="number"
			min="0"
			bind:value={numberOfWords}
		/></label
	>
	<!-- <button
	on:click={() => {
		dataPromise = fetchData();
	}}>Fetch data</button
> -->

	<button type="submit">Fetch data</button>
</form>

{#if dataPromise}
	{#await dataPromise}
		<!-- promise is pending -->
	{:then data}
		<ul>
			{#each data as item}
				<li />
				{item}
			{/each}
		</ul>
	{/await}
{/if}
