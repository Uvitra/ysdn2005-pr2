// jQuery Document

$('.grid').isotope({
  
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
	letterCount: function( itemElem ) {
      var nameText = $( itemElem ).find('.name').text();
		var characterCount = nameText.length;
		if (nameText == "Resources") {
			characterCount = 16;
		}
      return characterCount;
    }
  }
});

var $grid = $('.grid').isotope({

});

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortValue });
});

// change btn-primary class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.btn-primary').removeClass('btn-primary');
    $( this ).addClass('btn-primary');
  });
});
