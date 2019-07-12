console.log("scripts.js is linked");
var btn = document.querySelector('#VinResponse');
//todo make astring
var genericText = "somethingwitty";
btn.addEventListener('click', function (event) {
    var myDate = new Date();
    console.log(myDate.getDate(),number);
    // alert(myDate);
	console.log(event); // The event details
    console.log(event.target); // The clicked element
    console.log(genericText);
    document.querySelector('#outputField').append(genericText);
}, false);