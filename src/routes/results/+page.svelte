<script lang="ts">
	import CollapsibleHeading from '$lib/components/CollapsibleHeading.svelte';
	import chain from '$lib/images/kette.png';
	import PrizeInfo from './PrizeInfo.svelte';
	import ResultsInfo from './ResultsInfo.svelte';
	import MainRaceResults from './MainRaceResults.svelte';
	import CargoRaceResults from './CargoRaceResults.svelte';
    import DispoCatResults from './DispoCatResults.svelte';
	import HillSprintResults from './HillSprintResults.svelte';
	import SkidResults from './SkidResults.svelte';
</script>

<svelte:head>
	<title>SUICMC23 BERN: Results</title>
	<meta name="description" content="Info page for SUICMC23 Bern" />
</svelte:head>

<h1 class="flex flex-col items-center justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-80" src={chain} alt="SUICMC" />
	Results!
	<h2 class="pb-5">Click on the headings to reveal information :)</h2>
</h1>

<div class="flex flex-col items-center justify-center">
	<CollapsibleHeading title="Prize Info ℹ️">
		<PrizeInfo />
	</CollapsibleHeading>
	<CollapsibleHeading title="Results Info ℹ️">
		<ResultsInfo />
	</CollapsibleHeading>
	<CollapsibleHeading title="Main Race 🏁">
		<MainRaceResults />
	</CollapsibleHeading>
	<CollapsibleHeading title="Cargo Race 🚚">
		<CargoRaceResults />
	</CollapsibleHeading>
	<CollapsibleHeading title="Dispo 🐈‍⬛ ">
		<DispoCatResults />
	</CollapsibleHeading>
	<CollapsibleHeading title="Hill Sprint 😰 ">
		<HillSprintResults />
	</CollapsibleHeading>
	<CollapsibleHeading title="Skid 💨">
		<SkidResults />
	</CollapsibleHeading>
</div>
