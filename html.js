

/*
globalVar.searchText = "";
globalVar.webs = [(new globalVar.cImages)];
globalVar.images = [(new globalVar.cWebs)];
globalVar.i1 = 0;
globalVar.activNavigation = 0;

(new globalVar.cWebs).href
(new globalVar.cWebs).title
(new globalVar.cWebs).snippet
(new globalVar.cWebs).toString()
(new globalVar.cWebs).readAJAX()

(new globalVar.cImages).img
(new globalVar.cImages).toString()
(new globalVar.cImages).readAJAX()

globalVar.websPush(...)
globalVar.imagesPush(...)
globalVar.readNext()


*/


var globalVar = new function(){
	
	this.searchText = "";
	this.webs = [];
	this.images = [];
	this.i1 = 0;
	this.activNavigation = 1;
	this.navigation = [];
	
	
	this.cWebs = function(){
		
		this.href = "";
		this.title = "";
		this.snippet = "";
		
		this.toString = function (){
			var t1 = "";
			t1 += "<h3>";
			t1 += this.title;
			t1 += "</h3>";
			t1 += "<a href=\"";
			t1 += this.href;
			t1 += "\" >";
			t1 += this.href;
			t1 += "</a>";
			t1 += "<br>";
			t1 += this.snippet;
			return t1;
		}
		
		this.readAJAX = function(aIn1){
			this.href = aIn1.link;
			this.title = aIn1.htmlTitle;
			this.snippet = aIn1.htmlSnippet;
		}
		
	}
	
	this.cImages = function(){
		
		this.href = "";
		this.img = "";
		
		this.toString = function (){
			var t1 = "";
			t1 += "<a href=\"";
			t1 += this.href;
			t1 += "\" >";
			t1 += "<img src=\"";
			t1 += this.img;
			t1 += "\" />";
			t1 += "</a>";
			return t1;
		}
		
		this.readAJAX = function(aIn1){
			this.href = aIn1.image.contextLink;
			this.img = aIn1.link;
			//this.img = "PISTURE\\iconfinder_32_171485.png";
		}
		
	}
	
	this.newSearch = function(){
		this.searchText = "";
		this.webs = [];
		this.images = [];
		this.i1 = 0;
		this.activNavigation = 1;
	}
	
	this.websPush = function(aIn1){
		var R1 = new this.cWebs();
		R1.readAJAX(aIn1);
		this.webs.push(R1);
	}
	
	this.imagesPush = function(aIn1){
		var R1 = new this.cImages();
		R1.readAJAX(aIn1);
		this.images.push(R1);
	}
	
	this.readNext = function (){
		var thisGlobalVar = this;
		//document.querySelector("#log").innerHTML += "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + this.searchText + "&start=" + (this.i1+1) + "&searchType=image<br>";
		
		// AJAX
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				JSON.parse(this.responseText).items.forEach(function(e1){
					//globalWebs.push({"href":e1.link, "title":e1.htmlTitle, "snippet":e1.htmlSnippet});
					thisGlobalVar.websPush(e1);
				});
				thisGlobalVar.printWebs();
				//document.querySelector("#log").innerHTML += "<pre>"+fTiskArrayObj(JSON.parse(this.responseText))+"</pre>";
			}
		};
		xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + this.searchText + "&start=" + (this.i1+1) + "", true);
		xhttp.send();
		
		// AJAX
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				JSON.parse(this.responseText).items.forEach(function(e1){
					//globalImages.push({"href":e1.image.contextLink, "img":e1.link});
					thisGlobalVar.imagesPush(e1);
				});
				thisGlobalVar.printImages();
				//document.querySelector("#log").innerHTML += "<pre>"+fTiskArrayObj(JSON.parse(this.responseText))+"</pre>";
			}
		};
		xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + this.searchText + "&start=" + (this.i1+1) + "&searchType=image", true);
		xhttp.send();
		
		
		this.i1 += 10;
	}
	
	
	//???
	this.fillData = function(){
		if(this.images.length >= 99){return 1;}
		if(this.i1 >= 99){return 2;}
		var n1 =this.activNavigation*12;
		for(var i1 = this.images.length; i1<n1; i1+=10){this.readNext();}
	}	
	
	
	this.checkExistImage = function(){}
	this.fixImage = function(){}
	
	
	this.printWebs = function(aIn1){
		var t1 = "";
		t1 += "<table>";
		
		var i1 = (this.activNavigation-1)*4;
		var n2 = i1+4;
		if(this.webs.length <= n2){return 1;}// ??? < or <=
		while(i1<n2){
			t1 += "<tr><td>";
			t1 += this.webs[i1].toString();
			t1 += "<br>";
			t1 += "<br>";
			t1 += "</td></tr>";
			i1++;
			
		}
		
		t1 += "</table>";
		document.querySelector("#FoundText").innerHTML = t1;
	}
	
	
	this.printImages = function(aIn1){
		var t1 = "";
		t1 += "<table>";
		t1 += "<tr>";
		
		var i1 = (this.activNavigation-1)*12;
		var n2 = i1+12;
		if(this.images.length <= n2){return 1;}// ??? < or <=
		while(i1<n2){
			
			t1 += "<td>";
			t1 += this.images[i1].toString();
			t1 += "</td>";
			
			if(0 == (i1+1)%3){t1 += "</tr><tr>";}
			
			i1++;
		}
		
		t1 += "</tr>";
		t1 += "</table>";
		document.querySelector("#FoundImages").innerHTML = t1;
	}
	
	
	
	
};






window.onload = function(){
	
	globalVar.navigation = document.querySelectorAll(".navigation > *");
	
	globalVar.navigation.forEach(function(e1){ e1.addEventListener("click", function(aElement){
		
		if(globalVar.searchText == ""){return 1;};
		
		// read number
		globalVar.activNavigation = aElement.target.innerHTML;
		
		// hide first navigation number
		if(globalVar.activNavigation == 1){
			globalVar.navigation[0].style.display = "none";
			globalVar.navigation[3].style.display = "inline";
		}
		else{
			globalVar.navigation[0].style.display = "inline";
			globalVar.navigation[3].style.display = "none";
		}
		
		// increment
		globalVar.navigation[0].innerHTML = globalVar.activNavigation*1-1;
		globalVar.navigation[1].innerHTML = globalVar.activNavigation;
		globalVar.navigation[2].innerHTML = globalVar.activNavigation*1+1;
		globalVar.navigation[3].innerHTML = globalVar.activNavigation*1+2;
		
		// download new data
		globalVar.fillData();
		
		// build and print web
		//globalVar.printWebs();
		//globalVar.printImages();
		
		//document.querySelector("#log").innerHTML += globalVar.activNavigation; // DEBUG
	} ) });
	
	
	
	// Event BTNs Search
	document.querySelectorAll("button.BTNSearch").forEach(function(e1){
		e1.addEventListener("click", function(){
			
			globalVar.newSearch();
			
			globalVar.searchText = document.querySelector("#TextSearch").value;
			
			// download new data
			globalVar.fillData();
			
			// build and print web
			globalVar.printWebs();
			globalVar.printImages();
			
		});
	});
	
	
	
	
	
	
	
}







