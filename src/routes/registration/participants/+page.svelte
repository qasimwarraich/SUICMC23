<script lang="ts">
	export let data;
	const { participants } = data;
</script>

<h1 class="font-bold text-theme-1 mb-10">Participants</h1>

<table class="border-theme-1 border-2">
	<tr>
		<th>Name</th>
		<th>Nick Name</th>
		<th>Race Number</th>
		<th>City</th>
		<th>Category</th>
	</tr>
	{#each participants as p}
		<tr>
			<td>{p.first_name}</td>
			<td>{p.nick_name}</td>
			<td>{p.race_number}</td>
			<td>{p.city}</td>
			<td>{p.category}</td>
		</tr>
	{/each}
</table>

<style>
	td {
		text-align: center;
	}

	tr:nth-child(even) {
		color: white;
		background-color: var(--color-theme-1);
	}
</style>
