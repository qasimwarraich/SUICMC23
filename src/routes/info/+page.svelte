<script lang="ts">
	import train from '$lib/images/train.png';
	import booklet from '$lib/docs/SUICMC23-Booklet.pdf';
	import SponsorList from './SponsorList.svelte';
	import FinanceInfo from './FinanceInfo.svelte';
	import HousingInfo from './HousingInfo.svelte';
	import FoodInfo from './FoodInfo.svelte';
	import SafetyInfo from './SafetyInfo.svelte';
	import ChistoleInfo from './ChistoleInfo.svelte';
	import LocationsInfo from './LocationsInfo.svelte';
	import VolunteeringInfo from './VolunteeringInfo.svelte';
	import ScheduleInfo from './ScheduleInfo.svelte';
	import TravelInfo from './TravelInfo.svelte';
</script>

<svelte:head>
	<title>SUICMC23 BERN: Info</title>
	<meta name="description" content="Information about SUICMC23" />
</svelte:head>

<div class="flex flex-col items-center justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-80" src={train} alt="SUICMC" />
	<h1>Information</h1>

	<h2 class="py-5">
		<a href={booklet} download> ↪ Click Here to download a PDF of our event booklet 🧡↩</a>
	</h2>

	<h2 class="pb-5">Click on the headings to reveal information :)</h2>

	<SafetyInfo />
	<ScheduleInfo />
	<TravelInfo />
	<LocationsInfo />
	<ChistoleInfo />
	<VolunteeringInfo />
	<FoodInfo />
	<HousingInfo />
	<FinanceInfo />
	<SponsorList />
</div>
