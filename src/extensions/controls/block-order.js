/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { TextControl } = wp.components;

// Block Order
const BlockOrder = withDispatch( ( dispatch, props ) => {
	return {
		updateBlockOrder: ( value ) => {
			dispatch( 'core/editor' ).editPost( {
				meta: {
					[ '_ubiquitous_order_number' ]: value
				},
			} );
		}
	};
} )( withSelect( ( select, props ) => {
	return {
		[ '_ubiquitous_order_number' ]: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ '_ubiquitous_order_number' ]
	};
} )( ( props ) => (
	<TextControl
		label={ __( 'Order Number', 'ubiquitous-blocks' ) }
		id={ 'ubiquitous-order-number' }
		help={ __( 'Which order should we put them in?', 'ubiquitous-blocks' ) }
		type="number"
		value={ props[ '_ubiquitous_order_number' ] }
		onChange={ ( value ) => props.updateBlockOrder( value ) }
		placeholder={ 0 }
		min={ 0 }
		step={ 1 }
		max={ 1000 }
	/>
) ) );

export default BlockOrder;
