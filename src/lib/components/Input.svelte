<script lang="ts">
	import type { HTMLInputTypeAttribute } from './Input.d.ts';
	import { slugify } from '$lib/helper';

	export let type: HTMLInputTypeAttribute = 'text';
	export let value: number | string | boolean = '';

	let id: string;

	$: ({ name, label, field, helper, error } = $$restProps);
	$: id = slugify(name);

	const typeAction = (node) => {
		node.type = field.type || type;
	};
</script>

<div class="form-field-wrapper">
	{#if field?.type == 'select'}
		<div class="form-select-wrapper">
			<!-- LABEL -->
			{#if label}
				<label for={id} class="form-label">{label.content}</label>
			{:else}
				<label for={id} class="sr-only">{name}</label>
			{/if}
			<!-- SELECT -->
			<select class="form-select" {name}>
				{#each field.options as { value, content, attributes }}
					<option {value} {...attributes}>
						{content}
					</option>
				{/each}
			</select>
		</div>
	{:else if field?.type === 'radio'}
		<div class="form-radio-wrapper">
			<!-- LABEL -->
			{#if label}
				<label for={id} class="form-label">{label.content}</label>
			{:else}
				<label for={id} class="sr-only">{name}</label>
			{/if}
			<!-- RADIO -->
			{#each field.options as { value, content, attributes }, index}
				<input id={id + index} type="radio" bind:value {...attributes} {name} class="form-radio" />
				<label for={id + index} {...attributes}>
					{content}
				</label>
			{/each}
		</div>
	{:else if field?.type === 'checkbox'}
		<div class="form-checkbox-wrapper">
			<!-- CHECKBOX -->
			<input {id} use:typeAction bind:value {...field} {name} class="form-checkbox" />
			<!-- LABEL -->
			{#if label}
				<label for={id} class="form-label">{label.content}</label>
			{:else}
				<label for={id} class="sr-only">{name}</label>
			{/if}
		</div>
	{:else}
		<div class="form-input-wrapper">
			<!-- LABEL -->
			{#if label}
				<label for={id} class="form-label">{label.content}</label>
			{:else}
				<label for={id} class="sr-only">{name}</label>
			{/if}
			<!-- INPUT -->
			<input {id} use:typeAction bind:value {...field} {name} class="form-input" />
		</div>
	{/if}
	<!-- HELPER -->
	{#if helper && !error}
		<small class="form-helper">{helper}</small>
	{/if}
	<!-- ERROR -->
	{#if error}
		<small class="form-error">{error}</small>
	{/if}
</div>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	.form-checkbox-wrapper {
		float: left;
		margin-right: 0.25em;
	}
</style>
