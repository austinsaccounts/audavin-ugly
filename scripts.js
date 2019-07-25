var btn = document.querySelector('#VinResponse');

//functions below
//todo make astring


var genericText;
btn.addEventListener('click', function (event) {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() +1; //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();
    var timeStamper = " " +  month +  "/" + date + "/" + year + " " + "this is line 30";
    document.querySelector('#outputField').append(timeStamper);
}, false);