var table = document.getElementById("calendar");
var htmlstring = "";
var weekdays = ["S","M","T","W","T","F","S"];
//printing out week days
for (var i = 0; i < weekdays.length; i++) {
	var thtag ="<th>" + weekdays[i] + "</th>";
	htmlstring += thtag;
}
//printing tr tag 5 times
for (var i = 1; i <= 5; i++) {
	//open tr tag
	htmlstring = htmlstring + "<tr>";
	for (var i = 1; i <= 31; i++) {
		var days = "<td>" + i + "</td>";
		//print 1 to 31 with td tag
		htmlstring += days;
		//if i divide by 7 and remainder is 0
		if (i % 7 == 0 || i == 31) {
			//close tr tag
			htmlstring += "</tr>";
			//open tr tag
			htmlstring += "<tr>";
		}
	};
	//close tr tag
	htmlstring += "</tr>";
};
//inserts a text as HTML, into a specified position.
table.insertAdjacentHTML('beforeend', htmlstring);


















