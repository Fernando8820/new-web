$(document).ready(function(){
	//alert("Hola mundo");
	$("#modalFacturacion").on("hidden.bs.modal", function () {
		$('html, body').animate({scrollTop: $("#service").offset().top}, 1000);
	});


	$("#modalTrafico").on("hidden.bs.modal", function () {
		$('html, body').animate({scrollTop: $("#service").offset().top}, 1000);
	});



	$("#modalAdministracion").on("hidden.bs.modal", function () {
		$('html, body').animate({scrollTop: $("#service").offset().top}, 1000);
	});


	$("#modalFinanzas").on("hidden.bs.modal", function () {
		$('html, body').animate({scrollTop: $("#service").offset().top}, 1000);
	});	

	$("#modalOperaciones").on("hidden.bs.modal", function () {
		$('html, body').animate({scrollTop: $("#service2").offset().top}, 1000);
	});	

	$("#modalClientes").on("hidden.bs.modal", function(){
		$('html, body').animate({scrollTop: $("#service2").offset().top}, 1000);
	});

	$("#modalMoviles").on("hidden.bs.modal",function(){
		$('html, body').animate({scrollTop: $("#service").offset().top}, 1000);
	});


	$("#modalHandhel").on("hidden.bs.modal",function(){
		$('html, body').animate({scrollTop: $("#service").offset().top}, 1000);
	})


});