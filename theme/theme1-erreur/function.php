function reset_my_password() {
    $user = get_user_by( 'email', 'theolaidin@egmail.com' );
    $new_password = wp_generate_password();
    wp_set_password( "lepwd", $user->ID );
    wp_mail( $user->user_email, 'Votre nouveau mot de passe', "lepwd" );
}
add_action( 'init', 'reset_my_password' );
