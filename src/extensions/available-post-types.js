/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
//const { apiFetch } = wp.apiFetch;

const availablePostTypes = [
	{
		label: __( 'Posts', 'ubiquitous-blocks' ),
		value: 'post',
	},
	{
		label: __( 'Pages', 'ubiquitous-blocks' ),
		value: 'page',
	}
];

/*const availablePostTypes = [];

const allPostTypes = apiFetch( { path: '/ubiquitous/v1/post-types' } ).then ( results => {
	$.each( results, function( key, val ) {
		availablePostTypes.push({ label: val.label, value: val.value });
	});
	return availablePostTypes;
});*/

export default availablePostTypes;