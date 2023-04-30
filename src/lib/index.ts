import Form from './components/Form.svelte';

export default Form;

export type FormType = {
	name: string;
	title?: string;
	enhance?: boolean;
	inner?: boolean;
	attributes?: object;
	action?: string;
	labels?: object[];
	elements?: object[];
	buttons?: object[];
};
