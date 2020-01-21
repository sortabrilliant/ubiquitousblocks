<?php
/**
 * Ubiquitous Blocks - Admin.
 *
 * @author   Sébastien Dumont
 * @category Admin
 * @package  Ubiquitous Blocks/Admin
 * @license  GPL-2.0+
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Ubiquitous_Blocks_Admin' ) ) {

	class Ubiquitous_Blocks_Admin {

		/**
		 * Constructor
		 *
		 * @access public
		 */
		public function __construct() {
			// Add admin page.
			add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		} // END __construct()

		/**
		 * Add Ubiquitous Blocks to the menu.
		 *
		 * @access public
		 */
		public function admin_menu() {
			add_menu_page(
				__( 'Reusable Blocks', 'ubiquitous-blocks' ), 
				__( 'Reusable Blocks', 'ubiquitous-blocks' ), 
				'manage_options', 
				'edit.php?post_type=wp_block', 
				'', 
				'dashicons-editor-table', 
				22
			);
		} // END admin_menu()

	} // END class

} // END if class exists

return new Ubiquitous_Blocks_Admin();
