<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { onMount } from 'svelte';

	let windowWidth: number;
	let smallScreen = false;
	let menuOpen = false;

	onMount(() => {
		windowWidth = window.innerWidth;
		handleResize(); // bug with button not showing
	});

	const handleResize = () => {
		windowWidth = window.innerWidth;
		if (windowWidth < 500) {
			smallScreen = true;
		} else {
			smallScreen = false;
		}
	};

	const handleClick = () => {
		menuOpen = !menuOpen;
	};
	const resetMenu = () => {
		menuOpen = !menuOpen;
	};
</script>

<svelte:window on:resize={handleResize} />

<header>
	<nav class="text-theme-1 font-bold text-3xl flex-shrink-0">
		{#if smallScreen}
			<button on:click={handleClick}> 🍔 </button>
		{/if}

		<ul class={menuOpen ? 'menu-sm' : 'menu-lg'}>
			<li class="" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">SUICMC23 BERN</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">Info</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/registration') ? 'page' : undefined}>
				<a href="/registration">Registration</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/awaremess') ? 'page' : undefined}>
				<a href="/Awaremess">Awaremess</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/awaremess') ? 'page' : undefined}>
				<a href="/Awaremess">Awaremess</a>
			</li>

			<li aria-current={$page.url.pathname.startsWith('/awaremess') ? 'page' : undefined}>
				<a href="/Awaremess">Awaremess</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}

	a:hover {
		text-decoration: underline;
		transition: all 0.2s linear;
	}

	/* @media (max-width: 500px) { */
	/* 	.menu-sm { */
	/* 		flex-direction: column; */
	/* 		justify-content: space-evenly; */
	/* 		height: 25vh; */
	/* 	} */
	/* 	.menu-lg { */
	/* 		display: none; */
	/* 	} */
	/**/
	/* 	nav { */
	/* 		justify-content: center; */
	/* 		--background: rgba(255, 255, 255, 0.7); */
	/* 		width: 100%; */
	/* 	} */
	/* } */

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	nav a {
		display: flex;
        flex-direction: row;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		transition: color 0.2s linear;
	}

	ul {
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
        flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}
</style>
