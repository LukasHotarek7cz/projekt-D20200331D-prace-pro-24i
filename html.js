
/*
globalVar.webs = [(new globalVar.cImages)];
globalVar.images = [(new globalVar.cWebs)];
globalVar.i1 = 0;

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
	
	this.webs = [];
	this.images = [];
	this.i1 = 0;
	
	this.cWebs = function(){
		
		this.href = "";
		this.title = "";
		this.snippet = "";
		
		this.toString = function (){
			var t1 = "";
			t1 += "<a href=\"";
			t1 += this.href;
			t1 += "\" >";
			t1 += this.title;
			t1 += "</a><br>";
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
			t1 += i1;
			t1 += "<a href=\"";
			t1 += this.img;
			t1 += "\" >";
			t1 += "<img src=\"";
			t1 += this.href;
			t1 += "\" />";
			t1 += "</a>";
			return t1;
		}
		
		this.readAJAX = function(aIn1){
			this.href = aIn1.image.contextLink;
			this.img = aIn1.link;
		}
		
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
		
		// AJAX
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				JSON.parse(this.responseText).items.forEach(function(e1){
					//globalWebs.push({"href":e1.link, "title":e1.htmlTitle, "snippet":e1.htmlSnippet});
					thisGlobalVar.websPush(e1);
					
				});
			}
		};
		xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + GlobalSearchText + "&start=" + (this.i1*10+1) + "", true);
		xhttp.send();
		
		// AJAX
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				JSON.parse(this.responseText).items.forEach(function(e1){
					//globalImages.push({"href":e1.image.contextLink, "img":e1.link});
					thisGlobalVar.imagesPush(e1);
				});
			}
		};
		xhttp.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GlobalConfig.APIKey + "&cx=" + GlobalConfig.cx + "&q=" + GlobalSearchText + "&start=" + (this.i1*10+1) + "&searchType=image", true);
		xhttp.send();
		
		this.i1++;
	}
	
	
	this.fill = function(aIn1){
		for(var i1 = this.images.length; i1>aIn1; i1+=10){this.readNext();}
	}	
	
	
	this.checkExistImage = function(){}
	this.fixImage = function(){}
	
	
	this.toStringImages = function(aIn1){
		var t1 = "";
		
		
		return t1;
	}
	
	
	this.toStringWebs = function(aIn1){
		var t1 = "";
		
		return t1;
	}
	
	
};









