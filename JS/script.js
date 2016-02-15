/*$('#button').click(function() {
	alert("We are not yet taking sign ups");
});*/

$('button').click(function(){
	swal("Oops!", "We are not yet taking sign ups.", "error");
});

$('#button').click(function(){
      $('#no_sign_ups').show();
      $('#button').hide();
  });

$('#learn_more').click(function(){
	event.preventDefault();
    $('#learn_more').hide();
    $('#more').slideDown();
});

$('#readmore1').click(function(){
	event.preventDefault();
	$('.post1_para2').show();
	$('#readmore1').hide();
	$('#readless1').show();
});

$('#readmore2').click(function(){
	event.preventDefault();
	$('.post2_para2').show();
	$('#readmore2').hide();
	$('#readless2').show();
});

$('#readless1').click(function(){
	event.preventDefault();
	$('.post1_para2').hide();
	$('#readless1').hide();
	$('#readmore1').show();
});

$('#readless2').click(function(){
	event.preventDefault();
	$('.post2_para2').hide();
	$('#readless2').hide();
	$('#readmore2').show();
});