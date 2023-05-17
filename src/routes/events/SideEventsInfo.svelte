<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Side Events 🎪</div>
			{#if showInformation}
				<Fa6RegularEye class="text-lg" />
			{:else}
				<Fa6RegularEyeSlash class="text-lg" />
			{/if}
		</div>
	</h2>
</button>
{#if showInformation}
	<div transition:slide>
		<h2 class="text-left">
			Like every year, we are organising some side events in Bern too. We love to see who can
			balance the most impatiently at a red light, who can ride the longest in a meaningless circle
			without a pause to foot-down.

			<br /> <br />
			We'll leave it to you, to see the metaphor for life here…

			<br /> <br />
			And, of course we have to figure out, who’s parents have no problem buying new tires for them every
			now and then.

			<br /> <br />
			So yeah, let's have fun. See you at the skid, trackstand and footdown 🧡
		</h2>
	</div>
{/if}
