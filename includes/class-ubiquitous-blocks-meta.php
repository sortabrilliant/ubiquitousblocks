<?php
/**
 * Ubiquitous Blocks - Post Meta.
 *
 * @package  Ubiquitous Blocks
 * @category Classes
 * @author   Sébastien Dumont
 * @license  GPL-2.0+
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Ubiquitous Blocks post meta class.
 */
class Ubiquitous_Blocks_Post_Meta {

	/**
	 * Constructor.
	 *
	 * @access public
	 */
	public function __construct() {
		add_filter( 'init', array( $this, 'register_meta' ) );
	}

	/**
	 * Register meta.
	 *
	 * @access public
	 */
	public function register_meta() {
		// Meta to identify which post types the reusable block will load on.
		register_meta(
			'post',
			'_ubiquitous_post_types',
			array(
				'show_in_rest'      => true,
				'single'            => true,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
				'auth_callback'     => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		// Meta to set the position of the reusable block.
		register_meta(
			'post',
			'_ubiquitous_position',
			array(
				'show_in_rest'      => true,
				'single'            => true,
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
				'auth_callback'     => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		// Meta to acknowledge the load order of the reusable block.
		register_meta(
			'post',
			'_ubiquitous_order_number',
			array(
				'show_in_rest'      => true,
				'single'            => true,
				'type'              => 'number',
				'sanitize_callback' => 'sanitize_text_field',
				'auth_callback'     => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	} // END register_meta()

} // END class.

return new Ubiquitous_Blocks_Post_Meta();
