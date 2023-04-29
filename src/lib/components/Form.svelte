<script lang="ts">
	import type { HTMLFormActionType } from './Input.d.ts';
	import { enhance } from '$app/forms';
	export let method: HTMLFormActionType = 'POST';
	import Wrapper from './Wrapper.svelte';

	$: ({ formData } = $$restProps);
</script>

{#if formData?.title}
	<h1 class="form-title">{formData.title}</h1>
{/if}

{#if formData?.enhance}
	<form {method} {...formData.attributes} class="form" use:enhance>
		<Wrapper {...formData} />
	</form>
{:else}
	<form {method} {...formData.attributes} class="form">
		<Wrapper {...formData} />
	</form>
{/if}
