# svelte top form

A json based form generator <br />
-- The package is in beta and still in development. Contribution is welcome.
The generator uses the default https://kit.svelte.dev/docs/form-actions approach.

## Example

```svelte
<script lang="ts">
	import Form from 'topform';
	import type { FormType } from 'topform';

	const formData: FormType = {
		name: 'MyForm',
		title: 'My Form',
		enhance: false,
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
							content: `What is another personal fact that an attacker could easily find with Google?`
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
```

## Styles

- Input field = form-\* like form-input, form-checkbox, form-radio...
- Form has "wrapper" class and form-field-wrapper, form-input-wrapper, form-select-wrapper, form-radio-wrapper...
- Button = form-button
- Error = form-error
- Helper = form-helper

## Status

- [x] Default Input types like, Text, Email...
- [x] Button
- [x] Radio
- [x] Checkbox (Single)
- [ ] Checkbox (Group)
- [ ] File
- [ ] Textarea
