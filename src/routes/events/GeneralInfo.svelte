<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">General Info ℹ️</div>
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
		<h2 class="text-left">
			We would like to see respectful behavior at the checkpoints and on the Racecourse. Ride save,
			enjoy the magnificent racecourse, the community and the rush. Be considerate at all times of
			those who share the course with you. It’s all just a game! Drive safe! We do not tolerate
			unfair behavior. In case of misbehavior, breaking the rules or cheating it’s up to the
			organizing committee to decide the consequences spontaneously.

			<br /> <br />

			You need a watch, a lock, a helmet and a backpack.

			<br /> <br />

			Write your name and race number on each manifest. Read the manifest carefully, all the
			information you need is on it. The manifests must be in a decent condition and the stamps must
			be clearly visible so that the manifest can be evaluated.

			<br /> <br />
			<span class="text-theme-1"> Inspection of the race course </span> will be possible on Sunday
			from <span class="text-theme-1">8am to 9am</span>. Don't lurk around on the course after nine
			o'clock. There are some critical spots that require careful driving. It is recommended to try
			out the course in advance. The race course is mostly one-way, but there are also a few
			passages with two-way traffic. Keep to the track directions. No driving in the opposite
			direction! Do not ride on the grass.

			<br /> <br />

			<div class="text-theme-1">
				The race will take place in a residential area with a lot of pedestrians. We try our best to
				keep the race track clear. Stay on the street and do not ride on the pavement unless it is
				marked as such. Be considerate when people are on the route. A checkpoint is located outside
				of the racecourse. You will reach this checkpoint in open traffic. Normal traffic rules
				apply. Be considerate of other road users.
			</div>
		</h2>
	</div>
{/if}
