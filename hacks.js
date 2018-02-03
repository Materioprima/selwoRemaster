AOS.init();

var slider= ['img/s1.jpeg', 'img/s2.jpeg', 'img/s3.jpeg', 'img/s4.jpeg', 'img/s5.jpg'];
var cont=0;

$('.sliderder').click(function(){
	cont++;
	if(cont>4){
		cont=0;
	}
	console.log(cont);
	$('.fotoslider').attr('src',slider[cont]);
});

$('.sliderizq').click(function(){
	cont--;
	if(cont<0){
		cont=4;
	}
	console.log(cont);
	$('.fotoslider').attr('src',slider[cont]);
});