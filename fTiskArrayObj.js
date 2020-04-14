
//////////////////////////////////////////////////////////////////////////////// BR
var fBR2 = function(aN1){var t1 = ""; while(aN1>0){t1 += "<br>";aN1--;} return t1;};
var fBR = function(aN1){ window.document.write(fBR2(aN1)); };
//////////////////////////////////////////////////////////////////////////////// TAB
var fTAB = function(aN1){var t1 = ""; while(aN1>0){t1 += "\t";aN1--;} return t1;};


function fTiskArrayObj(aIn2){ // JSON to STRING se zarovnaim
	var f1 = function(aIn1, aUroven1,obj){
		var t1 = "";
		var i1 = 0;
		var obj2 = false;
		for(var ei1 in aIn1){
			if(i1 >= aIn1.length){break;}
			var e1 = aIn1[ei1];
			t1+="<br>"+fTAB(aUroven1);
			if(i1 != 0){t1 += ",";}
			if(obj){t1 += "\""+ei1+"\":";}
			switch(typeof(e1)){
				case "number":t1+=""+e1+"";break;
				case "string":t1+="\""+e1+"\"";break;
				case "object":
					obj2 = (e1 == "[object Object]");
					if(obj2){t1 += "{";}
					else{t1 += "[";}
					
					var tt1 = f1(e1,aUroven1+1,obj2);
					if(tt1.length < 100){tt1 = tt1.replace(/[\t\n]|<br>/igm,"");}
					else{tt1 += "<br>"+fTAB(aUroven1);}
					t1 += tt1;
					
					if(obj2){t1 += "}";}
					else{t1 += "]";}
				break;
			}
		i1++;
		}
		return t1;
	}
	return f1([aIn2], 0, false);
}
