define(['jquery','dateFormat','utils','timelineAnimate','listjs'], function($,dateFormat,utils,animate,List) {

var content_path = null;

// get info
$.getJSON( "data/info.json", function( data ) {
	var title = data.title;
	content_path = data.content_path;
	$('header').find('h1').append( title);
	$('title').append(title);

	load_content();
}).done(function() { })
.error(function(jqXHR, textStatus, errorThrown) {
	console.log("error " + textStatus);
	console.log("incoming Text " + jqXHR.responseText);
});


// get content
function load_content() {
	$.getJSON( content_path, function( data ) {
		var items = [];

		var tag_pattern = /\@(\w+)/;
		var tag_class = 'entry-tag';
	//	data.entries.sort(dynamicSort('-date'));
	data.entries.sort(datetimesort);

	$.each( data.entries, function( id, entry ) {

		var block = $('<li class="cd-timeline-block"></li>');
		var content = $('<div class="cd-timeline-content"></div>');
		date = new Date(entry.date);
		time = entry.time;
		var datetime = $('<span class="cd-date entry-date">' + date.format("d mmm yy") + " "+ time + '</span>');
		var body = $('<p class="entrybody">' + entry.body.replace(/\@(\w+)/g,'<span class="'+tag_class+'">@$1</span>') + '</p>');

		var title = entry.title.replace(/\@(\w+)/g,'<span class="'+tag_class+'">@$1</span>');
		var  dom_title = $('<h2 class="entrytitle">'+ title +'</h2>');

		var icon = $('	<div class="cd-timeline-img cd-entry"></div>');

		content.append(dom_title);
		content.append(body);
		content.append(datetime);
		block.append(icon);
		block.append(content);    
		block.appendTo( "#cd-timeline" );

		animate.init(block);
	});

})
.done(function(){
	var options = {
		valueNames: [ 'entrytitle', 'entrybody', 'entry-date' ]};
		var list = new List('main', options);
	});

}

/*
$(window).scroll(function() {
	if($(window).scrollTop() == $(document).height() - $(window).height()) {
           // ajax call get data from server and append to the div
           
       }
   });
*/
});

