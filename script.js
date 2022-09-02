var L1=label("label","for","fn","FirstName");
var br1=linebreaker("br");
var L2=label("label","for","mn","MiddleName");
var br2=linebreaker("br");
var L3=label("label","for","ln","lastName");
var br3=linebreaker("br");
var L4=label("label","for","email","Email");
var br4=linebreaker("br");
var L5=label("label","for","ph","contact");
var br5=linebreaker("br");
var I1=inputelement("input","type","text","id","fn");
var br6=linebreaker("br");
var I2=inputelement("input","type","text","id","mn");
var br7=linebreaker("br");
var I3=inputelement("input","type","text","id","ln");
var br8=linebreaker("br");
var I4=inputelement("input","type","email","id","email");
var br9=linebreaker("br");
var I5=inputelement("input","type","contact","id","ph");
var br10=linebreaker("br");
document.body.append(L1,br1,I1,br6,L2,br2,I2,br7,L3,br3,I3,br8,L4,br4,I4,br9,L5,br5,I5,br10);


function label(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
 ele.setAttribute(attrname,attrvalue);
 ele.innerHTML=content;
 return ele;
 
}
function linebreaker(element){
    var ele=document.createElement(element);
    return ele;
    }
    function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele;
        
        }    