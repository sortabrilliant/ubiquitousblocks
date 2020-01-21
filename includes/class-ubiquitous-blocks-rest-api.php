<?php
/**
 * Ubiquitous Blocks REST API
 *
 * Handles endpoint requests for Ubiquitous Blocks.
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
 * Ubiquitous Blocks REST API class.
 */
class Ubiquitous_Blocks_Rest_API {

	/**
	 * Setup class.
	 *
	 * @access public
	 */
	public function __construct() {
		// Add query vars.
		add_filter( 'query_vars', array( $this, 'add_query_vars' ), 0 );

		// Register API endpoint.
		add_action( 'init', array( $this, 'add_endpoint' ), 0 );

		// Ubiquitous Blocks REST API.
		$this->ubiquitous_rest_api_init();
	} // END __construct()

	/**
	 * Add new query vars.
	 *
	 * @access public
	 * @param  array $vars Query vars.
	 * @return string[]
	 */
	public function add_query_vars( $vars ) {
		$vars[] = 'ubiquitous';

		return $vars;
	} // END add_query_vars()

	/**
	 * Add rewrite endpoint.
	 *
	 * @access public
	 * @static
	 */
	public static function add_endpoint() {
		add_rewrite_endpoint( 'ubiquitous', EP_ALL );
	} // END add_endpoint()

	/**
	 * Initialize Ubiquitous Blocks REST API.
	 *
	 * @access private
	 */
	private function ubiquitous_rest_api_init() {
		// REST API was included starting WordPress 4.4.
		if ( ! class_exists( 'WP_REST_Server' ) ) {
			return;
		}

		// Include REST API Controllers.
		add_action( 'wp_loaded', array( $this, 'rest_api_includes' ), 5 );

		// Register Ubiquitous Blocks REST API routes.
		add_action( 'rest_api_init', array( $this, 'register_routes' ), 10 );
	} // ubiquitous_rest_api_init()

	/**
	 * Include Ubiquitous Blocks REST API controllers.
	 *
	 * @access public
	 */
	public function rest_api_includes() {
		include_once( dirname( __FILE__ ) . '/api/class-ubiquitous-controller.php' );
	} // rest_api_includes()

	/**
	 * Register Ubiquitous Blocks REST API routes.
	 *
	 * @access public
	 */
	public function register_routes() {
		$controller = new Ubiquitous_Blocks_API_Controller();
		$controller->register_routes();
	} // END register_routes()

} // END class

return new Ubiquitous_Blocks_Rest_API();
