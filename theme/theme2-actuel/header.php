<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package elegantwriting
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="alternate" type="application/rss+xml" title="Feed" href="http://theolaidin.pro/feed/" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
<a href="https://theolaidin.pro/rss">
	<img srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Feed-icon.svg/1200px-Feed-icon.svg.png" style="height: 20px;width: 20px;position: absolute; top:5px; right: 5px;">
</a>
<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'elegantwriting' ); ?></a>


	<div id="page" class="site">
		<header id="masthead" class="site-header" role="banner">
			<div class="container">
				<div class="header-container">
					<div class="header-content">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
							<div class="site-branding">
								<?php
								if ( has_custom_logo() ) {
									elegantwriting_the_custom_logo();
								}?>
								<span class="site-title">
									<?php bloginfo( 'name' ); ?>
								</span>
								<p class="site-description">
									<?php bloginfo( 'description' ); ?>
								</p>
							</div>
						</a>
					</div>

				</div>
			</div>
		</header>
		<nav id="site-navigation" class="main-navigation" role="navigation">
			<div class="top-nav container">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
					<span class="m_menu_icon"></span>
					<span class="m_menu_icon"></span>
					<span class="m_menu_icon"></span>
				</button>
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
				<div id="top-search">
					<a href="#"><i class="fa fa-search"></i></a>
				</div>
				<div class="show-search">
					<?php get_search_form(); ?>
				</div>
				<div id="top-social">
					<?php if(get_theme_mod('elegantwriting_facebook')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_facebook')); ?>" target="_blank"><i class="fa fa-facebook"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_twitter')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_twitter')); ?>" target="_blank"><i class="fa fa-twitter"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_instagram')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_instagram')); ?>" target="_blank"><i class="fa fa-instagram"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_pinterest')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_pinterest')); ?>" target="_blank"><i class="fa fa-pinterest"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_bloglovin')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_bloglovin')); ?>" target="_blank"><i class="fa fa-heart"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_google')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_google')); ?>" target="_blank"><i class="fa fa-google-plus"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_tumblr')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_tumblr')); ?>.tumblr.com/" target="_blank"><i class="fa fa-tumblr"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_youtube')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_youtube')); ?>" target="_blank"><i class="fa fa-youtube-play"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_dribbble')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_dribbble')); ?>" target="_blank"><i class="fa fa-dribbble"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_soundcloud')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_soundcloud')); ?>" target="_blank"><i class="fa fa-soundcloud"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_vimeo')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_vimeo')); ?>" target="_blank"><i class="fa fa-vimeo-square"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_linkedin')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_linkedin')); ?>" target="_blank"><i class="fa fa-linkedin"></i></a><?php endif; ?>
					<?php if(get_theme_mod('elegantwriting_rss')) : ?><a href="<?php echo esc_url(get_theme_mod('elegantwriting_rss')); ?>" target="_blank"><i class="fa fa-rss"></i></a><?php endif; ?>
				</div>
			</div>
		</nav>
		<?php if ( is_active_sidebar( 'top_widget_left') || is_active_sidebar( 'top_widget_fullwidth') || is_active_sidebar( 'top_widget_middle') ||  is_active_sidebar( 'top_widget_right')  ) : ?>
			<div class="container"> 
				<div class="row">
					<div class="top-widget-wrapper">
						<?php if ( is_active_sidebar( 'top_widget_left') || is_active_sidebar( 'top_widget_middle') ||  is_active_sidebar( 'top_widget_right')  ) : ?>
							<div class="top-widget-grid">
								<?php if ( is_active_sidebar( 'top_widget_left')  ) : ?>
									<div class="top-widget-single">
										<?php dynamic_sidebar( 'top_widget_left' ); ?>
									</div>
								<?php endif; ?>


								<?php if ( is_active_sidebar( 'top_widget_middle')  ) : ?>
									<div class="top-widget-single">
										<?php dynamic_sidebar( 'top_widget_middle' ); ?>
									</div>
								<?php endif; ?>

								<?php if ( is_active_sidebar( 'top_widget_right')  ) : ?>
									<div class="top-widget-single">
										<?php dynamic_sidebar( 'top_widget_right' ); ?>
									</div>
								<?php endif; ?>
							</div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		<?php endif; ?>
		<div id="content" class="site-content">
