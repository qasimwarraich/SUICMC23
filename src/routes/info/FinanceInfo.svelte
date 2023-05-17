<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Financial 💰</div>
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
			Registration payment information can be found <a href={'/cream'}>here.</a>
		</h2>
		<h2 class="py-4">
			We aim to finance the event as little as possible from your wallets, but unfortunately we
			cannot avoid charging a registration fee. We have decided to set a target price of 50 CHF.
			However, you are free to choose your registration fee depending on your financial situation.
			If the minimum of 35 CHF is too much, we encourage you to contact us and, we will definitely
			find a solution that you can be part of.

			<br /><br />

			The parties will take place at different locations. Sometimes, it will not be possible for us
			to run a bar with "fair" prices at the event location. That's why we intend to make sure
			(where possible) that there is a SUICMC23 bar next to the bars at the event locations. That
			way we'll be able to keep prices down there and the sales will come straight to us.
			<br /><br />
			Accepted means of payment: Cash, Twint, Bank Transfer (Only for registration).
		</h2>
	</div>
{/if}
