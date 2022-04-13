<nav>
	<ul>
		<li><a href="/">1. GET with path params</a></li>
		<li><a href="/2">2. GET with request params</a></li>
		<li><a href="/3">3. POST with body params</a></li>
		<li><a href="/4">4. POST by form submit</a></li>
		<li><a href="/5">5. Graphql</a></li>
	</ul>
</nav>
<slot />

<style>
	ul {
		display: flex;
		flex-direction: column;
		padding: 0px;
		margin: 0px;
		list-style: none;
	}
	li {
		margin-right: 20px;
		color: #555;
	}
	a {
		text-decoration: none;
	}
</style>
