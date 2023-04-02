<script lang="ts">
	import rainbow from '$lib/images/rainbow.png';
	import Input from '$lib/components/Input.svelte';
	import { type Form } from './volunteering';
	import FormError from '$lib/components/FormError.svelte';
	import { slide } from 'svelte/transition';

	export let form: Form;

	let volunteerSaturday = false;
	let volunteerSunday = false;
	let volunteerMonday = false;

	const handleEnter = (e: KeyboardEvent): boolean => {
		if (e.key == 'Enter') {
			e.preventDefault();
		}
		return false;
	};
</script>

<svelte:head>
	<title>SUICMC23 BERN: Volunteering</title>
	<meta name="description" content="Volunteering" />
</svelte:head>

<h1 class="flex flex-col items-center justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-96" src={rainbow} alt="SUICMC" />
	Volunteer Registration
	<h2 class="p-2 font-bold">
		This form is currently under final development, <span class="text-theme-1"
			>PLEASE TRY TO BREAK IT 😇</span
		>
	</h2>
</h1>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			id="volunteering"
			on:keydown={handleEnter}
			method="POST"
			class="flex flex-col w-full items-center"
		>
			<div class="p-2">
				<Input
					id="first_name"
					label="First Name"
					required={true}
					value={form?.data?.first_name ?? ''}
				/>
				{#if form?.errors?.first_name}
					<FormError error={form?.errors?.first_name} />
				{/if}

				<Input
					id="last_name"
					label="Last Name"
					value={form?.data?.last_name ?? ''}
					required={true}
				/>
				{#if form?.errors?.last_name}
					<FormError error={form?.errors?.last_name} />
				{/if}

				<Input
					id="pronouns"
					label="Preferred Pronouns"
					value={form?.data?.pronouns ?? ''}
					required={true}
				/>
				<Input
					type="tel"
					id="telephone"
					label="Telephone Number"
					value={form?.data?.telephone ?? ''}
					required={true}
					placeholder="+41 79 420 1312"
				/>
				{#if form?.errors?.telephone}
					<FormError error={form?.errors?.telephone} />
				{/if}

				<Input
					type="email"
					id="email"
					label="Email Address"
					value={form?.data?.email ?? ''}
					required={true}
				/>
				{#if form?.errors?.email}
					<FormError error={form?.errors?.email} />
				{/if}
				<div class=" mb-2 p-2 max-w-lg border-theme-1 border-2">
					<p class="text-theme-1 font-bold max-w-lg">
						You are amazing ❤️. <br /> Please select what days you would like to volunteer for. You will
						then be asked about what time slots you would be available for.
					</p>
					<div class="flex flex-col sm:flex-col">
						<Input type="checkbox" id="volunteer_friday" label="Friday (Only Evening)" />

						<Input
							type="checkbox"
							id="volunteer_saturday"
							label="Saturday"
							bind:isChecked={volunteerSaturday}
						/>
						{#if volunteerSaturday}
							<div transition:slide class="mb-2 p-2 max-w-lg border-theme-1 border-2">
								<div class="flex flex-row">
									<Input type="checkbox" id="volunteer_saturday_morning" label="Morning" />
									<Input type="checkbox" id="volunteer_saturday_afternoon" label="Afternoon" />
									<Input type="checkbox" id="volunteer_saturday_evening" label="Evening/Night" />
								</div>
							</div>
						{/if}
						<Input
							type="checkbox"
							id="volunteer_sunday"
							label="Sunday"
							bind:isChecked={volunteerSunday}
						/>
						{#if volunteerSunday}
							<div transition:slide class="mb-2 p-2 max-w-lg border-theme-1 border-2">
								<div class="flex flex-row">
									<Input type="checkbox" id="volunteer_sunday_morning" label="Morning" />
									<Input type="checkbox" id="volunteer_sunday_afternoon" label="Afternoon" />
									<Input type="checkbox" id="volunteer_sunday_evening" label="Evening/Night" />
								</div>
							</div>
						{/if}
						<Input
							type="checkbox"
							id="volunteer_monday"
							label="Monday"
							bind:isChecked={volunteerMonday}
						/>
						{#if volunteerMonday}
							<div transition:slide class=" mb-2 p-2 max-w-lg border-theme-1 border-2">
								<div class="flex flex-row place-content-around">
									<Input type="checkbox" id="volunteer_monday_morning" label="Morning" />
									<Input type="checkbox" id="volunteer_monday_afternoon" label="Afternoon" />
								</div>
							</div>
						{/if}
					</div>

					<Input
						id="additional_comments"
						label="Anything else?"
						placeholder="Please enter any additional volunteering information here"
					/>
					{#if form?.errors?.additional_comments}
						<FormError error={form?.errors?.additional_comments} />
					{/if}
					<button
						form="volunteering"
						formaction="?/volunteering"
						formmethod="POST"
						type="submit"
						class="hover:scale-105 duration-300 mt-4 p-1 font-bold text-white max-w-lg  w-full bg-theme-1 "
						>Register!</button
					>
				</div>
			</div>
		</form>
	</div>
</div>
