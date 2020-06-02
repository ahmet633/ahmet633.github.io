var c3 = new Audio("wav/C3.mp3"); // a
var db3 = new Audio("wav/Db3.mp3") // w
var d3 = new Audio("wav/D3.mp3"); // s
var eb3 = new Audio("wav/Eb3.mp3"); // e
var e3 = new Audio("wav/E3.mp3"); // d
var f3 = new Audio("wav/F3.mp3"); // f
var gb3 = new Audio("wav/Gb3.mp3"); // t
var g3 = new Audio("wav/G3.mp3"); // g
var ab3 = new Audio("wav/Ab3.mp3"); // y
var a3 = new Audio("wav/A3.mp3"); // h
var bb3 = new Audio("wav/Bb3.mp3") // u
var b3 = new Audio("wav/B3.mp3"); // j
var c4 = new Audio("wav/C4.mp3"); // k
var db4 = new Audio("wav/Db4.mp3"); // o
var d4 = new Audio("wav/D4.mp3"); // l

const pianoKeys = document.querySelectorAll('.piano-key');

for(i = 0; i < pianoKeys.length; i++){
	var key = pianoKeys[i];
	key.addEventListener('transitionend', function(e){
		if(e.propertyName !== 'border-left-color') return;
		this.classList.remove('playing');
	});
}


document.addEventListener("keydown",function (e){
	if(e.key == "a"){
		document.querySelector('#c3').classList.add('playing');
		c3.currentTime = 0.5;
		c3.play();
	} else if(e.key =="s"){
		document.querySelector('#d3').classList.add('playing');
		d3.currentTime = 0.5;
		d3.play();
	} else if(e.key == "d"){
		document.querySelector('#e3').classList.add('playing');
		e3.currentTime = 0.7;
		e3.play();
	} else if(e.key == "f"){
		document.querySelector('#f3').classList.add('playing');
		f3.currentTime = 0.9;
		f3.play();
	} else if(e.key == "g"){
		document.querySelector('#g3').classList.add('playing');
		g3.currentTime = 0.5;
		g3.play();
	} else if(e.key == "h"){
		document.querySelector('#a3').classList.add('playing');
		a3.currentTime = 0.7;
		a3.play();
	} else if(e.key == "j"){
		document.querySelector('#b3').classList.add('playing');
		b3.currentTime = 0.5;
		b3.play();
	} else if(e.key == "k"){
		document.querySelector('#c4').classList.add('playing');
		c4.currentTime = 0.5;
		c4.play();
	} else if(e.key == "l"){
		document.querySelector('#d4').classList.add('playing');
		d4.currentTime = 0.65;
		d4.play();
	} else if(e.key == "w"){
		document.querySelector('#db3').classList.add('playing');
		db3.currentTime = 0.6;
		db3.play();
	} else if(e.key == "e"){
		document.querySelector('#eb3').classList.add('playing');
		eb3.currentTime = 0.4;
		eb3.play();
	} else if(e.key == "t"){
		document.querySelector('#gb3').classList.add('playing');
		gb3.currentTime = 0.5;
		gb3.play();
	} else if(e.key == "y"){
		document.querySelector('#ab3').classList.add('playing');
		ab3.currentTime = 0.8;
		ab3.play();
	} else if(e.key == "u"){
		document.querySelector('#bb3').classList.add('playing');
		bb3.currentTime = 0.3;
		bb3.play();
	} else if(e.key == "o"){
		document.querySelector('#db4').classList.add('playing');
		db4.currentTime = 0.5;
		db4.play();
	} else {
		console.log(e.key + " is not a piano key");
	}
});