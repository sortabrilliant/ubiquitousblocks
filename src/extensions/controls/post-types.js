/**
 * Internal dependencies
 */
import availablePostTypes from '../available-post-types';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;

/**
 * Block dependencies
 */
import Select from 'react-select';

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
	<Select
		isMulti='true'
		label={ __( 'Post Types', 'ubiquitous-blocks' ) }
		value={ props[ '_ubiquitous_post_types' ] }
		options={ availablePostTypes }
		onChange={ ( value ) => props.updateBlockPostTypes( value ) }
		help={ __( 'What post types should we add your blocks to?', 'ubiquitous-blocks' ) }
	/>
) ) );

export default PostTypes;