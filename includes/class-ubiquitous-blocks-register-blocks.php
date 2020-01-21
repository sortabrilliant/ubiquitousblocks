<?php
/**
 * Ubiquitous Blocks - Display Reusable Blocks
 *
 * Any reusable block set to show on a specific post type 
 * will display in order at the top or bottom of the post content.
 *
 * @author   Sébastien Dumont
 * @category Classes
 * @package  Ubiquitous Blocks/Classes/Display Reuseable Blocks
 * @license  GPL-2.0+
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Ubiquitous_Blocks_Display_Reusable_Blocks {

	/**
	 * Constructor
	 *
	 * @access public
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'enable_meta_support' ) );

		// Only filter the content on the frontend.
		if ( ! is_admin() ) {
			add_filter( 'the_content', array( $this, 'display_reusable_blocks_top' ), 8 );
			add_filter( 'the_content', array( $this, 'display_reusable_blocks_bottom' ), 10 );
		}
	} // END __construct()

	/**
	 * Adds meta support for reusable blocks.
	 *
	 * @access public
	 */
	public function enable_meta_support() {
		add_post_type_support( 'wp_block', 'custom-fields' );
	} //END enable_meta_support()

	/**
	 * Queries the reusable blocks post type and returns 
	 * content found based on the parameters provided.
	 *
	 * @access public
	 * @param string $post_type - Default: post
	 * @param string $position - Default: top
	 * @return object $query - The results of the WP_Query.
	 */
	public function query_reusable_blocks( $post_type = 'post', $position = 'top' ) {
		// Query argument.
		$args = array(
			'post_type'   => 'wp_block',
			'post_status' => 'publish',
			'meta_key'    => '_ubiquitous_order_number',
			'orderby'     => 'meta_value_num',
			'order'       => 'ASC',
			'meta_query'  => array(
				'relation' => 'AND',
				array(
					'key'     => '_ubiquitous_post_types',
					'value'   => $post_type,
					'compare' => 'LIKE'
				),
				array(
					'key' => '_ubiquitous_position',
					'value' => $position
				)
			)
		);

		// Return results.
		return $args;
	} // END query_reusable_blocks()

	/**
	 * Displays enabled reusable blocks at the top of post content.
	 *
	 * @access public
	 * @param  string $content
	 * @global object $post
	 * @return string $content
	 */
	public function display_reusable_blocks_top( $content ) {
		global $post;

		$post_type = $post->post_type;

		$query_top = $this->query_reusable_blocks( $post_type, 'top' );

		// Run query.
		$reusable = new WP_Query( $query_top );

		$new_content = '';

		if ( $reusable->have_posts() ) {
			while ( $reusable->have_posts() ) {
				$reusable->the_post();

				$new_content = get_the_content();

				$new_content = apply_filters( 'the_content', $new_content );
				$new_content = str_replace( ']]>', ']]&gt;', $new_content );
			}
		}

		$content = $new_content . $content;

		/* Restore original Post Data */
		wp_reset_postdata();

		return $content;
	} // END display_reusable_blocks_top()

	/**
	 * Displays enabled reusable blocks at the bottom of post content.
	 *
	 * @access public
	 * @param  string $content
	 * @global object $post
	 * @return string $content
	 */
	public function display_reusable_blocks_bottom( $content ) {
		global $post;

		$post_type = $post->post_type;

		$query_bottom = $this->query_reusable_blocks( $post_type, 'bottom' );

		// Run query.
		$reusable = new WP_Query( $query_top );

		$new_content = '';

		if ( $reusable->have_posts() ) {
			while ( $reusable->have_posts() ) {
				$reusable->the_post();

				$new_content = get_the_content();

				$new_content = apply_filters( 'the_content', $new_content );
				$new_content = str_replace( ']]>', ']]&gt;', $new_content );
			}
		}

		$content = $content . $new_content;

		/* Restore original Post Data */
		wp_reset_postdata();

		return $content;
	} // END display_reusable_blocks_bottom()

} // END class

return new Ubiquitous_Blocks_Display_Reusable_Blocks();
