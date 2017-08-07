<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'RuhlTechDB_ruhltechco633769');

/** MySQL database username */
define('DB_USER', 'ruhltechco633769');

/** MySQL database password */
define('DB_PASSWORD', '`\\/\\)<8jO%)c');

/** MySQL hostname */
define('DB_HOST', 'sql5c6b.megasqlservers.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'U8o)IThH(H(iV/r 4LY,ze;Qw1_H6K:cHS4ee{fTFG#!xj{$U.%8P<,o@iE.rlu$');
define('SECURE_AUTH_KEY',  'nP4fy-Z))b7O5#y^Bw7<6rAVA@<M4rJ+?P{Jra/eS~lSa95D`}HeE3D!W=Sak-9_');
define('LOGGED_IN_KEY',    '$0kdMX{6NV)+|D8lN`kLBI3=v[tGSd#jpB+WC[PzIS):Q{z|$PC3bi9N6O-0Sv<g');
define('NONCE_KEY',        'Ke]Vm3.@x6%#Qa:8H*R0$eX~qdhpL$#z3E7W*BfC($ V?)2Rdv)Ks&DuaYWR fk*');
define('AUTH_SALT',        'J91HWScZk=tNbo)UXGIyha*9KlKzF!%L<[eG`(=FI-n uMk3=eK0?q+Q@LOu%[FZ');
define('SECURE_AUTH_SALT', 'F?gE#VuvJ^s_l5mEmvvO%&WbD5++KI[cQ(!D-qin6m1EE:PGgM!n`guk*A#z0C%v');
define('LOGGED_IN_SALT',   '=.r- R4p.3G5cWqMkXn3k,Lu<t<gB7?Mct$nHf+ZuZGnWNu2<[dwM2AM3X#x{=d$');
define('NONCE_SALT',       '=;=Jr7!$89(sqXqaY^Jt*V[#jzCsg.Jlx0H $`@{PDEWA!z@3R$:1.sz?mH,yYqn');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'rt_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
