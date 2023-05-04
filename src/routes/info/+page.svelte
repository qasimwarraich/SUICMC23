<script lang="ts">
	import train from '$lib/images/train.png';
	import SponsorList from './SponsorList.svelte';
</script>

<svelte:head>
	<title>SUICMC23 BERN: Info</title>
	<meta name="description" content="Information about SUICMC23" />
</svelte:head>

<div class="flex flex-col items-center justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-80" src={train} alt="SUICMC" />
	<h1>More info coming soon!</h1>

	<h2 class="my-10 text-theme-1 text-4xl">Financial Information</h2>

	<h2 class="">
		Registration payment information can be found <a href={'/cream'}>here.</a>
	</h2>
	<h2 class="py-4">
		We aim to finance the event as little as possible from your wallets, but unfortunately we cannot
		avoid charging a registration fee. We have decided to set a target price of 50 CHF. However, you
		are free to choose your registration fee depending on your financial situation. If the minimum
		of 35 CHF is too much, we encourage you to contact us and, we will definitely find a solution
		that you can be part of.

		<br /><br />

		The parties will take place at different locations. Sometimes, it will not be possible for us to
		run a bar with "fair" prices at the event location. That's why we intend to make sure (where
		possible) that there is a SUICMC23 bar next to the bars at the event locations. That way we'll
		be able to keep prices down there and the sales will come straight to us.
		<br /><br />
		Accepted means of payment: Cash, Twint, Bank Transfer (Only for registration).
	</h2>

	<h2 class="my-10 text-theme-1 text-4xl">Housing Information</h2>
	<h2>
		For the housing of SUICMC23 there’s a telegram chat where you can find a spot to sleep. For now
		there are private housing options from people from Bern. Contact possible hosts via PM, if
		you’re looking for a place to sleep. If you're from Bern and can host people please put your
		offer in the chat. Additionally, we're still trying hard to find a central housing spot. We’re
		also going to use the telegram chat to inform you about further housing options.
		<br /><br />
		Visit <a href="https://t.me/+j6Wkn0JDUspjODI0">https://t.me/+j6Wkn0JDUspjODI0</a>
		to join the chat.
		<br /><br />

		If it’s not possible for you to join the telegram chat, but you are looking for a place to
		sleep, please contact: +41 76 466 09 36
	</h2>

	<h2 class="my-10 text-theme-1 text-4xl">Food 😋</h2>
	<h2>
		<div>
			First of all – thank you for bringing your own Tupperware/Cutlery! You are a really
			responsible and eco-friendly person who helps us to have a beautiful event without too much
			trash! Each day we will provide you with a breakfast and dinner which will be as vegan,
			healthy and tasty as possible! If you have any allergies, questions about the ingredients or
			on how it’s made, don’t hesitate to ask our lovely cooks! On Sunday we will organize some
			additional food corners for the main and cargo race. So don’t worry you will be refueled
			throughout the day so you can race and chistole all the time – if needed! But what if you are
			hungry between the provided meals? Then check out the following places:
		</div>
		<ul>
			<li>
				<span class="text-theme-1"> Sous le Pont, Reitschule:</span>
				The best fries in town, always fresh and served by the lovely Sous-Le-Pont/Rössli collective.
				Neubrückstrasse 8, 3012 Bern
			</li>

			<li>
				<span class="text-theme-1"> D’Brass – Brasserie Lorraine:</span>
				If you want to have a vegan brunch or a tasty snack with a cold beer: This is the place to be!
				But don’t ask for fries, they have no fryer :) Quartiergasse 17, 3013 Bern
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
				and put your freshly made-to-order Sandwich in the middle of the old town of Bern. Kramgasse
				34, 3011 Bern
			</li>

			<li>
				<span class="text-theme-1">Mimo Falafel:</span>
				If you are strolling around in the old town, get a vegetarian take away falafel with fresh ingredients
				for lunch or dinner. Postgasse 28, 3011 Bern
			</li>

			<li>
				<span class="text-theme-1">Gelateria di Berna:</span>
				Gelato all limon - Gelato al basilico - Chocolate fondente or one of the other 100 delicious
				flavors, you have the choice! Marzilistrasse 32, 3005 Bern
			</li>

			<li>
				<span class="text-theme-1">Boomerang’s:</span>
				Did you chistole all night long and now you’re starving? Go to Boomerang’s and get the midnight-snack
				you want – they even have vegan snacks! Sternengässchen 11, 3005 Bern
			</li>

			<li>
				<span class="text-theme-1">Pittaria:</span>
				Just as the name of the restaurant indicates, they are experts in making the best Pittas in town!
				Falkenplatz 1, 3012 Bern
			</li>

			<li>
				<span class="text-theme-1">Café Fleuri:</span>
				You want to have a quiet and relaxing start into the morning? From 11am to 17pm you can get a
				basic brunch, some snacks or cakes while enjoying the beauty of the Botanical Garden Bern. Altenbergrain
				21, 3013 Bern
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
	<SponsorList />
</div>

<style>
	li {
		padding: 1rem;
	}
</style>
