<script lang="ts">
	export let data;
	const { participants } = data;
</script>

<svelte:head>
	<title>SUICMC23 BERN: Participants</title>
	<meta name="description" content="Registered participants for SUICMC23 Bern" />
</svelte:head>

<h1 class="font-bold text-theme-1 mb-10">Participants</h1>

<div class="flex flex-col items-center justify-center">
	<table class="border-theme-1 border-2 text-xs md:text-lg">
		<tr>
			<th>Name</th>
			<th>Nick Name</th>
			<th>Race Number</th>
			<th>Team</th>
			<th>City</th>
		</tr>
		{#each participants as p}
			<tr>
				<td>{p.first_name}</td>
				<td>{p.nick_name}</td>
				<td>{p.race_number}</td>
				<td>{p.team}</td>
				<td>{p.city}</td>
			</tr>
		{/each}
	</table>
</div>

<style>
	td {
		text-align: center;
		word-break: break-word;
	}

	tr:nth-child(even) {
		color: white;
		background-color: var(--color-theme-1);
	}
</style>
