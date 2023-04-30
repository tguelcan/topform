import Form from './components/Form.svelte';

export default Form;

export type FormType = {
	name: String;
	title?: String;
	enhance?: boolean;
	inner?: boolean;
	attributes?: object;
	labels?: object[];
	elements?: object[];
	buttons?: object[];
};
