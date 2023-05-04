<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5  text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Housing 🏠</div>
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
		For the housing of SUICMC23 there’s a telegram chat where you can find a spot to sleep. For now
		there are private housing options from people from Bern. Contact possible hosts via PM, if
		you’re looking for a place to sleep. If you're from Bern and can host people please put your
		offer in the chat. Additionally, we're still trying hard to find a central housing spot. We’re
		also going to use the telegram chat to inform you about further housing options.
		<br /><br />
		Visit <a href="https://t.me/+j6Wkn0JDUspjODI0">https://t.me/+j6Wkn0JDUspjODI0</a>
		to join the chat.
		<br /><br />

		If it’s not possible for you to join the telegram chat, but you are looking for a place to
		sleep, please contact: +41 76 466 09 36
	</h2>
	</div>
{/if}
