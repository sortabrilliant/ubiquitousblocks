/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const blockPositions = [
	{
		label: __( 'Select Position', 'ubiquitous-blocks' ),
		value: '',
		disabled: true
	},
	{
		label: __( 'Top of Content', 'ubiquitous-blocks' ),
		value: 'top',
	},
	{
		label: __( 'Bottom of Content', 'ubiquitous-blocks' ),
		value: 'bottom',
	},
];

export default blockPositions;