
function showMembers(jsonObj) {
    var items = jsonObj['appMembers'];

    for (var index = 0; index < items.length; index++) {

        var target = document.getElementById("result");
        var contain = document.createElement('div');
        var pic = document.createElement('div');
        var info = document.createElement('div');
        var text = document.createElement('p');

   

        text.textContent = 'Bio: ' + items[index].bio + "\r\n";
        text.textContent += 'Location: ' + items[index].loc;

        contain.classList.add("result");
        pic.classList.add("pic" + [index]);
        info.classList.add("info");

        target.appendChild(contain);
        contain.appendChild(pic);
        contain.appendChild(info);
        info.appendChild(text);
    }

}



selector = document.getElementById("options").childNodes;

for (index = 0; index < selector.length; index++) {
    selector[index].addEventListener("click", function(event) {
        if (selector.textContent == "Flinders") {

        console.log("Flinders Selected")
        }
    })
}

var requestURL = "db.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {

    var members = request.response;
    showMembers(members);

}