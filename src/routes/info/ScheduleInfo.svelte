<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	import schedule from '$lib/docs/SUICMC23-Schedule.png';
	import schedulePDF from '$lib/docs/SUICMC23-Schedule.pdf';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Schedule 📅</div>
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
		<h2 class="">
			<div class="flex flex-col items-center justify-center">
				<a href={schedule} class="pb-5" alt="Schedule Image">
					<img class="h-80 object-contain" src={schedule} alt="SUICMC" />
				</a>
				<a href={schedulePDF} download> ↪ Click Here to download a PDF of our event schedule🧡↩</a>
			</div>

			<h2 class="py-5">
				We will do our best to avoid any schedule changes but in the unfortunate event that
				something doens't quite line up with the above schedule. Please check back here and follow
				our <a href="https://t.me/+aMssxWcnN-k4ZWE0"> telegram chat</a> for live updates.

				<br /><br />

				More contact info <a href={'/contact'} class="text-theme-1">here</a>.
			</h2>
		</h2>
	</div>
{/if}
