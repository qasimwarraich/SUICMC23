<script lang="ts">
	import { data } from '$lib/data/results/skid/results';

	type Result = {
		race_number: number;
		achievement: string;
	};

	let allResults: Result[] = JSON.parse(data);
</script>

<div class="flex flex-col items-center border-theme-1 border-2 w-full">
	<h1 class="p-2 text-theme-1 text-2xl">Skid Results</h1>
	<div class="  w-full overflow-y-auto overflow-x-auto">
	<table class="w-full text-xs md:text-lg mt-2  ">
		<tr class="bg-white">
			<th>Race Number</th>
			<th>Achievement</th>
		</tr>
		{#each allResults as r}
			<tr class="bg-white">
				<td>{r.race_number}</td>
				<td>{r.achievement}</td>
			</tr>
		{/each}
	</table>
</div>
</div>

<style>
	th {
		border-top: 1px solid var(--color-theme-1);
	}

	td {
		text-align: center;
		padding-left: 1rem;
		padding-right: 1rem;
		word-break: break-word;
	}

	tr:nth-child(even) {
		color: white;
		background-color: var(--color-theme-1);
	}
</style>
