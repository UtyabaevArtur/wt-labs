$(function(){
		$( "#accordion" ).accordion({
		collapsible: true
		}); 
	});

$(function(){
		var availableTags = [
		"Java",
		"JavaScript",
		"PHP",
		"C++",
		"C#",
		"Perl",
		"Python",
		"Ruby",
		"COBOL",
		"Basic"
		];

		$( "#search" ).autocomplete({
		source: availableTags
		}); 
	});

$(function(){
		$( "#date" ).datepicker({
	dateFormat: "dd.mm.yy"
	});
	});

$(function(){
$('#dialog').dialog({
	autoOpen: false,
	buttons:{
				Подтвердить: function (event, ui) {
				$( "#succ" ).dialog("open");
				$( "#dialog" ).dialog("close")
				$(this).dialog('close');
				},
			Закрыть: function() {
			$(this).dialog('close');
	}
},
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});
$('#open').button().click(function(){
$('#dialog').dialog('open');
});
$('#succ').dialog({
	autoOpen: false,
	show: {effect: "slideDown", duration: 800},
	hide: {effect: "slideUp", duration: 800},
});
}); 

$(function(){
$("#select").selectmenu();
});

$(function(){
$('#menu').menu();
}); 

$(function(){
$("#slider").slider({
	range: "min",
	value: 0,
	min: 25000,
	max: 250000,
	step: 5000,
	slide: function(event, ui) {
		$("#weight").val($("#slider").slider("option", "value"));
	},
	change: function(event, ui) { 
		$("#weight").val($("#slider").slider("option", "value"));
	}
});
});

$(function(){
$("td.td_top a").tooltip();
$('#tabs').tabs({ 
	show: { effect: "fade",duration: 300 }, 
	hide: { effect: "fade",duration: 300 },
});
}); 

$(function(){
$('#sort').sortable(); 
});

$(function(){
$('.draggable').draggable({
axis: "x"
});
}); 
