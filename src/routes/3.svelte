<script lang="ts">
	let data = [];
	let startsWith = 'a';
	let numberOfWords = 0;
	let dataPromise;

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
</script>

<h2>POST with body params</h2>
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
