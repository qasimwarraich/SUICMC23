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
	<div>
		<h2 class="text-xs">
			Best Checkpoint: Foncedé (Anna & Mimi)
			<br />
			1st place: Team 3920: Verena, Phippu, Nik & Tom w/ 61 points
			<br />
			1st out of town: Team 777: Max, Ruben, Suzanne & Iris w/ 60pts
			<br />
			DFL: Team 999: Hajime, Arturo, Gui Gui (Nooch Shift) & Olaf w/ 18pts
			<br />
			Most Average Team: 5846: Ines, Taro, Marie & Regine (VKB shift) w/ 40pts
		</h2>
	</div>
	<table class="text-xs md:text-lg mt-2 ">
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
	th {
        border-top: 1px solid var(--color-theme-1);
	}

	td {
		text-align: center;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	tr:nth-child(even) {
		color: white;
		background-color: var(--color-theme-1);
	}
</style>
