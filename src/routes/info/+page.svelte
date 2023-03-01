<script lang="ts">
	import train from '$lib/images/train.png';
</script>

<svelte:head>
	<title>SUICMC23 BERN: Info</title>
	<meta name="description" content="Info" />
</svelte:head>

<div class="flex flex-col items-center justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-80" src={train} alt="SUICMC" />
	<h1>Coming soon!</h1>

	<h2 class="my-10">
		Registration payment information can be found <a href={'/cream'}>here.</a>
	</h2>
</div>
