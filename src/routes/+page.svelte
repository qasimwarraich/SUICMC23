<script>
	import sticker1 from '$lib/images/sticker1.jpeg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="text-5xl text-theme-1 font-bold">
		Hallo Welt!
		<span class="">
			<picture>
				<img class="h-80" src={sticker1} alt="SUICMC" />
			</picture>
		</span>
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

	h1 {
	}
</style>
