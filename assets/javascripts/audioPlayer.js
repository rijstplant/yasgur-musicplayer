var isPlaying = false;
var currentTime;
var lenght = 0;

function audioPlayer() {
	"use strict";
	var end = isEnd();
	if (end) {
		myAudio.currentTime = 0;
		myAudio.play();
	} else {
		if (isPlaying) {
			myAudio.pause();
		} else {
			myAudio.play();
		}
	}
	var isNew = lenghtIsDifferent;
	if (isNew) {
		lenght = myAudio.duration;
		mySlider.max = lenght;
	}
}

var myAudio = document.getElementById("audio");
var mySlider = document.getElementById("slider");
var btn = $(".button");
myAudio.onplaying = function() {
	"use strict";
  	isPlaying = true;
	checkForEnd();
};
myAudio.onpause = function() {
	"use strict";
  	isPlaying = false;
	btn.toggleClass("paused");
	checkForEnd();
};
myAudio.ontimeupdate = function() {
	"use strict";
	currentTime = myAudio.currentTime;
	mySlider.value = currentTime;
	checkForEnd();
};
myAudio.onplay = function() {
	"use strict";
	btn.toggleClass("paused");
};

function setVolume(volumeValue) {
	"use strict";
	var maxVolume = 100;
	myAudio.volume = volumeValue / maxVolume;
}
function setTime(timeValue) {
	"use strict";
	myAudio.currentTime = timeValue;
	checkForEnd();
}

var lenghtIsDifferent = function() {
	"use strict";
	var newLenght = myAudio.duration;
	var different = false;
	if (newLenght === lenght) {
		different = false;
	}
	else {
		different = true;
	}
	return different;
};
var isEnd = function() {
	"use strict";
	var newTime = myAudio.currentTime;
	var end = false;
	
	if (newTime === lenght) {
		end = true;
	}
	
	return end;
};

function checkForEnd() {
	"use strict";
	currentTime = myAudio.currentTime;
	var end = isEnd();
	if (end) {
		btn.toggleClass("paused");
	}
}
function initializeOnLoad() {
	"use strict";
	lenght = myAudio.duration;
	mySlider.max = lenght;
}

var div = $(".circle");
div.hover(function() {
	"use strict";
	btn.toggleClass("hovereffect");
	return false;
});