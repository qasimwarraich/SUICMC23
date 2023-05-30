<script lang="ts">
	import rad from '$lib/images/radmaskottchen.png';
	import Input from '$lib/components/Input.svelte';
	import FormError from '$lib/components/FormError.svelte';
	import { slide } from 'svelte/transition';
	import { type Form } from './registration';
	import { onMount } from 'svelte';

	export let form: Form;

	let volunteer = form?.data?.volunteering == 'true' ? true : false;
	let unique = true;
	let badNumber = false;
	let emptyNumber = true;
	let intendedPayment = form?.data ? form.data.intended_payment : 50;

	let housing = form?.data?.housing == 'true' ? true : false;

	const handleEnter = (e: KeyboardEvent): boolean => {
		if (e.key == 'Enter') {
			e.preventDefault();
		}
		return false;
	};

	onMount(() => {
		const raceNumber = document.getElementById('race_number') as HTMLInputElement;
		checkEmptyNumber(raceNumber);
	});

	let timer: NodeJS.Timeout;
	let timerActive: boolean;
	const debouncedValidation = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const raceNumber = Number(target.value);
		if (raceNumber > 9999 || raceNumber < 0 || raceNumber % 1 !== 0) {
			badNumber = true;
			unique = false;
			return;
		} else {
			badNumber = false;
		}
		timerActive = true;
		clearTimeout(timer);
		timer = setTimeout(() => {
			validateRaceNumber(e);
			timerActive = false;
		}, 750);
	};

	const validateRaceNumber = async (e: Event) => {
		const target = e.target as HTMLInputElement;
		const num = Number(target.value);

		checkEmptyNumber(target);

		let response = await fetch('/api/racenumbers');
		let race_numbers = await response.json();

		let not_unique = race_numbers.some((id: number) => id == num);
		if (not_unique) {
			unique = false;
		} else {
			unique = true;
		}
	};

	const checkEmptyNumber = (raceNumber: HTMLInputElement) => {
		if (raceNumber.value == '') {
			emptyNumber = true;
		} else {
			emptyNumber = false;
		}
	};
</script>

<svelte:head>
	<title>SUICMC23 BERN: Registration</title>
	<meta name="description" content="Registration for SUICMC23" />
</svelte:head>

<a href="/registration/participants">Already Registered?</a>
<h1 class="flex flex-col items-center justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-96" src={rad} alt="SUICMC" />
	Registration
    <h2 class="pt-2">
    Registrations are now closed 🧡 
    <br>
    Thanks for coming to Bern
    </h2>
