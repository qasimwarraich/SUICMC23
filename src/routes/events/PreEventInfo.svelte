<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Pre Event Info 🥳</div>
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
			For those who can't wait for SUICMC23 to start, there will be a
			<a href="https://www.instagram.com/presuicmc23/">Pre-Event in Biel</a>.
            Yay! Thank
			you
			<a href="https://www.instagram.com/amicale17.bienne/" target="_blank" rel="noreferrer">
				Amicale 17</a
			>
			(Madretschstrasse 17, 2503 Biel) for having us!

			<br /> <br />
			Please bring your own cutlery, plate, and mug for dinner/breakfast, as well as a sleeping bag or
			sleeping pad for the night. We've organized a nice, big room where you can rest your bones.

			<br /> <br />
			The whole event will be donation-based. Pay what you can. We promise to have kept the costs as
			low as possible. (:

			<br /> <br />

			<span class="text-theme-1">Thursday 25.5.</span>
			<ul>
				<li>Around 17:00 - Alleycat, starts @Amicale 17</li>
				<li>19:00 - Food ready!</li>
				<li>20:30 - Concert by Left</li>
			</ul>

			<br /> <br />
			<span class="text-theme-1">Friday 26.5.</span>
			<ul>
				<li>Around 13:00 - Start Groupride from Terrain Gurzelen</li>
				<li>Around 15:00 - Snacks & Drinks at Bogen 17 on the shore of Wohlensee</li>
				<li>17:00 - Arrival in Bern at Dammweg (Registration, etc.)"</li>
			</ul>

			<br /> <br />

			More information on the pre event
			<a href="https://www.instagram.com/presuicmc23/">instagram</a>.
		</h2>
	</div>
{/if}

<style>
	li {
		padding: 1rem;
	}
</style>
