<?php

/**
 * Inner Page Template
 *
   Template Name:  Inner Page
 *
 * @file           frontpage.php
 * @package        RUHL TECH
 * @author         Bozeman Interactive 
 * @copyright      2017 Bozeman Interactive
 */

get_header(); ?>
<?php if ( has_post_thumbnail() ) : ?>
	<div id="featured">
		<?php the_post_thumbnail();?>
		<?php 
		$get_description = get_post(get_post_thumbnail_id())->post_excerpt;
		  if(!empty($get_description)){//If description is not empty show the div
		  echo '<div class="featured_caption">' . $get_description . '</div>';
		  }
		?>
	</div>
<?php endif; ?>
<div id="tools" class="section">
	<div class="container">
    	<h1><?php the_title();?></h1>
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <?php the_content(); ?>
            <?php edit_post_link( $link, $before, $after, $id ); ?> 
        <?php endwhile; endif; ?>
    </div>
</div>
<?php get_footer(); ?>