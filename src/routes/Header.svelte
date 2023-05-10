<script lang="ts">
	import { page } from '$app/stores';
	import { Nav } from '$lib/data/nav';
</script>

<header class="bg-background top-0 lg:sticky pt-4 shadow-white mb-10">
	<nav>
		<ul class="flex flex-wrap text-4xl font-semibold justify-start">
			{#each Nav as item}
				<li>
					<a
						class:active={$page.route.id === item.path}
						class={item.title == 'AwareMess' ? 'text-theme-awaremess' : ''}
						href={item.path}>{item.title}</a
					>
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
