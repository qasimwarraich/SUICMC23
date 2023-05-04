<script lang="ts">
	import train from '$lib/images/train.png';
	import SponsorList from './SponsorList.svelte';
	import FinanceInfo from './FinanceInfo.svelte';
	import HousingInfo from './HousingInfo.svelte';
	import FoodInfo from './FoodInfo.svelte';
</script>

<svelte:head>
	<title>SUICMC23 BERN: Info</title>
	<meta name="description" content="Information about SUICMC23" />
</svelte:head>

<div class="flex flex-col items-center justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-80" src={train} alt="SUICMC" />
    <h1>Information</h1>
    <h2 class="pb-5">Click on the headings to reveal information :)</h2>

    <FinanceInfo/>
    <HousingInfo/>
    <FoodInfo/>
	<SponsorList />
</div>

