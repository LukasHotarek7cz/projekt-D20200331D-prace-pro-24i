




var globalImages = [];
var globalWebs = [];
var globalI1 = 0;
function fReadNext(){
	
	
	// AJAX
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			JSON.parse(this.responseText).items.forEach(function(e1){
				globalWebs.push({"href":e1.link, "title":e1.htmlTitle, "snippet":e1.htmlSnippet});
			});
		}
	};
	xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + GlobalSearchText + "&start=" + (globalI1*10+1) + "", true);
	xhttp.send();
	
	
	// AJAX
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			JSON.parse(this.responseText).items.forEach(function(e1){
				globalImages.push({"href":e1.image.contextLink, "img":e1.link});
			});
		}
	};
	xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + GlobalSearchText + "&start=" + (globalI1*10+1) + "&searchType=image", true);
	xhttp.send();
	
	
	globalI1++;
}













