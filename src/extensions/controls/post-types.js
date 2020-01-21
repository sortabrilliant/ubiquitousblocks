/**
 * Internal dependencies
 */
import availablePostTypes from '../available-post-types';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { SelectControl } = wp.components;

// Post Types
const PostTypes = withDispatch( ( dispatch, props ) => {
	return {
		updateBlockPostTypes: ( value ) => {
			dispatch( 'core/editor' ).editPost( {
				meta: {
					[ '_ubiquitous_post_types' ]: JSON.stringify( value )
				},
			} );
		}
	};
} )( withSelect( ( select, props ) => {
	return {
		[ '_ubiquitous_post_types' ]: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ '_ubiquitous_post_types' ] ? JSON.parse( select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ '_ubiquitous_post_types' ] ) : {},
	};
} )( ( props ) => (
	<SelectControl
		multiple
		label={ __( 'Post Types', 'ubiquitous-blocks' ) }
		value={ props[ '_ubiquitous_post_types' ] }
		options={ availablePostTypes }
		onChange={ ( value ) => props.updateBlockPostTypes( value ) }
		help={ __( 'Select the post types this reusable block will be shown on.', 'ubiquitous-blocks' ) }
	/>
) ) );

export default PostTypes;