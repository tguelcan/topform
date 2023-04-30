<script lang="ts">
	import Form from '$lib/index.ts';
	import type { FormType } from '$lib/index.ts';

	let showRegister = false;

	const login = [
		{
			name: 'email',
			label: { content: 'E-Mail' },
			field: { type: 'email', placeholder: 'Your Mail', required: true }
		},
		{
			name: 'password',
			label: { content: 'Password' },
			field: { type: 'password', placeholder: 'Password' }
		}
	];

	const signUp = [
		{
			name: 'username',
			label: { content: 'User Name' },
			field: { type: 'text', placeholder: 'Your User Name' }
		},
		...login
	];

	const formData: FormType = {
		name: 'Sign in',
		enhance: false,
		inner: true,
		attributes: { autocomplete: 'off' }
	};

	$: if (showRegister) {
		formData.elements = signUp;
		formData.title = 'Sign Up';
	} else {
		formData.elements = login;
		formData.title = 'Login';
	}
</script>

<form method="POST" action={showRegister ? '?/register' : '?/login'}>
	<Form {formData} />
	<button type="submit">{showRegister ? 'Sign Up' : 'Login'}</button>
	<button type="button" on:click={() => (showRegister = !showRegister)} style="margin-top: 1em;"
		>{showRegister ? 'Go to Login' : 'Go to sign up'}</button
	>
</form>
