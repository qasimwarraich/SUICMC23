<script lang="ts">
	import { page } from '$app/stores';
	import { Nav } from '$lib/data/nav';
</script>

<header class="pt-4 pb-16">
	<nav>
		<ul class="flex flex-wrap text-4xl font-semibold justify-start">
			{#each Nav as item}
				<li>
					<a class:active={$page.route.id === item.path} href={item.path}>{item.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	li {
		padding: 0 0.5rem;
	}

	.active {
		text-decoration: underline;
	}
</style>
