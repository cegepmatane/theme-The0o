<?php
/**
 *
 *
 * Please browse readme.txt for credits and forking information
 *
 * @package free_writing
 */

/**
 * Set up the WordPress core custom header feature.
 *
 * @uses free_writing_header_style()
 */
function free_writing_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'free_writing_custom_header_args', array(
		'default-image'          => get_theme_file_uri( '/img/default-bg.png' ),
		'default-text-color'     => 'fff',
		'width'                  => 1600,
		'height'                 => 500,
		'flex-height'            => true,
		'flex-width'	         => true,
		'wp-head-callback'       => 'free_writing_header_style',
		) ) );


	/*
	 * Default custom headers packaged with the theme.
	 * %s is a placeholder for the theme template directory URI.
	 */
	register_default_headers( array(
		'mountains' => array(
			'url'           => get_theme_file_uri( '/img/default-bg.png' ),
			'thumbnail_url' => get_theme_file_uri( '/img/default-bg.png' ),
			'description'   => _x( 'Default', 'Default header image', 'free-writing' )
			),	
		) );
}
add_action( 'after_setup_theme', 'free_writing_custom_header_setup' );

if ( ! function_exists( 'free_writing_header_style' ) ) :
/**
 * Styles the header image and text displayed on the blog
 *
 * @see free_writing_custom_header_setup().
 */
function free_writing_header_style() {
	$header_image = get_header_image();
	$header_text_color   = get_header_textcolor();

	// If no custom options for text are set, let's bail.
	if ( empty( $header_image ) && $header_text_color == get_theme_support( 'custom-header', 'default-text-color' ) ){
		return;
	}

	// If we get this far, we have custom styles.
	?>
	<style type="text/css" id="free_writing-header-css">
	<?php
	if ( ! empty( $header_image ) ) :

	?>


	header#masthead {
		background-image: url(<?php header_image(); ?>);
	}		
	<?php endif; 
	?>


		
	<?php 
		if ( ! display_header_text() ) :

	?>
		.site-title,
		.site-description,
		.site-branding {
			position: absolute;
			clip: rect(1px 1px 1px 1px); /* IE7 */
			clip: rect(1px, 1px, 1px, 1px);
			display:none;
		}
	<?php
		endif;
		if ( empty( $header_image ) ) :
	?>
	<?php
		else:
	?>

	<?php endif; ?>


	</style>
	<?php
}
endif; 