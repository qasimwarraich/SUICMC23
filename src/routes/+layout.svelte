<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	import { FootNotes } from '$lib/data/footer';
    import {afterNavigate} from "$app/navigation";

	const getQuote = () => {
		return FootNotes[Math.floor(Math.random() * FootNotes.length)];
	};

	let RandomQuote: string = getQuote();

	afterNavigate(() => {
		RandomQuote = getQuote();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.type-kit.net/owf7wye.css" />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="bg-background sticky bottom-0 w-full italic font-extrabold text-theme-1">
		"{RandomQuote}"
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
