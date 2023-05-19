<script lang="ts">
	import { data } from '$lib/data/results/main_race/results';
	import { writable } from 'svelte/store';

	type Result = {
		first_name: string;
		race_number: number;
		points: number;
		time: string;
		team: string;
		city: string;
		pronouns: string;
		gears: string;
		bike: string;
		age: string;
	};

	type FilterCriteria = {
		gear: string;
		bike: string;
		age: string;
	};

	let allResults: Result[] = JSON.parse(data);
	let filteredResults: Result[] = [...allResults];

	const Search = writable({
		age: '',
		gear: '',
		bike: ''
	});

	function filter(search: FilterCriteria) {
		filteredResults = allResults.filter((item: Result) => {
			return (
				(!search.gear || item.gears.match(`${search.gear}.*`)) &&
				(!search.age || item.age.match(`^${search.age}.*`)) &&
				(!search.bike || item.bike.match(`^${search.bike}.*`))
			);
		});
	}

	$: filter($Search);
</script>

<div class="flex flex-col items-center border-theme-1 border-2 w-full">
	<h1 class="text-theme-1 text-2xl">Main Race Results</h1>
	<h2 class="pb-2">
		Use the following inputs to <span class="animate-pulse text-theme-1">highlight</span> the results
	</h2>
	<div class="w-2/6 ">
		<div class="grid grid-cols-5 items-center gap-1 pb-3">
			<label for="gear">Gear(s)</label>
			<input id="gear" bind:value={$Search.gear} />

			<label for="bike">Bike</label>
			<input id="bike" bind:value={$Search.bike} />

			<label for="age">Age</label>
			<input id="age" bind:value={$Search.age} />
		</div>
	</div>
	{#if filteredResults.length == 0}
		<h2 class="text-theme-1">Your search doesnt match any results</h2>
	{/if}
	<div class="h-[500px]  w-full overflow-y-auto overflow-x-auto">
		<table class="text-xs md:text-lg ">
			<tr class="bg-white">
				<th>Name</th>
				<th>#</th>
				<th>Points</th>
				<th>Time</th>
				<th>Team</th>
				<th>City</th>
				<th>Pronoun(s)</th>
				<th>Gear(s)</th>
				<th>Bike</th>
				<th>Age</th>
			</tr>
			{#each allResults as r}
				<tr
					class={filteredResults.length !== allResults.length && filteredResults.includes(r)
						? 'bg-theme-1 text-white'
						: 'bg-white'}
				>
					<td>{r.first_name}</td>
					<td>{r.race_number}</td>
					<td>{r.points}</td>
					<td>{r.time}</td>
					<td>{r.team}</td>
					<td>{r.city}</td>
					<td>{r.pronouns}</td>
					<td>{r.gears}</td>
					<td>{r.bike}</td>
					<td>{r.age}</td>
				</tr>
			{/each}
		</table>
	</div>
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

	input {
		border: 2px solid var(--color-theme-1);
		font-size: 0.8rem;
		grid-column: span 4 / span 4;
	}

	label {
		font-size: 0.8rem;
		font-weight: bold;
	}
</style>
