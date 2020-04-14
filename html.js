

var GlobalSearchText = "";
var t2 = "";


window.onload = function(){
var t1 = "START<br>";


/*
window.document.getElementById("BTNSearch").addEventListener("click",function(){
	GlobalSearchText = window.document.getElementById("TextSearch").value;
	document.querySelector("#log").innerHTML += GlobalSearchText; // DEBUG
});
*/

// Event BTNs Search
document.querySelectorAll("button.BTNSearch").forEach(function(e1){
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
				
				// JSON parse
				var responseJSON = JSON.parse(this.responseText);
				
				// DEBUG
				R1 = this.responseText;
				R2 = responseJSON;
				
				// build HTML Find Text
				responseJSON.items.forEach(function(e1){
					
					t1 += "<tr><td>";
					t1 += "<a href=\"";
					t1 += e1.link;
					t1 += "\" >";
					t1 += e1.htmlTitle;
					t1 += "</a>";
					t1 += "<br>";
					t1 += e1.htmlSnippet;
					t1 += "<br>";
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
		
		
		
		
		// AJAX
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				t2 = "";
				t2 += "<table>";
				
				// JSON parse
				var responseJSON = JSON.parse(this.responseText);
				
				// DEBUG
				R1 = this.responseText;
				R2 = responseJSON;
				
				// build HTML Find Text
				var i1 = 1;
				t2 += "<tr>";
				responseJSON.items.forEach(function(e1){
					
					
					t2 += "<td style=\"border:5px solid #ffff00;\" >";
					t2 += i1;
					t2 += "<a href=\"";
					t2 += e1.image.contextLink;
					t2 += "\" >";
					t2 += "<img src=\"";
					t2 += e1.link;
					t2 += "\" />";
					t2 += "</a>";
					t2 += "</td>";
					
					if(i1 > 2 ){t2 += "</tr><tr>"; i1=0;}
					
					i1++;
				});
				t2 += "</tr>";
				
				// DEBUG
				//document.querySelector("#log").innerHTML = "<pre>" + fTiskArrayObj(responseJSON) + "</pre>";
				
		
		
		
		// AJAX
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				
				// JSON parse
				var responseJSON = JSON.parse(this.responseText);
				
				// DEBUG
				R1 = this.responseText;
				R2 = responseJSON;
				
				// build HTML Find Text
				var i1 = 1;
				t2 += "<tr>";
				responseJSON.items.forEach(function(e1){
					
					
					t2 += "<td style=\"border:5px solid #ffff00;\" >";
					t2 += i1;
					t2 += "<a href=\"";
					t2 += e1.image.contextLink;
					t2 += "\" >";
					t2 += "<img src=\"";
					t2 += e1.link;
					t2 += "\" />";
					t2 += "</a>";
					t2 += "</td>";
					
					if(i1 > 2 ){t2 += "</tr><tr>"; i1=0;}
					
					i1++;
				});
				t2 += "</tr>";
				
				// DEBUG
				//document.querySelector("#log").innerHTML = "<pre>" + fTiskArrayObj(responseJSON) + "</pre>";
				
				// write to HTML
				t2 += "</table>";
				document.querySelector("#FoundImages").innerHTML = t2;
				
			}
		};
		// AJAX
		xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + GlobalSearchText + "&searchType=image&start=10&num=3", true);
		xhttp.send();
		
		
				
			}
		};
		// AJAX
		xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + GlobalSearchText + "&searchType=image&num=9", true);
		xhttp.send();
		
	});
});



// DEBUG
document.querySelector("#log").innerHTML = t1;
};