</h1>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			id="registration"
			on:keydown={handleEnter}
			method="POST"
			class="flex flex-col w-full items-center"
		>
			<div class="p-2">
				{#if form?.errors}
					<div
						class="text-center font-bold text-theme-1 bg-red-200 border-theme-1 border-2 border-solid rounded-none w-full max-w-lg p-10"
					>
						⚠️ Your Submission Contains Error(s) ⚠️
						<div class="text-sm">please scroll down and correct the error(s)</div>
					</div>
				{/if}
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
					id="nick_name"
					label="Nick Name"
					value={form?.data?.nick_name ?? ''}
					required={true}
				/>
				{#if form?.errors?.nick_name}
					<FormError error={form?.errors?.nick_name} />
				{/if}

				<Input id="team" label="Team/Crew Name" value={form?.data?.team ?? ''} />
				{#if form?.errors?.team}
					<FormError error={form?.errors?.team} />
				{/if}

				<Input id="city" label="City" value={form?.data?.city ?? ''} />
				{#if form?.errors?.city}
					<FormError error={form?.errors?.city} />
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

				<p class="font-bold">Select a category <span class="text-theme-1"> ⓘ</span></p>
				<div class=" p-2 mb-2 max-w-lg border-theme-1 border-2">
					<div class="flex flex-col sm:flex-row">
						<Input type="radio" id="category" value="Chistole" label="Chistole" isChecked={true} />
					</div>
					<p class="text-xs font-bold">
						<span class="text-theme-1 info"> ⓘ</span>We are trying to host an equally fair (or
						unfair) race for all types of beautiful humans.
					</p>
				</div>
				{#if form?.errors?.category}
					<FormError error={form?.errors?.category} />
				{/if}

				<p class="font-bold">
					Would you like to be ranked?<span class="text-theme-1"> ⓘ</span>
				</p>
				<div class=" p-2 max-w-lg mb-2 border-theme-1 border-2">
					<div class="flex flex-col sm:flex-row">
						<Input type="radio" id="rank_selection" value="ranked" label="Yes" isChecked={true} />
						<Input type="radio" id="rank_selection" value="unranked" label="No" />
					</div>
					<p class="text-xs font-bold">
						<span class="text-theme-1 info">ⓘ</span>If you choose "No" you will not be included in
						the results of any competition.
					</p>
				</div>
				{#if form?.errors?.rank_selection}
					<FormError error={form?.errors?.rank_selection} />
				{/if}

				<div class="w-full max-w-lg mb-2">
					<label for="race_number" class="font-bold pb-1">
						<span class="font-bold">Race Number (0-9999)</span>
					</label>
					<input
						type="number"
						placeholder="420"
						class={!badNumber && unique
							? 'border-theme-1 border-2 border-solid rounded-none w-full max-w-lg p-1 bg-background'
							: 'border-theme-1 border-2 border-solid rounded-none w-full max-w-lg p-1 bg-red-200'}
						id="race_number"
						name="race_number"
						form="registration"
						min="0"
						max="9999"
						required={true}
						on:input={(e) => debouncedValidation(e)}
						value={form?.data.race_number ?? ''}
					/>

					{#if !unique && !timerActive && !badNumber && !emptyNumber}
						<p class="text-theme-1 text-xs font-bold mt-1 mb-2">
							Sorry this number is already taken 😅
						</p>
					{:else if timerActive}
						<p class="text-theme-1 text-xs font-bold mt-1 mb-2">
							Checking race number...
							<span class="loader" />
						</p>
					{:else if emptyNumber && !badNumber}
						<p class="text-theme-1 text-xs font-bold mt-1 mb-2">
							Please enter a valid race number 😇
						</p>
					{:else if badNumber}
						<p class="text-theme-1 text-xs font-bold mt-1 mb-2">
							Please enter a number between 0 and 9999 💩
						</p>
					{:else}
						<p class="text-theme-1 text-xs font-bold mt-1 mb-2">This number is available! 🥳</p>
					{/if}
				</div>
				{#if form?.errors?.race_number}
					<FormError error={form?.errors?.race_number} />
				{/if}

				<Input
					type="checkbox"
					id="cargo_race"
					label="Would you like to take part in the Cargo Race?"
					isChecked={form?.data?.cargo_race == 'true' ? true : false}
				/>

				<Input
					type="checkbox"
					id="nabio"
					label="Safety First?"
					isChecked={form?.data?.nabio == 'true' ? true : false}
				/>

				<Input
					type="checkbox"
					id="pre_event"
					label="Will you take part in the Biel pre-event (25.5)? "
					hasNote={true}
					isChecked={form?.data?.pre_event == 'true' ? true : false}
				/>
				<p class="max-w-lg text-xs font-bold -mt-2 mb-2 ">
					<span class="info text-theme-1">ⓘ</span>This field is for our organisation purposes only.
				</p>

				<Input
					type="checkbox"
					id="volunteering"
					label="Do you want to volunteer?"
					bind:isChecked={volunteer}
				/>
				{#if volunteer}
					<div transition:slide class=" mb-2 p-2 max-w-lg border-theme-1 border-2">
						<p class="text-theme-1 font-bold max-w-lg">
							You are amazing ❤️. <br />
						</p>
						<p>
							Please visit the
							<a href="/volunteering" target="_blank"
								>volunteering page<span class="text-theme-1"> ⓘ</span>
							</a> to register for volunteering.
						</p>
						<p class="max-w-lg text-xs font-bold mt-2 mb-2 ">
							<span class="text-theme-1 info"> ⓘ</span> Link opens in a new browser tab.
						</p>
					</div>
				{/if}

				<label class="font-bold pr-2" for="tshirt_size">Choose a T-Shirt Size:</label>
				<select
					class=" pt-1 border-theme-1 border-2 font-bold text-center mb-2"
					name="tshirt_size"
					id="tshirt_size"
					form="registration"
					value={form?.data?.tshirt_size ?? 'm'}
				>
					<option value="s">S</option>
					<option value="m">M</option>
					<option value="l">L</option>
					<option value="xl">XL</option>
				</select>

				<div class=" mb-2 p-2 max-w-lg border-theme-1 border-2">
					<Input
						type="checkbox"
						id="housing"
						label="Do you require housing? "
						bind:isChecked={housing}
						hasNote={true}
					/>
					<p class="text-xs font-bold -mt-2">
						<span class="text-theme-1 info"> ⓘ</span>Housing payment/selection will be conducted on
						site.
					</p>
					{#if housing}
						<div transition:slide class="my-2 p-2 max-w-lg border-theme-1 border-2">
							<p>Which days do you require housing?<span class="text-theme-1"> ⓘ</span></p>
							<div class="flex flex-row">
								<Input type="checkbox" id="housing_friday" label="Friday (26.5)" />
								<Input type="checkbox" id="housing_saturday" label="Saturday (27.5)" />
								<Input type="checkbox" id="housing_sunday" label="Sunday (28.5)" />
							</div>
							<p class="text-xs">
								<span class="text-theme-1 info"> ⓘ</span> This field is for our organisation purposes
								only
							</p>
						</div>
					{/if}
				</div>

				<p class="font-bold">
					How much you would like to pay (CHF)? <span class="text-theme-1">ⓘ</span>
				</p>

				<div class="flex flex-col  mb-2 p-2 max-w-lg border-theme-1 border-2">
					<div class="pt-1 font-bold text-center mb-2">
						You want to pay <span class="underline text-theme-1">{intendedPayment}</span> CHF
					</div>
					<input
						class="bg-theme-1 pt-1 font-bold text-center mb-2"
						type="range"
						bind:value={intendedPayment}
						min="30"
						max="80"
						step="1"
						id="intended_payment"
						name="intended_payment"
						form="registration"
						required={true}
					/>
					<p class="text-xs font-bold mt-2 mb-2 ">
						<span class="text-theme-1 info"> ⓘ</span>Please pay what you can afford within a range
						of 30 - 80 CHF. If you cannot afford this, please
						<a href="mailto:info@suicmc23.ch">contact us</a>.
					</p>
				</div>

				<p class="font-bold">How do you intend to pay? <span class="text-theme-1">ⓘ</span></p>
				<div class=" p-2 mb-2 max-w-lg border-theme-1 border-2">
					<div class="flex flex-col sm:flex-row">
						<Input type="radio" id="payment_method" value="TWINT" label="TWINT" isChecked={true} />
						<Input
							type="radio"
							id="payment_method"
							value="Bank Transfer"
							label="Bank Transfer"
							isChecked={form?.data?.payment_method == 'Bank Transfer' ? true : false}
						/>
						<Input
							type="radio"
							id="payment_method"
							value="Cash"
							label="Cash"
							isChecked={form?.data?.payment_method == 'Cash' ? true : false}
						/>
					</div>
					<p class="text-xs font-bold">
						<span class="text-theme-1 info"> ⓘ</span>This selection is not binding. It is more to
						help us keep track of things. Cash payments and TWINT will also be possible during the
						event.
					</p>
				</div>

				<Input
					id="additional_comments"
					label="Any additional comments?"
					placeholder="Allergies, special requests or anything else?"
					value={form?.data?.additional_comments ?? ''}
				/>

				{#if unique && !badNumber}
					<button
						form="registration"
						formaction="?/register"
						formmethod="POST"
						type="submit"
						class="hover:scale-105 duration-300 mt-4 p-1 font-bold text-white max-w-lg  w-full bg-theme-1 "
						disabled={true}>Registrations are now closed! Thank you for coming to Bern 🧡</button
					>
				{:else}
					<button
						form="registration"
						formaction="?/register"
						formmethod="POST"
						type="submit"
						class="hover:scale-105 duration-300 mt-4 p-1 font-bold text-white max-w-lg  w-full bg-theme-3 "
						disabled={true}>Please Supply A Valid Race Number</button
					>
				{/if}
			</div>
		</form>
	</div>
</div>

<style>
	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
	}

	input[type='range']::-webkit-slider-runnable-track {
		background: var(--color-theme-1);
		height: 4px;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		background: #f0f0f0;
		border: 1px solid #000000;
		border-radius: 50%;
		height: 1rem;
		width: 1rem;
		margin-top: -6px;
	}

	input[type='range']::-moz-range-track {
		background: var(--color-theme-1);
	}

	input[type='range']::-moz-range-thumb {
		background: var(--color-theme-1);
		background: #f0f0f0;
		border: 1px solid #000000;
	}
	.loader {
		width: 1rem;
		height: 1rem;
		border: 5px solid #fff;
		border-bottom-color: #ff3e19;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.info {
		padding-right: 0.5rem;
	}
</style>
