<script lang="ts">
	import Input from './Input.svelte';

	$: ({ elements, buttons } = $$restProps);
</script>

<div class="wrapper">
	{#each elements as element}
		<Input {...element} />
	{/each}
	{#each buttons as { content, type }}
		<div class="button-wrapper">
			<button {type} class="form-button">{content}</button>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		display: flex;
		gap: 1em;
		justify-content: center;
		flex-direction: column;
	}
</style>
