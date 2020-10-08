
var price = 5;
var quantity = 5;
var totalPrice = price * quantity;

const products = {
					"Pizza": 40,
					"Naan" : 10,
					"Sourdough" : 20,
					"Foccacia" : 80,
					"iPhone x" :1000 
}

for (const [key, value] of Object.entries(products)) {
	var mylist2 = "<ul class='list-group'><li class='list-group-item'>" 
				+ key 
				+ "<span class='badge big badge-pill badge-secondary float-right price'>฿" 
				+ value
				+ "</span></li></ul>";
	document.getElementById("product-list").innerHTML += mylist2;
}

//make letter capitalize
function capitalizeFirstLetter(string) {
    customerName = string.charAt(0).toUpperCase() + string.slice(1);
}

//change name 
var customerName = prompt("Enter your name:");
capitalizeFirstLetter(customerName);

document.getElementById("name").innerHTML = customerName;

var date = new Date();
var hours = date.getHours();

if(hours > 5 || hours < 12) { //from 5am to 12pm
	document.getElementById("time").innerHTML = "Good morning, ";
}
else if(hours > 12 || hours < 17 ){ //from 13 to 17
	document.getElementById("time").innerHTML = "Good afternoon, ";
}
else if(hours > 18 || hours < 24){ // from 17 to 24
	document.getElementById("time").innerHTML = "Good evening, ";;
} 
else if(hours > 1 || hours < 5){ //avoiding miscaluculation
	document.getElementById("time").innerHTML = "Good evening, ";
} else{

}

// total price 
document.getElementById("price").innerHTML = totalPrice;
