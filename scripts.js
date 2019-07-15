// function readableTime(i) {
//     if(i<10) 
// }






console.log("scripts.js is linked");
var btn = document.querySelector('#VinResponse');
//todo make astring
var genericText;
btn.addEventListener('click', function (event) {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();
    var timeStamper = date + "/" +(month) + "/" + year + " " + "this should be hour =>" + hour ;
    // console.log(myDate.getDate(),number);
    // alert(myDate);
	console.log(event); // The event details
    console.log(event.target); // The clicked element
    console.log(genericText);
    document.querySelector('#outputField').append(timeStamper);
}, false);