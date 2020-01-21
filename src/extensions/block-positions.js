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
		label: __( 'Before all content', 'ubiquitous-blocks' ),
		value: 'top',
	},
	{
		label: __( 'After all content', 'ubiquitous-blocks' ),
		value: 'bottom',
	},
];

export default blockPositions;