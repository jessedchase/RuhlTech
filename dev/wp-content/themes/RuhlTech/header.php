<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
<?php wp_head(); ?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<link rel="shortcut icon" type="image/x-icon" href="<?php echo site_url()?>/images/favicon.ico">
<link href='http://fonts.googleapis.com/css?family=Signika' rel='stylesheet' type='text/css'>
<script>
      $(document).ready(function(){
		$('#mobilelink').click(function(){
			$( "#nav ul" ).slideToggle( "slow", function() {});
		});
	});
</script>
</head>
<body <?php body_class(); ?>>
<div id="topbar">
	<div class="container">
		<ul>
			<li>PHONE: (910) 497-3172</li>
			<li>FAX: (910) 497-2067</li>
			<li>EMAIL: <a href="mailto:order@ruhltech.com">order@ruhltech.com</a></li>
		</ul>	
	</div>
</div>
<div id="header">
	<div id="container">
		<a href="/" title="Ruhl Tech Breaching">
		<img src="<?php echo site_url()?>/images/ruhl_tech_logo.png" alt="Ruhl Tech Breaching">
		</a>
	</div>
</div>
<div id="nav">
	<div class="container">
		<div id="mobilemenu">
		<a href="javascript:void(0)" id="mobilelink">
			<img src="<?php echo site_url()?>/images/menu.png" alt="Ruhl Tech Menu">
		</a>
	</div>
		<?php wp_nav_menu( array('menu' => 'MainNav') );?>
	</div>
</div>

