<?php
/**
 * Ubiquitous Blocks REST API controller
 *
 * Handles requests to the ubiquitous endpoint.
 *
 * @author   Sébastien Dumont
 * @category API
 * @package  Ubiquitous Blocks/API
 * @license  GPL-2.0+
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Ubiquitous Blocks REST API controller class.
 */
class Ubiquitous_Blocks_API_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'ubiquitous/v1';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = '';

	/**
	 * Register the routes for Ubiquitous Blocks.
	 *
	 * @access public
	 */
	public function register_routes() {
		// Get Available Post Types - ubiquitous/v1/post-types (GET)
		register_rest_route( $this->namespace, '/' . $this->rest_base . '/post-types', array(
			'methods'  => WP_REST_Server::READABLE,
			'callback' => array( $this, 'get_available_post_types' ),
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		) );
	} // register_routes()

	/**
	 * Get available post types.
	 *
	 * @access public
	 * @param  array $data
	 * @return array|WP_REST_Response
	 */
	public function get_available_post_types( $data = array() ) {
		// Get all available post types.
		$post_types = get_post_types( array( 'public' => true ), 'names' );

		// Unset un-supported post types.
		unset( $post_types['elementor_library'] );
		unset( $post_types['tdb_templates'] );

		// Allow third-party plugins to filter out unsupported post types.
		$post_types = apply_filters( 'ubiquitous_unsupported_post_types', $post_types );

		$available_post_types = array();

		// Now capitalize the first letter of the Post Type name for labeling.
		foreach ( $post_types as $value => $label ) {
			$available_post_types[] = array(
				'label' => ucfirst( $label ),
				'value' => $value,
			);
		}

		return new WP_REST_Response( $available_post_types, 200 );
	} // END get_available_post_types()

} // END class
