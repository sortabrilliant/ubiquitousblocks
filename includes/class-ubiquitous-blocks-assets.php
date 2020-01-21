<?php
/**
 * Ubiquitous Blocks - Load assets.
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
 * Ubiquitous Blocks assets class.
 */
class Ubiquitous_Blocks_Assets {

	/**
	 * This class instance.
	 *
	 * @var Ubiquitous_Blocks_Assets
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new Ubiquitous_Blocks_Assets();
		}
	}

	/**
	 * The Block Slug.
	 *
	 * @var string $_slug
	 */
	private $_slug;

	/**
	 * The Constructor.
	 */
	public function __construct() {
		$this->_slug = 'ubiquitousblocks';

		add_action( 'init', array( $this, 'editor_assets' ), 9999 );
	} // END __construct()

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function editor_assets() {
		if ( ! is_admin() ) {
			return;
		}

		if ( ! $this->is_edit_or_new_admin_page() ) { // Load on allowed pages only.
			return;
		}

		// Scripts.
		wp_enqueue_script(
			$this->_slug . '-editor',
			UBIQUITOUS_BLOCKS_URL_PATH . '/dist/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-components', 'wp-edit-post', 'wp-api', 'wp-editor', 'wp-hooks', 'wp-api-fetch' ),
			time(),
			false
		);
	} // END editor assets()

	/**
	 * Checks if admin page is the 'edit' or 'new-post' screen.
	 *
	 * @access public
	 * @return bool true or false
	 */
	public function is_edit_or_new_admin_page() {
		global $pagenow;

 		return ( is_admin() && ( $pagenow === 'post.php' || $pagenow === 'post-new.php' ) );
	} // END is_edit_or_new_admin_page()

} // END class

Ubiquitous_Blocks_Assets::register();
