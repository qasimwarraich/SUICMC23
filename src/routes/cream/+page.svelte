<script lang="ts">
	import regTwintSm from '$lib/images/reg_twint_sm.png';
</script>

<h1 class="text-theme-1 sm:text-4xl text-4xl font-bold">😓 Cash Rules Everything Around Me 😢</h1>

<div
	class="flex flex-col text-center p-10 items-center justify-center sm:text-xl text-sm text-theme-1 font-semibold"
>
    <p class="font-bold mt-10  text-black">
    You have <span class="text-theme-1 underline">2 </span> payment options:

    </p>
    <p class="mb-10 text-m font-bold text-black">
    <span class="text-theme-1">Note: </span>In either case, please supply the same name, race number
    and email you used to register for SUICMC23.
    </p>

    <p class="text-m font-bold text-black mb-2">
    <span class="text-theme-1">Option 1: </span>
		You may use the below TWINT QR-Code <span class="text-theme-1 underline">ONLY</span> for registration. We
		will provide additional codes during the event for other uses.
    </p>

	<img class="sm:h-60 h-48 my-10" src={regTwintSm} alt="Registration Twint QR-Code" />


    <p class="text-m font-bold text-black">
    <span class="text-theme-1">Option 2: </span>
		Alternatively, you can send a direct bank transfer to the following account details:
    </p>

	<p class="font-bold mb-5 mt-5">
	</p>

	<pre class="text-xs text-black text-left">
Account Nr: 16-41402-0
IBAN: CH47 0900 0000 1604 1402 0
BIC: POFICHBEXXX

Verein Schweizermeisterschaft der 
Velokurier*innen
SUICMC23 BERN
c/o Fabio Nef
Dammweg 41 CH-3013 Bern
	</pre>
</div>
