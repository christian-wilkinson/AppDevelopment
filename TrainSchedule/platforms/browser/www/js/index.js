window.onload = function () {
    document.addEventListener("deviceready", init, false);

    init();
    getSchedule();

};

function init() {


};

function getSchedule() {
    $.ajax({
        type: "GET",
        url: "http://www3.septa.org/hackathon/Arrivals/90404/10",
        dataType: "text",
        success: function (result) {
            showSchedule(result);
        }
    });
};

function showSchedule(result) {
    var data = jQuery.parseJSON(result);

    var arr = data[Object.keys(data)];
    var northbound = arr[0].Northbound;
    var southbound = arr[1].Southbound;

    var output = "Northbound<br><div class=table>";
    for (i = 0; i < northbound.length; i++) {
        output += "<span class=cell>" + northbound[i].train_id + "</span>" +
        "<span class=cell>" + northbound[i].depart_time + "</span>" + "<span class=cell>" + northbound[i].destination + "</span><br/>";
    }
   output += "Southbound<br><div class=table>"
   for (i = 0; i < southbound.length; i++) {
        output += "<span class=cell>" + southbound[i].train_id + "</span>" +
        "<span class=cell>" + southbound[i].depart_time + "</span>" + "<span class=cell>" + southbound[i].destination + "</span><br/>";
   }

    document.getElementById('trainSchedule').innerHTML = output;
}