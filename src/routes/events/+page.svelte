<script lang="ts">
	import cone from '$lib/images/safetycone.png';
	import GeneralInfo from './GeneralInfo.svelte';
	import MainRaceInfo from './MainRaceInfo.svelte';
	import SideEventsInfo from './SideEventsInfo.svelte';
</script>

<svelte:head>
	<title>SUICMC23 BERN: Events</title>
	<meta name="description" content="Events page for SUICMC23 Bern" />
</svelte:head>

<h1 class="flex flex-col items-center justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-96" src={cone} alt="SUICMC" />

	Events
	<h2 class="pb-5">Click on the headings to reveal information :)</h2>

	<GeneralInfo />
	<MainRaceInfo />
	<SideEventsInfo />
</h1>
