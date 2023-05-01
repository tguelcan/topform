![TOPFORM](https://raw.githubusercontent.com/tguelcan/topform/master/static/coverage.png)

# Svelte TOPFORM

Topform is a form generator for Sveltekit. It was created out of the motivation to make forms easily available with as little effort and as much consistency as possible, thus minimizing operational overhead.
The focus is to provide a form that follows the HTML standard. 
Everyone is invited to contribute.

[Further information and current documentation](https://tayfuns-organization.gitbook.io/topform/)

## Very simple example

```svelte
<script lang="ts">
	import Form from '$lib/index.ts';
	import type { FormType } from '$lib/index.ts';

	const formData: FormType = {
		name: 'SignUp',
		enhance: false,
		attributes: {
			autocomplete: 'off',
			action: '?/login'
		},
		elements: [
			{
				name: 'email',
				label: { content: 'Your mail address' },
				field: { type: 'mail', placeholder: 'E-Mail' }
			},
			{
				name: 'password',
				label: { content: 'Your password' },
				field: { type: 'password', placeholder: 'Password' }
			}
		],
		buttons: [{ name: 'save', type: 'submit', content: 'login' }]
	};
</script>

<Form {formData} />
```

## Status

- [x] Default Input types like, Text, Email...
- [x] Button
- [x] Radio
- [x] Checkbox (Single)
- [x] Optional tailwindCSS form styles
- [ ] Checkbox (Group)
- [ ] File
- [ ] Textarea
