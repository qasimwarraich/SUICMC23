<script lang="ts">
	import Header from './Header.svelte';
    import type {Quote} from './+layout';
	import './styles.css';

    export let data: Quote;

</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.type-kit.net/owf7wye.css" />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class=" italic font-extrabold text-theme-1">
		"{data.text}"
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
