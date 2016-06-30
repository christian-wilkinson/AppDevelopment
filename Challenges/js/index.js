var myData = {
    items: [
        {
            name: "Names",
            place: "Places",
            thing: "Things"
        },
        {
            name: "James",
            place: "Paris",
            thing: "Books"
        },
        {
            name: "Laura",
            place: "Mexico",
            thing: "Chairs"
        },
        {
            name: "Sam",
            place: "Italy",
            thing: "Paper"
        }
        ]
};

window.onload = function () {
    var output = "";
    output = "<ul class='table1'>";
    for (var i = 0; i < myData.items.length; i++) {
        output += "<li> <span class='cellName'>" + myData.items[i].name + "</span>";
        output += "<span class='cellPlace'>" + myData.items[i].place + "</span>";
        output += "<span class='cellThing'>" + myData.items[i].thing + "</span>";
        output += "</li>";
    }
    output += "</ul>"
    document.getElementById("demoTable").innerHTML = output;
};

var listBody = "ul";
for (var i = 1; i < myData.items.length; i++) {
    row = "<li class='mainList'><ul>";
    for (var field in myData.items[0]) {
        row += "<ul class = 'subList'>" +myData.items[0]
        [field] + ':' +myData.items[i][field] + "</li>;
    }
    row += "</ul></li>"
    listBody += row;
}