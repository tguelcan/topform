<script lang="ts">
	import Input from './Input.svelte';

	$: ({ elements, buttons } = $$restProps);
</script>

<div class="form-wrapper">
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
