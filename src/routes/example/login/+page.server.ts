import type { Actions } from './$types';

export const actions = {
	login: async ({ request }) => {
		console.log('Login called');

		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		console.log(data);

		return { success: true };
	},
	register: async ({ request }) => {
		console.log('Register called');

		const data = await request.formData();
		const username = data.get('username');
		const email = data.get('email');
		const password = data.get('password');

		console.log(data);

		return { success: true };
	}
} satisfies Actions;
