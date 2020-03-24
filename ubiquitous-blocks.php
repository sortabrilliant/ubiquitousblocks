<?php
/**
 * Plugin Name: Ubiquitous Blocks
 * Plugin URI:  https://sortabrilliant.com/ubiquitous/
 * Description: Let's make reusable blocks even easier to reuse.
 * Author:      sorta brilliant
 * Author URI:  https://sortabrilliant.com/
 * Version:     1.0.2
 * License:     GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Ubiquitous_Blocks' ) ) {
	final class Ubiquitous_Blocks {

		/**
		 * Plugin Version
		 *
		 * @access public
		 * @static
		 */
		public static $version = '1.0.2';

		/**
		 * @var Ubiquitous_Blocks - the single instance of the class.
		 *
		 * @access private
		 * @static
		 */
		private static $_instance;

		/**
		 * Main Ubiquitous Blocks Instance.
		 *
		 * Ensures only one instance of Ubiquitous Blocks exists in memory at any one time. Also prevents needing to define globals all over the place.
		 *
		 * @access  public
		 * @static
		 * @see     Ubiquitous_Blocks()
		 * @return  Ubiquitous_Blocks - Main instance
		 */
		public static function instance() {
			if ( is_null( self::$_instance ) && ! ( self::$_instance instanceof Ubiquitous_Blocks ) ) {
				self::$_instance = new Ubiquitous_Blocks();
				self::$_instance->init();
				self::$_instance->setup_constants();
				self::$_instance->includes();
			}
			return self::$_instance;
		}

		/**
		 * Cloning is forbidden.
		 *
		 * @access public
		 * @return void
		 */
		public function __clone() {
			_doing_it_wrong( __FUNCTION__, __( 'Cloning this object is forbidden.', 'ubiquitous-blocks' ), self::$version );
		} // END __clone()

		/**
		 * Un-serializing instances of this class is forbidden.
		 *
		 * @access public
		 * @return void
		 */
		public function __wakeup() {
			_doing_it_wrong( __FUNCTION__, __( 'Unserializing instances of this class is forbidden.', 'ubiquitous-blocks' ), self::$version );
		} // END __wakeup()

		/**
		 * Load the plugin.
		 *
		 * @access private
		 */
		private function init() {
			// Load translation files.
			add_action( 'plugins_loaded', array( $this, 'load_textdomain' ), 99 );
			add_action( 'enqueue_block_editor_assets', array( $this, 'block_localization' ) );
		} // END __construct()

		/**
		 * Setup Constants
		 *
		 * @access private
		 * @return void
		 */
		private function setup_constants() {
			$this->define( 'UBIQUITOUS_BLOCKS_VERSION', self::$version );
			$this->define( 'UBIQUITOUS_BLOCKS_SLUG', 'ubiquitous-blocks' );
			$this->define( 'UBIQUITOUS_BLOCKS_DIR_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
			$this->define( 'UBIQUITOUS_BLOCKS_URL_PATH', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
			$this->define( 'UBIQUITOUS_BLOCKS_PLUGIN_FILE', __FILE__ );
			$this->define( 'UBIQUITOUS_BLOCKS_PLUGIN_BASE', plugin_basename( __FILE__ ) );

			/*$suffix = SCRIPT_DEBUG ? null : '.min';
			$this->define( 'UBIQUITOUS_BLOCKS_ASSET_SUFFIX', $suffix );*/
		} // END setup_constants()

		/**
		 * Define constant if not already set.
		 *
		 * @access private
		 * @param  string $name
		 * @param  string|bool $value
		 */
		private function define( $name, $value ) {
			if ( ! defined( $name ) ) {
				define( $name, $value );
			}
		} // END define()

		/**
		 * Includes Ubiquitous Blocks support for WordPress.
		 *
		 * @access private
		 * @return void
		 */
		private function includes() {
			include_once( UBIQUITOUS_BLOCKS_DIR_PATH . '/includes/class-ubiquitous-blocks-autoloader.php' );
			include_once( UBIQUITOUS_BLOCKS_DIR_PATH . '/includes/class-ubiquitous-blocks-assets.php' );
			include_once( UBIQUITOUS_BLOCKS_DIR_PATH . '/includes/class-ubiquitous-blocks-meta.php' );
			include_once( UBIQUITOUS_BLOCKS_DIR_PATH . '/includes/class-ubiquitous-blocks-register-blocks.php' );
			include_once( UBIQUITOUS_BLOCKS_DIR_PATH . '/includes/class-ubiquitous-blocks-rest-api.php' );

			// Include admin classes to handle all back-end functions.
			$this->admin_includes();
		} // END includes()

		/**
		 * Include admin classes to handle all back-end functions.
		 *
		 * @access public
		 * @return void
		 */
		public function admin_includes() {
			if ( is_admin() || ( defined( 'WP_CLI' ) && WP_CLI ) ) {
				include_once( UBIQUITOUS_BLOCKS_DIR_PATH . '/includes/admin/class-ubiquitous-blocks-admin.php' );
				require_once( UBIQUITOUS_BLOCKS_DIR_PATH . '/includes/class-ubiquitous-blocks-install.php' );
			}
		} // END admin_includes()

		/**
		 * Load the plugin translations if any ready.
		 *
		 * Translations should be added in the WordPress language directory:
		 *      - WP_LANG_DIR/plugins/ubiquitous-blocks-LOCALE.mo
		 *
		 * @access public
		 * @return void
		 */
		public function load_textdomain() {
			load_plugin_textdomain( 'ubiquitous-blocks', false, dirname( plugin_basename( UBIQUITOUS_BLOCKS_DIR_PATH ) ) . '/languages/' );
		} // END load_textdomain()

		/**
		 * Enqueue localization data for our blocks.
		 *
		 * @access public
		 */
		public function block_localization() {
			if ( function_exists( 'wp_set_script_translations' ) ) {
				wp_set_script_translations( 'ubiquitousblocks-editor', 'ubiquitousblocks' );
			}
		} // END block_localization()

	} // END class

} // END if class exists

/**
 * The main function for that returns Ubiquitous_Blocks
 *
 * The main function responsible for returning the one true Ubiquitous_Blocks
 * Instance to functions everywhere.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * Example: <?php $ubiquitous_blocks = Ubiquitous_Blocks(); ?>
 *
 * @return object|Ubiquitous_Blocks The one true Ubiquitous_Blocks Instance.
 */
function ubiquitous_blocks() {
	return Ubiquitous_Blocks::instance();
}

// Get the plugin running. Load on plugins_loaded action to avoid issue on multi-site.
if ( function_exists( 'is_multisite' ) && is_multisite() ) {
	add_action( 'plugins_loaded', 'ubiquitous_blocks' );
} else {
	ubiquitous_blocks();
}
