$(document).ready(main);

var contador = 1 ;

function main(){
	$('.menu_bar').click(function(){
		//$('#barra-superior').toggle();

		if(contador == 1){
			$('#barra-superior').animate({
				left:'0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('#barra-superior').animate({
				left:'-100%'
			});
		}
	});
};