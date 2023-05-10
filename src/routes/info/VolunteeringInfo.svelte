<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Volunteering 💪</div>
			{#if showInformation}
				<Fa6RegularEyeSlash class="text-lg" />
			{:else}
				<Fa6RegularEye class="text-lg" />
			{/if}
		</div>
	</h2>
</button>
{#if showInformation}
	<div transition:slide>
		<h2>
			For the four days of racing, eating, sleeping, partying etc. We need you! Help us prepare
			food, support the main race, carry things around, and much more. Register as a volunteer on
			our <a href={'/volunteering'}>website</a> and sign up for shifts in this online

			<a
				target="_blank"
				rel="noreferrer"
				href="https://docs.google.com/spreadsheets/d/195vjPTXQiMFyop0TMiZCHrMt3zbjZReDtAmCE6g7QHw/edit?usp=sharing"
				>document</a
			>.
		</h2>
	</div>
{/if}
