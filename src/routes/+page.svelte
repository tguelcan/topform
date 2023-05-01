<script lang="ts">
	import Form from '$lib/index.ts';
	import type { FormType } from '$lib/index.ts';

	const formData: FormType = {
		name: 'MyForm',
		title: 'My Form',
		enhance: false,
		inner: false,
		attributes: { autocomplete: 'off' },
		elements: [
			{
				name: 'firstName',
				label: { content: 'First Name' },
				field: { type: 'text', placeholder: 'First Name' },
				helper: 'Type your first name here',
				error: 'Firstname is required'
			},
			{
				name: 'lastName',
				label: { content: 'Last Name' },
				field: { type: 'text', placeholder: 'Last Name' },
				helper: 'Type your last name here'
			},
			{
				name: 'email',
				label: { content: 'E-Mail' },
				field: { type: 'email', placeholder: 'Your Mail', required: true }
			},
			{
				name: 'password',
				label: { content: 'Password' },
				field: { type: 'password', placeholder: 'Password' }
			},
			{
				name: 'aggreement',
				label: { content: 'Okay i aggree.' },
				field: { type: 'checkbox' }
			},
			{
				name: 'question',
				label: { content: 'Choose a question' },
				field: {
					type: 'select',
					options: [
						{
							value: 1,
							content: `Where did you go to school?`,
							attributes: {
								disabled: true
							}
						},
						{ value: 2, content: `What is your mother's name?` },
						{
							value: 3,
							content: 'Your color?'
						}
					]
				}
			},
			{
				name: 'selectOne',
				label: { content: 'Select one of this' },
				field: {
					type: 'radio',
					options: [
						{
							value: 'green',
							content: 'Bulbasaur'
						},
						{
							value: 'red',
							content: 'Charmander'
						},
						{
							value: 'blue',
							content: 'Squirtle'
						}
					]
				}
			}
		],
		buttons: [{ name: 'send', type: 'submit', content: 'Send' }]
	};
</script>

<Form {formData} />
