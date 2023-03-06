<script lang="ts">
	export let error: string[];
</script>

{#each error as e}
	<div class="text-center w-full  max-w-lg mb-2 -mt-1 font-bold text-sm text-theme-1">
		⚠️ {e}
	</div>
{/each}
