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
				<Fa6RegularEyeSlash class="text-lg" />
			{:else}
				<Fa6RegularEye class="text-lg" />
			{/if}
		</div>
	</h2>
</button>
{#if showInformation}
	<div transition:slide>
		<h2 class="">
			<!-- Registration payment information can be found <a href={'/cream'}>here.</a> -->
			<a href={schedule} alt="Schedule Image">
				<img class="h-80" src={schedule} alt="SUICMC" />
			</a>
			<h2 class="py-5">
				<a href={schedulePDF} download> ↪ Click Here to Download a PDF of our event schedule🧡↩</a>
			</h2>
		</h2>
	</div>
{/if}
