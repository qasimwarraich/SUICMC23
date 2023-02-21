<script lang="ts">
	import rad from '$lib/images/radmaskottchen.png';
	import Input from '$lib/components/Input.svelte';
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>SUICMC23 BERN: Registration</title>
	<meta name="description" content="Registration" />
</svelte:head>

<h1 class="flex flex-col items-center justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-96" src={rad} alt="SUICMC" />
	Coming soon!
	<h2 class="p-2 font-bold">
		This form is currently under testing, <span class="underline ">DO NOT</span> use
	</h2>
</h1>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form action="?/register" method="POST" use:enhance class="flex flex-col w-full items-center">
			<span class="p-2">
				<Input id="first_name" label="First Name" required={true} />
				<Input id="last_name" label="Last Name" required={true} />
				<Input id="nick_name" label="Nick Name" required={true} />
				<Input id="team" label="Team/Crew Name" />
				<Input id="city" label="City" />
				<Input type="email" id="email" label="Email Address" required={true} />
				<Input
					type="number"
					placeholder="420"
					id="race_number"
					label="Race Number"
					required={true}
				/>
				<Input type="checkbox" id="nabio" label="Safety First?" />
				<Input type="checkbox" id="housing" label="Do you require housing?" />
				<Input type="checkbox" id="volunteering" label="Do you also want to volunteer?" />

				<button class="p-1 font-bold text-white w-full bg-theme-1 ">Hit the spam</button>
			</span>
		</form>
	</div>
</div>
