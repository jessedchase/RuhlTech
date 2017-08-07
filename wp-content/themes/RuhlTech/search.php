<?php get_header(); ?>
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
    	<section id="content" role="main">
<?php if ( have_posts() ) : ?>
<header class="header">
<h1 class="entry-title"><?php printf( __( 'Search Results for: %s', 'blankslate' ), get_search_query() ); ?></h1>
</header>
<?php while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'entry' ); ?>
<?php endwhile; ?>
<?php get_template_part( 'nav', 'below' ); ?>
<?php else : ?>
<article id="post-0" class="post no-results not-found">
<header class="header">
<h2 class="entry-title"><?php _e( 'Nothing Found', 'blankslate' ); ?></h2>
</header>
<section class="entry-content">
<p><?php _e( 'Sorry, nothing matched your search. Please try again.', 'blankslate' ); ?></p>
<?php get_search_form(); ?>
</section>
</article>
<?php endif; ?>
</section>
    </div>
</div>
<?php get_footer(); ?>