<script lang="ts">
	import { data } from '$lib/data/results/main_race/results';

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

	let allResults: Result[] = JSON.parse(data);
	let filteredResults: Result[] = [...allResults];

	const bikeOptions = ['carbon', 'aluminium', 'steel', 'tractor'];
	const gearOptions = ['fixed', 'singlespeed', 'geared'];
	const ageOptions = ['10-20', '21-30', '31-40', '41-50', '51-60', '61+'];

	let gearSelections: string[] = [];
	let bikeSelections: string[] = [];
	let ageSelections: string[] = [];

	function filter(gearSelections: string[], bikeSelections: string[], ageSelections: string[]) {
		filteredResults = allResults.filter((item: Result) => {
			return (
				(bikeSelections.length == 0 || bikeSelections.includes(item.bike)) &&
				(gearSelections.length == 0 || gearSelections.includes(item.gears)) &&
				(ageSelections.length == 0 || ageSelections.includes(item.age))
			);
		});
	}

	$: filter(gearSelections, bikeSelections, ageSelections);
</script>

<div class="flex flex-col items-center border-theme-1 border-2 w-full">
	<h1 class="text-theme-1 text-2xl">Main Race Results</h1>
	<h2 class="pb-2">
		Use the following checkboxes to <span class="animate-pulse text-theme-1">highlight</span> the results
	</h2>
	<div class="flex-col pb-2">
		<div>
			<span class="text-theme-1 font-bold px-2"> Gear(s):</span>
			{#each gearOptions as gearOpt}
				<label>
					<input type="checkbox" class="mx-2" bind:group={gearSelections} value={gearOpt} />
					{gearOpt}
				</label>
			{/each}
		</div>
		<div>
			<span class="text-theme-1 font-bold px-2">Bike:</span>
			{#each bikeOptions as bikeOpt}
				<label>
					<input type="checkbox" class="mx-2" bind:group={bikeSelections} value={bikeOpt} />
					{bikeOpt}
				</label>
			{/each}
		</div>
		<div>
			<span class="text-theme-1 font-bold px-2">Age:</span>
			{#each ageOptions as ageOpt}
				<label>
					<input type="checkbox" class="mx-2" bind:group={ageSelections} value={ageOpt} />
					{ageOpt}
				</label>
			{/each}
		</div>
	</div>
	{#if filteredResults.length == 0}
		<h2 class="text-theme-1">Your search doesn't match any results</h2>
	{/if}
	{#if filteredResults.length !== allResults.length && filteredResults.length > 0}
		<h2 class="">
			Your search matches <span class="text-theme-1 font-bold">{filteredResults.length}</span>
			result{filteredResults.length > 1 ? 's' : ''}
		</h2>
	{/if}
	<div class="h-[600px]  w-full overflow-y-auto overflow-x-auto">
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
