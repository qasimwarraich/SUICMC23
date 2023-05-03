<script lang="ts">
	import train from '$lib/images/train.png';
	import siebendruck from '$lib/images/logos/7druck.svg';
	import adrianos from '$lib/images/logos/adrianos-coffee.png';
	import b1 from '$lib/images/logos/backup-one.png';
	import bello from '$lib/images/logos/bello.svg';
	import bfh from '$lib/images/logos/bfh.svg';
	import carvelo from '$lib/images/logos/carvelo.png';
	import cmi from '$lib/images/logos/cmi.png';
	import dachstock from '$lib/images/logos/dachstockreitschule.svg';
	import dirtysox from '$lib/images/logos/dirtysox.svg';
	import drahtesel from '$lib/images/logos/drahtesel.svg';
	import fizzen from '$lib/images/logos/fizzen.svg';
	import gaskessel from '$lib/images/logos/gaskessel.png';
	import gelateria from '$lib/images/logos/gelateria.svg';
	import herbaDiBerna from '$lib/images/logos/herba-di-berna.png';
	import knog from '$lib/images/logos/knog.png';
	import kryptonite from '$lib/images/logos/kryptonite.jpg';
	import kuz from '$lib/images/logos/kuz.png';
	import ltw from '$lib/images/logos/ltw.svg';
	import lola from '$lib/images/logos/lola.svg';
	import noochFond from '$lib/images/logos/nooch-investment.png';
	import nooch from '$lib/images/logos/nooch.png';
	import oepfelchasper from '$lib/images/logos/oepfelchasper.png';
	import sbbLogistik from '$lib/images/logos/sbb-logistik.svg';
	import sportamtbern from '$lib/images/logos/sportamtbern.svg';
	import streit from '$lib/images/logos/streit.svg';
	import intact from '$lib/images/logos/intact.jpg';
	import swissconnect from '$lib/images/logos/swissconnect.svg';
	import untamed from '$lib/images/logos/untamed.svg';
	import veloblitz from '$lib/images/logos/veloblitz.png';
	import veloplus from '$lib/images/logos/veloplus.png';
	import vkb from '$lib/images/logos/vkb.svg';
	import vkluzern from '$lib/images/logos/vkluzern.png';
	import vksg from '$lib/images/logos/vksg.svg';
	import vkwinti from '$lib/images/logos/vkwinti.svg';
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

	<br />

	<h2 class="my-10 text-theme-1 text-4xl">Our Sponsors!</h2>
	<div class="flex flex-row max-w-full flex-wrap justify-around ">
		<a href="https://oepfelchasper.ch" target="_blank" rel="noreferrer">
			<img class="titanium" src={oepfelchasper} alt="oepfelchasper" />
		</a>
	</div>
	<div class="flex flex-row max-w-full flex-wrap justify-around">
		<a href="https://backup.ch" target="_blank" rel="noreferrer">
			<img class="steel" src={b1} alt="b1" />
		</a>
		<a href="https://swissconnect.ch" target="_blank" rel="noreferrer">
			<img class="steel" src={swissconnect} alt="swissconnect" />
		</a>
	</div>
	<div class="flex flex-row max-w-full flex-wrap justify-around">
		<a href="https://7-druck.com" target="_blank" rel="noreferrer">
			<img class="aluminium" src={siebendruck} alt="7druck" />
		</a>
		<a href="https://adrianos.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={adrianos} alt="adrianos" />
		</a>
		<a href="https://bellocyclist.com" target="_blank" rel="noreferrer">
			<img class="aluminium" src={bello} alt="bello" />
		</a>
		<a href="https://bfh.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={bfh} alt="bfh" />
		</a>
		<a href="https://cmiag.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={cmi} alt="cmi" />
		</a>
		<a href="https://carvelo.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={carvelo} alt="carvelo" />
		</a>
		<a href="https://dachstock.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={dachstock} alt="dachstock" />
		</a>
		<a href="https://dirtysox.eu" target="_blank" rel="noreferrer">
			<img class="aluminium" src={dirtysox} alt="dirtysox" />
		</a>
		<a href="https://drahtesel.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={drahtesel} alt="drahtesel" />
		</a>
		<a href="https://fizzen.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={fizzen} alt="fizzen" />
		</a>
		<a href="https://gaskessel.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={gaskessel} alt="gaskessel" />
		</a>
		<a href="https://gelateriadiberna.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={gelateria} alt="gelateria" />
		</a>
		<a href="https://herbadiberna.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={herbaDiBerna} alt="herbaDiBerna" />
		</a>
		<a href="https://knog.com" target="_blank" rel="noreferrer">
			<img class="aluminium" src={knog} alt="knog" />
		</a>
		<a href="https://kryptonitelock.com" target="_blank" rel="noreferrer">
			<img class="aluminium" src={kryptonite} alt="kryptonite" />
		</a>
		<a href="https://kurierzentrale.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={kuz} alt="kuz" />
		</a>
		<a href="https://lola.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={lola} alt="lola" />
		</a>
		<a href="https://team-w.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={ltw} alt="ltw" />
		</a>
		<a href="https://nooch.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={nooch} alt="nooch" />
		</a>
		<a href="https://chistole.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={noochFond} alt="noochFond" />
		</a>
		<a href="https://oepfelchasper.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={oepfelchasper} alt="oepfelchasper" />
		</a>
		<a href="https://sbbcargo.com" target="_blank" rel="noreferrer">
			<img class="aluminium" src={sbbLogistik} alt="sbbLogistik" />
		</a>
		<a href="https://sportamt-bern.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={sportamtbern} alt="sportamtbern" />
		</a>
		<a href="https://streit-ag.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={streit} alt="streit" />
		</a>
		<a href="https://wir-bringens.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={intact} alt="intact" />
		</a>
		<a href="https://untamed.love" target="_blank" rel="noreferrer">
			<img class="aluminium" src={untamed} alt="untamed" />
		</a>
		<a href="https://veloblitz.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={veloblitz} alt="veloblitz" />
		</a>
		<a href="https://veloplus.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={veloplus} alt="veloplus" />
		</a>
		<a href="https://velokurierbern.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={vkb} alt="vkb" />
		</a>
		<a href="https://velokurierluzernzug.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={vkluzern} alt="vkluzern" />
		</a>
		<a href="https://velokurier.sg" target="_blank" rel="noreferrer">
			<img class="aluminium" src={vksg} alt="vksg" />
		</a>
		<a href="https://velokurierwinterthur.ch" target="_blank" rel="noreferrer">
			<img class="aluminium" src={vkwinti} alt="vkwinti" />
		</a>
	</div>
</div>

<style>
	.aluminium {
		padding: 1rem;
		aspect-ratio: 1/1;
		max-width: 100px;
		object-fit: contain;
	}
	.titanium {
		padding: 0rem !important;
		aspect-ratio: 1/1;
		max-width: 300px !important;
		min-width: 250px !important;
		object-fit: contain;
	}
	.steel {
		padding: 0rem !important;
		aspect-ratio: 1/1;
		max-width: 300px !important;
		min-width: 200px;
		object-fit: contain;
	}
	a {
		display: contents;
	}
</style>
