<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	import MainRaceMap from '$lib/docs/SUICMC23-MainRace-Map.jpg';
	import MainRaceMapPDF from '$lib/docs/SUICMC23-MainRace-Map.pdf';
	import CargoRaceMap from '$lib/docs/SUICMC23-CargoRace-Map.jpg';
	import CargoRaceMapPDF from '$lib/docs/SUICMC23-CargoRace-Map.pdf';

	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Main/Cargo Race Info 🏁</div>
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
			<ul>
				<span class="text-theme-1">Qualification:</span>
				There’s no Qualification. Congratulations - you made it into the Final!
				<br /><br />

				<span class="text-theme-1">Main Race</span>
				Because there are so many of you, the Main race will be
				<span class="text-theme-1">in two heats</span>. The first heat will start at 9am and ends at
				latest 12.15pm. The second at 12.30pm and ends at latest 15.45pm. You have to decide at the
				registration / check-in in which heat you will start.
				<span class="text-theme-1"
					>If you want to avoid the Rush hour, you have to get up earlier ;)</span
				>
				<br /><br />

				<ul>
					<li>
						Last instructions for the first heat at <span class="text-theme-1">08:45</span> in front
						of the race office.
					</li>
					<li>
						Last instructions for the second heat at <span class="text-theme-1">12:15</span> in front
						of the race office.
					</li>
				</ul>

				<br /><br />

				You will place your bike laying down on the race course (The location place we will tell you
				on-site).

				<br /><br />

				You will find the first manifest in the spokes. The first manifest is Nr. 1,2 or 3. When you
				have finished a manifest you get the next one from the first block. The race office will
				decide how many manifests will be left to ride.
				<span class="text-theme-1">You will keep all manifests until the end</span> . For each
				manifest you finished and show to the race office, you will receive a new one. You are
				responsible for knowing which manifests you have already completed.
				<span class="text-theme-1">You may combine as many jobs as you like</span> . Complete as
				much jobs as possible. At the end uncompleted jobs doesn't count. If you have the same
				amount of Jobs, time counts. We can’t prevent small waiting times at the race office - take
				this into account.

				<br /><br />

				During the whole final you will work on
				<span class="text-theme-1">one additional “Skills-manifest</span>. This manifest ask for
				messenger skills aside from only your legs. You have time until the end to finish your
				skill-manifest – choose a good time to make these jobs.
				<span class="text-theme-1">Try to finish it</span>, it will count a lot.

				<br /><br />
				There is material to be transported. Be prepared for it. Transport goods must be transported
				safely and carefully.
				<br /><br />
				<span class="text-theme-1">Cargo Race:</span>
				Cargo Race <span class="text-theme-1">starts at 16:30</span>. There are the Rules like in
				the mainrace (except for the additional manifest).Your time will be counted when the
				manifests are finished and handed in correctly at the race office.
				<br /><br />
				In order for the race office to let you participate in the Carco-Race, you need a Cargo. If you
				are not sure if your bike is a Cargo, you can ask for an expertise at the race office. Your front
				rack doesn't make your bike a cargobike. Your bag is not a cargobike. If you want to ride with
				a trailer, no one will stop you.

				<br /><br />
				It's possible to participate both race (Main- and Cargorace).
				<span class="text-theme-1"
					>If you want enjoy both race you have to start in the first Mainrace heat at 09.00am.</span
				>
			</ul>
		</h2>

		<div class="flex flex-col items-center justify-center pt-4">
			<div class="pb-8">
				<a href={MainRaceMap} class="pb-5">
					<img class="h-80 object-contain" src={MainRaceMap} alt="SUICMC23 Main Race Map" />
				</a>
				<h2 class="pt-2">
					<a href={MainRaceMapPDF} download>
						↪ Click Here to download a PDF of our main race map 🧡↩</a
					>
				</h2>
			</div>
			<div class="pb-2">
				<a href={CargoRaceMap} class="pb-5">
					<img class="h-80 object-contain" src={CargoRaceMap} alt="SUICMC23 Cargo Race Map" />
				</a>
				<h2 class="pt-2">
					<a href={CargoRaceMapPDF} download>
						↪ Click Here to download a PDF of our cargo race map 🧡↩</a
					>
				</h2>
			</div>
		</div>
	</div>
{/if}

<style>
	li {
		padding: 1rem;
	}
</style>
