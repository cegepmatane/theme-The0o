<?php 

/* New design */
add_action( 'wp_enqueue_scripts', 'free_writing_enqueue_styles' );
function free_writing_enqueue_styles() {
	wp_enqueue_style( 'free-writing-parent-style', get_template_directory_uri() . '/style.css' ); 
} 

/** New fonts **/
function free_writing_google_fonts() {
	wp_enqueue_style( 'free-writing-google-fonts', '//fonts.googleapis.com/css?family=Roboto:400,500', false ); 
}
add_action( 'wp_enqueue_scripts', 'free_writing_google_fonts' );

/**
 * Implement the Custom Header feature.
 */
require_once( get_stylesheet_directory() . '/inc/custom-header.php' );

/* New customizer features */
function free_writing_customizer_color_settings( $wp_customize ) {


 $wp_customize->add_setting( 'header_text_box_bg', array(
        'default'           => '#fff',
        'sanitize_callback' => 'sanitize_hex_color',
        'transport'         => 'postMessage',
        ) );
     $wp_customize->add_setting( 'header_border_color', array(
        'default'           => '#bd9452',
        'sanitize_callback' => 'sanitize_hex_color',
        'transport'         => 'refresh',
        ) );
    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'header_border_color', array(
        'label'       => __( 'Header Border Color', 'free-writing' ),
        'section'     => 'header_image',
        'priority' => 0,
        'settings'    => 'header_border_color',
        ) ) );
    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'header_text_box_bg', array(
        'label'       => __( 'Header text box background color', 'free-writing' ),
        'section'     => 'header_image',
        'priority' => 0,
        'settings'    => 'header_text_box_bg',
        ) ) );
    $wp_customize->add_setting( 'header_title_color', array(
        'default'           => '#0d0c0c',
        'sanitize_callback' => 'sanitize_hex_color',
        'transport'         => 'postMessage',
        ) );
    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'header_title_color', array(
        'label'       => __( 'Header Title Color', 'free-writing' ),
        'section'     => 'header_image',
        'priority' => 1,
        'settings'    => 'header_title_color',
        ) ) );
    $wp_customize->add_setting( 'header_tagline_color', array(
        'default'           => '#a7a7a7',
        'sanitize_callback' => 'sanitize_hex_color',
        'transport'         => 'postMessage',
        ) );
    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'header_tagline_color', array(
        'label'       => __( 'Header Tagline Color', 'free-writing' ),
        'section'     => 'header_image',
        'priority' => 1,
        'settings'    => 'header_tagline_color',
        ) ) );
    $wp_customize->add_setting( 'header_bg_color', array(
        'default'           => '#1b1b1b',
        'sanitize_callback' => 'sanitize_hex_color',
        'transport'         => 'postMessage',
        ) );
    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'header_bg_color', array(
        'label'       => __( 'Header Background Color', 'free-writing' ),
        'description' => __( 'Applied to header background.', 'free-writing' ),
        'section'     => 'header_image',
        'settings'    => 'header_bg_color',
        ) ) );




    $wp_customize->add_control( 'header_textcolor', array(
        'label'    => __( 'Header Text Color', 'free-writing' ),
        'section'  => 'head_options',
        ) );



}
add_action( 'customize_register', 'free_writing_customizer_color_settings', 999 );



if(! function_exists('free_writing_customizer_css' ) ):
	function free_writing_customizer_css(){
		?>
		<style type="text/css">


			.site-branding {border-color: <?php echo esc_attr(get_theme_mod( 'header_border_color')); ?>; }
			#site-navigation .menu li, #site-navigation .menu .sub-menu, #site-navigation .menu .children, nav#site-navigation{ background: <?php echo esc_attr(get_theme_mod( 'navigation_background_color')); ?>; }
			#site-navigation .menu li a, #site-navigation .menu li a:hover, #site-navigation .menu li a:active, #site-navigation .menu > li.menu-item-has-children > a:after, #site-navigation ul.menu ul a, #site-navigation .menu ul ul a, #site-navigation ul.menu ul a:hover, #site-navigation .menu ul ul a:hover, div#top-search a, div#top-search a:hover { color: <?php echo esc_attr(get_theme_mod( 'navigation_link_color')); ?>; }
			.m_menu_icon { background-color: <?php echo esc_attr(get_theme_mod( 'navigation_link_color')); ?>; }
			#top-social a, #top-social a:hover, #top-social a:active, #top-social a:focus, #top-social a:visited{ color: <?php echo esc_attr(get_theme_mod( 'navigation_social_link_color')); ?>; }  
		</style>
		<?php }
		add_action( 'wp_head', 'free_writing_customizer_css' );
		endif;
