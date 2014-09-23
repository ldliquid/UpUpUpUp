$('.upupupup').click(function(){
	 $(this).html(function(index, html) {
		 var contenu = $(this).html();
		 var newDiv = "<div class='fly'></div>";
		 $('body').prepend(newDiv);
		 $(".fly").text(contenu);
				 
		  var nbr = contenu.length,
				 space = "&nbsp;",
		 		 blank = Array(nbr+1).join(space);
	 		return html.replace(contenu,blank);
	 });
	var offset = $( this ).offset();
	var coordx = offset.left;
	var coordy = offset.top;
	
	var style = { "display": "block", "left": coordx + "px", "top": coordy + "px" };
	$(".fly").css(style);
	
		setTimeout(function() {
		$(".fly").addClass('high');
			console.log("foo")
		}, 100);
})