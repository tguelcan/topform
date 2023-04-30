<script lang="ts">
	import Input from './Input.svelte';

	$: ({ elements, buttons } = $$restProps);
</script>

<div class="wrapper">
	{#if elements}
		{#each elements as element}
			<Input {...element} />
		{/each}
	{/if}
	{#if buttons}
		{#each buttons as { content, type }}
			<div class="button-wrapper">
				<button {type} class="form-button">{content}</button>
			</div>
		{/each}
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		gap: 1em;
		justify-content: center;
		flex-direction: column;
	}
</style>
