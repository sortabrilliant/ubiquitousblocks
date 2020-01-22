/**
 * Internal dependencies
 */
import blockPositions from '../block-positions';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { SelectControl } = wp.components;

// Block Position
const BlockPosition = withDispatch( ( dispatch, props ) => {
	return {
		updateBlockPosition: ( value ) => {
			dispatch( 'core/editor' ).editPost( {
				meta: {
					[ '_ubiquitous_position' ]: value
				},
			} );
		}
	};
} )( withSelect( ( select, props ) => {
	return {
		[ '_ubiquitous_position' ]: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ '_ubiquitous_position' ]
	};
} )( ( props ) => (
	<SelectControl
		label={ __( 'Position', 'ubiquitous-blocks' ) }
		value={ props[ '_ubiquitous_position' ] }
		options={ blockPositions }
		onChange={ ( value ) => props.updateBlockPosition( value ) }
		help={ __( 'Where do you want your blocks?', 'ubiquitous-blocks' ) }
	/> 
) ) );

export default BlockPosition;