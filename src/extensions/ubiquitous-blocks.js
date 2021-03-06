/**
 * Internal dependencies
 */
import PostTypes from './controls/post-types';
import BlockPosition from './controls/block-position';
import BlockOrder from './controls/block-order';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
const { BaseControl } = wp.components;

// Checks if the post type is for blocks.
function isBlockPostType() {
	const getPostType = wp.data.select( 'core/editor' ).getCurrentPostType(); // Gets the current post type.

	return ( getPostType === 'wp_block' ) ? true : false;
}

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
						<BaseControl
							label={ __( 'Post Types', 'ubiquitous-blocks' ) }
							help={ __( 'What post types should we add your blocks to?', 'ubiquitous-blocks' ) }
						>
							<PostTypes />
						</BaseControl>
						<BlockPosition />
						<BlockOrder />
				</PluginDocumentSettingPanel>
			) )
		)
	},
	icon: 'editor-table' // Can if you want place SVG code here.
} );