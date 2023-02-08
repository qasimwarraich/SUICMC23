<script lang="ts">
	import vest from '$lib/images/warnwest.png';
</script>

<svelte:head>
	<title>SUICMC23 BERN</title>
	<meta name="description" content="SUICMC23" />
</svelte:head>

<section>
	<h1 class="text-5xl text-theme-1 font-semibold">
		Hello World!
		<img class="h-80" src={vest} alt="SUICMC" />
		See you in Bern <br /> 26-29.05!
	</h1>
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
