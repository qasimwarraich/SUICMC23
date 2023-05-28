<script lang="ts">
	import vest from '$lib/images/warnwest.png';
	import openLetter from '$lib/docs/SUICMC23-Open-Letter.pdf';
</script>

<svelte:head>
	<title>SUICMC23 BERN</title>
	<meta
		name="description"
		content="Home page of the Swiss Cycle Messenger Championships 2023 : SUICM23 Bern"
	/>
</svelte:head>

<section>
	<h1 class="text-5xl text-theme-1 font-semibold">
		Hello World!
		<img class="h-80" src={vest} alt="SUICMC" />
		See you in Bern <br /> 26-29.05!
	</h1>
	<p class="my-10 font-bold text-lg">
		<a href={openLetter} class="underline">Click here for our open letter</a> about our "category" system
        <br>
		(English version coming very soon) ❤️
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
