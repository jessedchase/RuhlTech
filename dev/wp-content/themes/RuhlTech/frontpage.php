<?php

/**
 * Front Page Template
 *
   Template Name:  Front Page
 *
 * @file           frontpage.php
 * @package        RUHL TECH
 * @author         Bozeman Interactive 
 * @copyright      2017 Bozeman Interactive
 */

get_header(); ?>
<div id="slider">
<?php if ( function_exists( 'soliloquy' ) ) { soliloquy( '13' ); }?>
</div>
<div id="tools" class="section">
	<div class="container">
		<h2>-- Our Tools --</h2>
		<div id="toolleft">
			<h3>Our <span>Speciality // </span></h3>
			All RUHL TECH Breaching Tools are engineered to do one thing.... GET IN! Our tools are the finest in the world and have been extensively tested over years of use by the finest Military and Law Enforcement Agencies World Wide.All of our breaching tools have had direct user input throughout the development phase and we continue to utilize feedback from our users to constantly improve our products.
		</div>
		<div id="tool">
			<img src="http://www.ruhltech.com/dev/images/sledge.png"> 
		</div>
		<div id="toolright">
			<h3><span>//</span> Our <span>Warranty</span></h3>
			All RUHL TECH products offer a LIMITED LIFETIME WARRANTY. At anytime that your tool is not working correctly, just send it back to us and we will fix it, adjust, and ship back to you free of charge.
		</div>
		<div class="clear"></div>
		<a href="<?php echo site_url();?>/about-us" class="btn">LEARN MORE</a>
	</div>
</div>
<div id="fabrication" class="section">
	<div class="container">
		<h2>-- Machining and Fabrication --</h2>
		<h4>Looking for somethign custom? Lets Talk</h4>
		
		<p>We began as Custom Machine & Tooling, INC in 2000. Later changing our name to RUHL TECH ENGINEERING. We manufacture breaching equipment to include the Alti Tool, Ladder, and the RTE Door just to name a few. We are able to design and manufacture custom items as well. Not only are all items and materials U.S.A made BUT we are the ONLY breaching tool known to date as Army Corp of Engineers approved. Proudly Veteran owned and operated. </p>
		
		<a href="<?php echo site_url();?>/machining-fabrication" class="btn">LEARN MORE</a>
	</div>
	<img src="http://ruhltech.com/dev/images/fab-bottomleft.png" alt="" id="fabbottonleft">
	<img src="http://ruhltech.com/dev/images/fab-bottomright.png" alt="" id="fabbottonright">
</div>	
<div id="contactsection" class="section">
	<div class="container">
    	<h1>-- Contact Ruhl Tech --</h1>
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <?php the_content(); ?>
            <?php edit_post_link( $link, $before, $after, $id ); ?> 
        <?php endwhile; endif; ?>
    </div>
</div>
<div id="map">
    	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26063.542331183235!2d-78.925493!3d35.257679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ab65dfe04fd071%3A0x4a6061e43247d55d!2s26+Mockingbird+Ln%2C+Spring+Lake%2C+NC+28390!5e0!3m2!1sen!2sus!4v1496696946857" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
	</div>
<?php get_footer(); ?>