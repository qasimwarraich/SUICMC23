<script lang="ts">
	import { data } from '$lib/data/results/cargo_race/results';

	type Result = {
		first_name: string;
		race_number: number;
		points: number;
		time: string;
	};

	let allResults: Result[] = JSON.parse(data);
    </script>

<div class="flex flex-col items-center border-theme-1 border-2 w-full">
	<h1 class="text-theme-1 text-2xl">Cargo Race Results</h1>
	<table class="text-xs md:text-lg p-20 ">
		<tr class="bg-white">
			<th>Name</th>
			<th>#</th>
			<th>Points</th>
			<th>Time</th>
		</tr>
		{#each allResults as r}
			<tr class="bg-white">
				<td>{r.first_name}</td>
				<td>{r.race_number}</td>
				<td>{r.points}</td>
				<td>{r.time}</td>
			</tr>
		{/each}
	</table>
</div>

<style>
	td {
		text-align: center;
	}

	th {
		margin-left: 1rem;
		margin-right: 1rem;
		position: sticky;
		background-color: white;
		box-shadow: inset 0px 2px 0px var(--color-theme-1), inset 0px -2px 0px 0px var(--color-theme-1);

		top: 0;
	}

	td {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	tr {
		border-top: var(--color-theme-1) 1px solid;
		transition: color 0.2s ease;
		transition: background 0.2s ease;
	}
</style>
