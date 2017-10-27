// jQuery Document

$('.grid').isotope({
  
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

var $grid = $('.grid').isotope({
  
});

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});