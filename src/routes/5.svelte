<script lang="ts">
	let data = [];
	let startsWith = 'a';
	let numberOfWords = 0;
	let dataPromise;

	// 3. Graphql via POST
	//   query and params passed in body
	//   retrieved via (request.json())data.listOfWords

	async function fetchData() {
		const response = await fetch(`api/graphql`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `{ listOfWords(startsWith: "${startsWith}", numberOfWords: ${numberOfWords}) }`
			})
		});
		return (await response.json()).data.listOfWords;
	}
</script>

<h2>Graphql</h2>
<label>Starts with<input name="startsWith" type="text" bind:value={startsWith} /></label>
<label
	>Number of words<input
		name="numberOfWords"
		type="number"
		min="0"
		bind:value={numberOfWords}
	/></label
>
<button
	on:click={() => {
		dataPromise = fetchData();
	}}>Fetch data</button
>

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
