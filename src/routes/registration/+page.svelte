<script lang="ts">
	let screenWidth = window.innerWidth;

	const handleResize = () => {
		screenWidth = window.innerWidth;
		console.log('spam');
	};

</script>

<svelte:window on:resize={handleResize} />
<registration>
	<h1>Nothing to see here 🤠</h1>
	<p>spam {screenWidth}</p>
</registration>
