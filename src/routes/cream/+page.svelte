<script lang="ts">
	import regTwintSm from '$lib/images/reg_twint_sm.png';
</script>

<svelte:head>
	<title>SUICMC23 BERN: Cash Rules Everything Around Me</title>
	<meta name="description" content="Payment information for SUICMC23 BERN" />
</svelte:head>

<h1 class="text-theme-1 sm:text-4xl text-4xl font-bold">😓 Cash Rules Everything Around Me 😢</h1>

<div
	class="flex flex-col text-center p-10 items-center justify-center sm:text-xl text-sm text-theme-1 font-semibold"
>
	<h2 class="text-theme-1 sm:text-3xl text-3xl font-bold">
		Thank you for registering for SUICMC23 BERN
	</h2>
	<h3>Check your inbox for a confirmation email!</h3>
	<p class="font-bold mt-10  text-black">
		We would be extremely appreciate if you could pay your registration fees <span
			class="text-theme-1"
		>
			ASAP
		</span>. This will allow us to organise a much smoother event ❤️.
	</p>
	<p class="font-bold mt-10  text-black">
		You have <span class="text-theme-1 underline">3 </span> payment options:
	</p>
	<p class="mb-10 text-m font-bold text-black">
		<span class="text-theme-1">Note: </span>In either case, please supply the same
		<span class="underline"> name, race number and email </span>
		you used to register for SUICMC23.
	</p>

	<p class="text-m font-bold text-black mb-2">
		<span class="text-theme-1">Option 1: </span>
		You may use the below TWINT QR-Code <span class="text-theme-1 underline">ONLY</span> for registration.
		We will provide additional codes during the event for other uses.
	</p>
	<span class="text-bold underline text-theme-1">
		Please include your name,race number and email in the reference text!
	</span>

	<img class="sm:h-60 h-48" src={regTwintSm} alt="Registration Twint QR-Code" />
	<p class=" underline mb-10">Use the above TWINT code only for registration!</p>

	<p class="text-m font-bold text-black">
		<span class="text-theme-1">Option 2: </span>
		Alternatively, you may send a direct bank transfer to the following account details:
	</p>

	<p class="font-bold mb-5 mt-5" />

	<pre class="text-xs text-black text-left">
Account Nr: 16-41402-0
IBAN: CH47 0900 0000 1604 1402 0
BIC: POFICHBEXXX

Verein Schweizermeisterschaft der 
Velokurier*innen
SUICMC23 BERN
c/o Fabio Nef
Dammweg 41 CH-3013 Bern
<pre class="border-2  border-theme-1">
IMPORTANT! Don't Forget!
Additional Information: <br />Your Name/Race #/your@email.com
</pre>
<span class="text-bold text-theme-1">
Please include your name/race #/email 
in the "additional information" text!
</span>
	</pre>

	<p class="mt-5 text-m font-bold text-black">
		<span class="text-theme-1">Option 3: </span>
		🤑 Cash Money 💸, See you in Bern ❤️
	</p>
</div>
