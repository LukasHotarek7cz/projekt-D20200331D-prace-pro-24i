

var GlobalSearchText = "";


window.onload = function(){
var t1 = "START<br>";


/*
window.document.getElementById("BTNSearch").addEventListener("click",function(){
	GlobalSearchText = window.document.getElementById("TextSearch").value;
	document.querySelector("#log").innerHTML += GlobalSearchText; // DEBUG
});
*/

// Event BTNs Search
document.querySelectorAll("button.Search").forEach(function(e1){
	e1.addEventListener("click", function(){
		
		// Read Search text
		GlobalSearchText = window.document.getElementById("TextSearch").value;
		//document.querySelector("#log").innerHTML += GlobalSearchText; // DEBUG
		
		// AJAX
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var t1 = "";
				
				t1 += "<table>";
				
				// DEBUG
				R1 = this.responseText;
				R2 = JSON.parse(this.responseText);
				
				// JSON parse
				var responseJSON = JSON.parse(this.responseText);
				
				// build HTML Find Text
				responseJSON.items.forEach(function(e1){
					t1 += "<tr><td>";
					t1 += "<a href=\"";
					t1 += e1.link;
					t1 += "\" >";
					t1 += e1.htmlTitle;
					t1 += "</a><br>";
					t1 += e1.htmlSnippet;
					t1 += "<br>";
					t1 += "";
					t1 += "</td></tr>";
				});
				
				// write to HTML
				t1 += "</table>";
				document.querySelector("#FoundText").innerHTML = t1;
			}
		};
		// AJAX
		xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + GlobalSearchText + "", true);
		xhttp.send();
		
		
	});
});










































// DEBUG
document.querySelector("#log").innerHTML = t1;
};