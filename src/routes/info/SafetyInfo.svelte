<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Safety 🦺</div>
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
			<ul>
				<li>
					<span class="text-theme-1">Safety:</span>
					Wearing a helmet when riding a bicycle is mandatory for the duration of the whole event! Please
					obey to the traffic rules at all times. Always be aware of other road users and especially
					pedestrians!
				</li>

				<li>
					<span class="text-theme-awaremess">AwareMess:</span>

					The <a href={'/awaremess'} class="text-theme-awaremess">AwareMess</a> team will be dressed
					in <span class="text-theme-awaremess">pink</span> throughout the event. Read up on our
					AwareMess concept
					<a href={'/awaremess'} class="text-theme-awaremess">here</a>.

					<br /> <br />

					In whatever case you need support, assistance or someone to talk to, <span
						class="text-theme-awaremess">AwareMess</span
					>
					volunteers will be present throughout the event. Please don’t hesitate to call
					<span class="text-theme-awaremess">+41 77 472 83 97 </span>if you struggle finding support
					in the space you are currently in. We will support you within the scope of our
					possibilities.
				</li>

				<li>
					<span class="text-theme-1">Drugs & Alcohol: </span>

					We’d like to ensure a nice event with wonderful people for everybody. We don’t think that
					drugs and alcohol are a necessity to reach this goal. Please be aware of what and how much
					you’re going to consume and always follow the
					<a href={'/awaremess'} class="text-theme-awaremess">AwareMess</a>
					rules so we can all enjoy the event!
				</li>
				<li>
					<span class="text-theme-1">Swimming:</span>
					The Aare is a nice and refreshing river but with a rather strong current, thus can be very
					dangerous. Even experienced swimmers should bathe with caution! Ask someone from Bern if you
					want to go for a swim, especially which parts of the Aare are safe (entry & exit points).
				</li>
				<li>
					<span class="text-theme-1">Sustainability:</span>
					Please bring your own plate, cup and cutlery. We encourage you to use public transport (or
					your bike) to come to Bern. We will provide trash bins and a recycling system, which we’d like
					you to use. Help us to keep all the locations clean (no stickers or tagging). Thanks!
				</li>
				<li>
					<span class="text-theme-1">Bonus Tip:</span>
					Be cautious locking your bike in front of the Reitschule (Dachstock). This place is infamous
					for bicycles getting stolen. Ask local messengers and/or the registration team on site for
					the best parking spots.
				</li>
			</ul>
		</h2>
	</div>
{/if}

<style>
	li {
		padding: 1rem;
	}
</style>
