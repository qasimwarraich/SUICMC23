<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Chistole 🥳</div>
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
			Welcome to the Chistole!
			<br /> <br />
			We have arranged three different locations to dance, talk, sing and flow together: Two famous and
			essential locations for the Bernese cultural and night life are kind enough to host us
			<a target="_blank" rel="noreferrer" href="https://dachstock.ch">Dachstock</a>
			on Friday and <a target="_blank" rel="noreferrer" href="https://gaskessel.ch">Gaskessel</a> on
			Sunday.
			<br /> <br />

			Both locations are cultural meeting points for a variety of people and have been so for over
			thirty years. On Saturday we are delighted to have planned an evening with concerts and dinner
			at and with the peeps of
			<a target="_blank" rel="noreferrer" href="https://dreigaenger.ch/">Dreigänger</a>, which is
			the Restaurant and Bar of
			<a target="_blank" rel="noreferrer" href="https://drahtesel.ch/">Drahtesel</a>
			and an important part of the cycling community here in Bern.

			<br /> <br />
			All of these venues create a fun and diverse combination. The collectives, individuals and organizations
			behind the venues were committed in figuring out the best conditions possible. It would not have
			been possible to organize all of it without them. Let’s be thankful and support each other in taking
			good care of these places and people there.

			<br /> <br />
			Last but not least we’d like to give a heads up concerning the Dreigänger. The Dreigänger is located
			in a residential area including assisted living facilities. Let’s be considerate with volume outside
			after 10PM. Furthermore, Dreigänger allowed us to use their venue for free. They are financing
			their costs with the income from the bar, so please don’t consume your own stuff at this place
			and buy the discounted drinks instead! As for the whole event, it is very important that you read
			our
			<a href={'/awaremess'} class="text-theme-awaremess">AwareMess</a> concept and have it in mind for the Chistole too!

			<br /> <br />
			We are looking forward to celebrate this year's SUICMC with you.

			<br /> <br />
			Chistole! ❤️

			<div class="pt-2 flex items-center justify-center">
				<iframe
					src="https://www.google.com/maps/d/embed?mid=1FcG7xHHyizZx2h-UTviPNNFR5lEH9wQ&ehbc=2E312F"
					class=""
					width="80%"
					height="420"
					title="SUICMC23 CHISTOLE MAP"
				/>
			</div>
		</h2>
	</div>
{/if}
