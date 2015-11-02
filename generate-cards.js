$(document).ready( function() {

var farben = ["herz", "karo", "kreuz", "pik"];
var zahlen = ["ass", "koenig", "dame", "bube", "10", "9", "8", "7"];
var json = "[ ";
var i = 0;

farben.forEach(function(currentFarbe) {
	var farbe = currentFarbe;
	zahlen.forEach(function(currentZahl) {
		i++;
		json+='{<br />"bild":"img/s'+("00"+i).slice(-3)+'.jpg", <br />"farbe":"'+farbe+'", <br />"zahl":"'+currentZahl+'"<br />}, '
	})
})

json = json.slice(0, -2);
json += " ]";

$("body").html(json);

})