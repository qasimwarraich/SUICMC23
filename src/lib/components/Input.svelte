<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let id: string;
	export let label: string;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
	export let isCheckBox = false;
	export let isChecked = false;
	export let isRadio = false;
	export let hasNote = false;
	export let min = '';
	export let max = '';

	let normalField =
		'bg-background border-theme-1 border-2 border-solid rounded-none w-full max-w-lg p-1';
	let checkBoxField = 'bg-background ml-2 max-w-lg';

	if (type == 'checkbox') {
		isCheckBox = true;
	} else if (type == 'radio') {
		isRadio = true;
	}
</script>

<div class="w-full max-w-lg mb-2">
	<label for={id} class="font-bold pb-1">
		{#if hasNote}
			<span class="font-bold">{label}<span class="font-bold text-theme-1">ⓘ</span></span>
		{:else}
			<span class="font-bold">{label}</span>
		{/if}
	</label>
	{#if type == 'checkbox'}
		<input
			class={isCheckBox ? checkBoxField : normalField}
			type="checkbox"
			{placeholder}
			{required}
			{disabled}
			{id}
			bind:checked={isChecked}
			name={id}
			{value}
		/>
	{:else if type == 'radio'}
		<input
			class={isRadio ? checkBoxField : normalField}
			type="radio"
			{required}
			{disabled}
			{id}
			name={id}
			{value}
			checked={isChecked}
		/>
	{:else if type == 'number'}
		<input
			class={isCheckBox ? checkBoxField : normalField}
			type="number"
			{required}
			{disabled}
			{id}
			name={id}
			{value}
			{min}
			{max}
		/>
	{:else}
		<input
			class={isCheckBox ? checkBoxField : normalField}
			{type}
			{placeholder}
			{required}
			{disabled}
			{id}
			name={id}
			{value}
		/>
	{/if}
</div>
