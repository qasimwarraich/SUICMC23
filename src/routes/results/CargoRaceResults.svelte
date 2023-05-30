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
