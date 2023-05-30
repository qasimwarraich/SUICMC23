<script lang="ts">
	import { data } from '$lib/data/results/dispo_cat/results';

	type Result = {
		dispatcher: string;
		rider_1: string;
        rider_2: string;
		rider_3: string;
		race_number: number;
		points: number;
		time: string;
	};

	let allResults: Result[] = JSON.parse(data);
    </script>

<div class="flex flex-col items-center border-theme-1 border-2 w-full">
	<h1 class="text-theme-1 text-2xl">Dispocat Results</h1>
	<table class="text-xs md:text-lg p-20 ">
		<tr class="bg-white">
			<th>Dispatcher</th>
			<th>Rider 1</th>
			<th>Rider 2</th>
			<th>Rider 3</th>
			<th>Points</th>
		</tr>
		{#each allResults as r}
			<tr class="bg-white">
				<td>{r.dispatcher}</td>
				<td>{r.rider_1}</td>
				<td>{r.rider_2}</td>
				<td>{r.rider_3}</td>
				<td>{r.points}</td>
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
