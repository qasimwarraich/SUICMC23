<script lang="ts">
	import funk from '$lib/images/funk.png';
	import telegram from '$lib/images/SUICMC23-Telegram.png';
</script>

<svelte:head>
	<title>SUICMC23 BERN: Contact</title>
	<meta name="description" content="Contact information about SUICMC23 Bern" />
</svelte:head>

<h1 class="flex items-center flex-col justify-center text-5xl text-theme-1 font-semibold">
	<img class="h-80" src={funk} alt="SUICMC" />
	<a class="sm:text-5xl text-3xl " href="mailto:info@suicmc23.ch"> email: info@suicmc23.ch </a>
	<div class="py-5" />
	<a
		class="sm:text-5xl text-3xl"
		href="https://www.instagram.com/suicmc23bern"
		target="_blank"
		rel="noreferrer"
	>
		insta: @suicmc23bern
	</a>
	<div class="py-5" />
	<a
		class="sm:text-5xl text-3xl"
		href="https://t.me/+aMssxWcnN-k4ZWE0"
		target="_blank"
		rel="noreferrer"
	>
		telegram chat: click me or scan below🧡
	</a>
	<div class="py-5" />

	<img class="h-44" src={telegram} alt="SUICMC" />
</h1>
