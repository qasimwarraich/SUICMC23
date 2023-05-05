<script lang="ts">
	import { slide } from 'svelte/transition';
	import Fa6RegularEye from '~icons/fa6-regular/eye';
	import Fa6RegularEyeSlash from '~icons/fa6-regular/eye-slash';
	let showInformation = false;
</script>

<button on:click={() => (showInformation = !showInformation)}>
	<h2 class="my-5 text-theme-1 text-4xl">
		<div class="flex space-between">
			<div class="px-2">Food 😋</div>
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
			<div>
				First of all – thank you for bringing your own food containers and cutlery!
				<br /><br />
				You are a really responsible and eco-friendly person who helps us to have a beautiful event without
				too much trash! Each day we will provide you with a breakfast and dinner which will be as vegan,
				healthy and tasty as possible!

				<br /><br />
                If you have any allergies, questions about the ingredients or
				on how it’s made, don’t hesitate to ask our lovely cooks! On Sunday we will organize some additional
				food corners for the main and cargo race. So don’t worry you will be refueled throughout the
				day so you can race and Chistole all the time – if needed!
				<br /><br />
				But what if you are hungry between the provided meals? Then check out the following places:
			</div>
			<ul>
				<li>
					<span class="text-theme-1"> Sous le Pont, Reitschule:</span>
					The best fries in town, always fresh and served by the lovely Sous-Le-Pont/Rössli collective.
					Neubrückstrasse 8, 3012 Bern
				</li>

				<li>
					<span class="text-theme-1"> D’Brass – Brasserie Lorraine:</span>
					If you want to have a vegan brunch or a tasty snack with a cold beer: This is the place to
					be! But don’t ask for fries, they have no fryer :) Quartiergasse 17, 3013 Bern
				</li>

				<li>
					<span class="text-theme-1">Restaurant Marzer:</span>
					This is the perfect place to share your dinner with the philosophy of ‘Leaf To Tip & No Food
					Waste’ – They will provide a shareable and tasty dinner for you and your friends. Brückenstrasse
					12, 3005 Bern
				</li>

				<li>
					<span class="text-theme-1">Hollyfood – Sandwichbar:</span>
					Skip Subway, there’s only one place to get a rich and juicy sandwich in Bern! Go to Hollyfood
					and get your freshly made-to-order sandwich in the middle of the old town of Bern. Kramgasse
					34, 3011 Bern
				</li>

				<li>
					<span class="text-theme-1">Mimo Falafel:</span>
					If you are strolling around in the old town, get a vegetarian take away falafel with fresh
					ingredients for lunch or dinner. Postgasse 28, 3011 Bern
				</li>

				<li>
					<span class="text-theme-1">Gelateria di Berna:</span>
					Gelato al limon - Gelato al basilico - Chocolate fondente or one of the other 100 delicious
					flavors, you have the choice! Marzilistrasse 32, 3005 Bern
				</li>

				<li>
					<span class="text-theme-1">Boomerang’s:</span>
					Did you Chistole all night long and now you’re starving? Go to Boomerang’s and get the midnight-snack
					you want – they even have vegan snacks! Sternengässchen 11, 3005 Bern
				</li>

				<li>
					<span class="text-theme-1">Pittaria:</span>
					Just as the name of the restaurant indicates, they are experts in making the best Pittas in
					town! Falkenplatz 1, 3012 Bern
				</li>

				<li>
					<span class="text-theme-1">Café Fleuri:</span>
					You want to have a quiet and relaxing start into the morning? From 11:00 to 17:00 you can get
					a basic brunch, some snacks or cakes while enjoying the beauty of the Botanical Garden Bern.
					Altenbergrain 21, 3013 Bern
				</li>
			</ul>
			<div class="flex items-center justify-center">
				<iframe
					src="https://www.google.com/maps/d/embed?mid=1FC52jM0Z4mlDK333ZY2Jvp4KsSQ6J7I&ehbc=2E312F"
					class=""
					width="80%"
					height="420"
					title="SUICMC FOOD MAP"
				/>
			</div>
		</h2>
	</div>
{/if}

<style>
	li {
		padding: 1rem;
	}
</style>
