/**
 * Internal dependencies
 */
import availablePostTypes from './available-post-types';
import blockPositions from './block-positions';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { TextControl, SelectControl } = wp.components;
const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;

// Checks if the post type is for blocks.
function isBlockPostType() {
	const getPostType = wp.data.select( 'core/editor' ).getCurrentPostType(); // Gets the current post type.

	return ( getPostType === 'wp_block' ) ? true : false;
}

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
		help={ __( 'Select where you want the reusable block to display of every post type you selected.', 'ubiquitous-blocks' ) }
	/> 
) ) );

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
		help={ __( 'Enter the number you wish this reusable block to show in order of.', 'ubiquitouse-blocks' ) }
		type="number"
		value={ props[ '_ubiquitous_order_number' ] }
		onChange={ ( value ) => props.updateBlockOrder( value ) }
		placeholder={ 0 }
		min={ 0 }
		step={ 1 }
		max={ 1000 }
	/>
) ) );

// Register the panel.
registerPlugin( 'ubiquitous-document-setting-panel', {
	render: () => {
		return (
			( isBlockPostType() && (
				<PluginDocumentSettingPanel
					name="ubiquitous-document-settings-panel"
					title={ __( 'Ubiquitous Blocks', 'ubiquitous-blocks' ) }
					initialOpen={ true }
					className="ubiquitous-document-settings-panel"
					>
						<PostTypes />
						<BlockPosition />
						<BlockOrder />
				</PluginDocumentSettingPanel>
			) )
		)
	},
	icon: 'editor-table' // Can if you want place SVG code here.
} );