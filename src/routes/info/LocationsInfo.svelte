<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	import MapPDF from '$lib/docs/SUICMC23-Map.pdf';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Locations 🗺️</div>
			{#if showInformation}
				<Fa6RegularEye class="text-lg" />
			{:else}
				<Fa6RegularEyeSlash class="text-lg" />
			{/if}
		</div>
	</h2>
</button>
{#if showInformation}
	<div class="min-w-full" transition:slide>
		<h2>
			<div class="pt-2 text-center flex flex-col items-center justify-center ">
				<div>
					Welcome to the Bern!, we hope this map will help you get around ❤️
					<br />
					Use the icon in the top left of the map to view the different categories of locations and their
					exact addresses.
					<br /> <br />
				<div class="pb-8">
					<h2 class="pt-2">
						<a href={MapPDF} download> ↪ Click Here to download an "old school" PDF of our locations map 🧡↩</a>
					</h2>
				</div>
				</div>
				<iframe
					src="https://www.google.com/maps/d/embed?mid=14qZP3QL-dUP6kjNFcNg5des5MMjTsmA&ehbc=2E312F"
					class=""
					width="80%"
					height="420"
					title="SUICMC23 MAP"
				/>

			</div>
		</h2>
	</div>
{/if}
