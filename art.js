function main() {
	$("body").hide();
	$("body").fadeIn(3000);
	$("img").mouseenter(function() {
    $(this).effect("bounce",{times:2},1000);
	});
	$("li").on("click",function() {
		$(this).hide();
		$(this).fadeTo("slow",1);
		
	});
	$("li").hover(function() {
		$(this).toggleClass("edit");
	});
	$("li").draggable();
}
$(document).ready(main);