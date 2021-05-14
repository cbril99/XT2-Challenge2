//Huidige tijd weergeven
function klok() {
	var today = new Date();
	var seconds = today.getSeconds();
	var minutes = today.getMinutes();
	var hour = today.getHours();

	document.getElementById('clock').innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	setInterval(klok, 1000);

	if (hour >= 6 && hour <= 11) {
		document.getElementById('clock').classList.remove('nacht');
		document.getElementById('clock').classList.add('ochtend');
	} else if (hour >= 12 && hour <= 18) {
		document.getElementById('clock').classList.remove('ochtend');
		document.getElementById('clock').classList.add('dag');
	} else if (hour >= 19 && hour <= 23) {
		document.getElementById('clock').classList.remove('dag');
		document.getElementById('clock').classList.add('avond');
	} else if (hour >= 00 && hour <= 5){
		document.getElementById('clock').classList.remove('avond');
		document.getElementById('clock').classList.add('nacht');
	}

}

//Foto veranderen aan de hand van het tijdstip
function changeImg() {

	var day = new Date();
 	var today =parseInt(day.getDay());
 	var hour = parseInt(day.getHours());
 	var minutes = parseInt(day.getMinutes());
	var imgElem=document.getElementById('foto1');

			if (hour >= 6 && hour <= 11){
				imgElem.src='foto1.jpg';
			} else if (hour >= 12 && hour <= 18){
				 imgElem.src='foto2.jpg';
			} else if (hour >= 19 && hour <= 23){
				imgElem.src='foto3.jpg';
			} else if(hour >= 00 && hour <= 5){
				imgElem.src='foto4.jpg';
			}
}

changeImg();

//Huidige datum weergeven 
function displayDate() {
	var today = new Date();
	var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
	document.getElementById('datum').innerHTML=date;
}

displayDate();
