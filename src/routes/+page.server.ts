import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		console.log('Default event triggered');
		const data = await request.formData();

		console.log(data);
		console.log(data.get('aggreement'));
	}
} satisfies Actions;
