<script lang="ts">
	let data = [];
	let startsWith = 'a';
	let numberOfWords = 0;
	let dataPromise;

	// 4. POST via form submit
	//   params passed in body
	//   retrieved via request.formData()
</script>

<h2>POST by form submit</h2>
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
