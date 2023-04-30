<script lang="ts">
	import Form from '$lib/index.ts';
	import type { FormType } from '$lib/index.ts';

	const formData: FormType = {
		name: 'SignUp',
		title: 'Sign up',
		enhance: false,
		attributes: {
			autocomplete: 'off',
			action: '?/register'
		},
		elements: [
			{
				name: 'name',
				field: { type: 'text', placeholder: 'Name' },
				helper: 'Type your name here'
			},
			{
				name: 'email',
				label: { content: 'Your mail address' },
				field: { type: 'mail', placeholder: 'E-Mail' },
				helper: 'Type your mail here'
			},
			{
				name: 'password',
				label: { content: 'Your password' },
				field: { type: 'password', placeholder: 'Password' },
				helper: 'Very secret password'
			}
		],
		buttons: [{ name: 'save', type: 'submit', content: 'Save' }]
	};
</script>

<Form {formData} />
