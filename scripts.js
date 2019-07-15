
//functions below
//makes single digits into doubles
function readableTime(num1,num2,num3,num4) {
    h = num1++;
    var timeNumber;
    if(h>12){
        timeNumber = h - 12;
    }
    if (h < 10) {
        timeNumber = '0' + h;
    }
    else {
        timeNumber = h;
    }
    return (timeNumber);
};


var btn = document.querySelector('#VinResponse');
//todo make astring
var genericText;
btn.addEventListener('click', function (event) {
    var test = readableTime(13,1,1,1);
    alert(test);
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
    document.querySelector('#outputField').append(timeStamper);
}, false);