<script lang="ts">
	let data = [];
	let startsWith = 'a';
	let numberOfWords = 0;
	let dataPromise;

	// 2. query parameters
	//    GET api/listOfWords?numberOfWords=2&startsWith=a
	//    api/listOfWords/index.ts

	async function fetchData() {
		const query = new URLSearchParams();
		if (numberOfWords) query.set('numberOfWords', numberOfWords.toString());
		if (startsWith) query.set('startsWith', startsWith);
		const response = await fetch(`api/listOfWords?${query.toString()}`);
		return await response.json();
	}
</script>

<h2>GET with request params</h2>
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
