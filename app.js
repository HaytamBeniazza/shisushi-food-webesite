var txt=[];
function PlatSelectioner() {
    var picture = document.getElementById('select').value;

    if (picture == 0) {
        document.getElementById('plat').style.display = "flex";
        document.getElementById('obento').style.display = "flex";
        document.getElementById('salade').style.display = "flex";
        document.getElementById('sushi').style.display = "flex";
    } 
    if (picture == 1) {
        document.getElementById('plat').style.display = "none";
        document.getElementById('obento').style.display = "none";
        document.getElementById('salade').style.display = "none";
        document.getElementById('sushi').style.display = "flex";
    } 
    if (picture == 2) {
        document.getElementById('plat').style.display = "none";
        document.getElementById('obento').style.display = "flex";
        document.getElementById('salade').style.display = "none";
        document.getElementById('sushi').style.display = "none";
    }
    if (picture == 3) {
        document.getElementById('plat').style.display = "flex";
        document.getElementById('obento').style.display = "none";
        document.getElementById('salade').style.display = "none";
        document.getElementById('sushi').style.display = "none";
    }
    if (picture == 4) {
        document.getElementById('plat').style.display = "none";
        document.getElementById('obento').style.display = "none";
        document.getElementById('salade').style.display = "flex";
        document.getElementById('sushi').style.display = "none";
    }

}
//panier
var panier= document.getElementById("panier-elements1");
var sushi11 = 1, sushi22 = 1, sushi33 = 1, salade11 = 1, salade22 = 1, salade33 = 1, obento11 = 1, obento22 = 1, obento33 = 1, plat11 = 1, plat22 = 1, plat33 = 1, totalP = 0;

function sushi1(){
    var su = document.querySelectorAll("#sushi1");
    for(var j = 0; j < su.length; j++){
        su[j].style.display = "none";
    }

    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "sushi1");
    text2.setAttribute("id", "sushi1");
    text3.setAttribute("id", "sushi1");

    text1.innerText = "sushi1";
    text2.innerText = sushi11;
    text3.innerText = "15$";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 15;  
    
    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);

    sushi11++;
    document.getElementById('ttt').innerHTML=totalP;
}
function sushi2(){
    var su = document.querySelectorAll("#sushi2");
    for(var j = 0; j < su.length; j++){
        su[j].style.display = "none";
    }

    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "sushi2");
    text2.setAttribute("id", "sushi2");
    text3.setAttribute("id", "sushi2");

    text1.innerText = "sushi2";
    text2.innerText = sushi22;
    text3.innerText = "11$";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 11;  
    
    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);

    sushi22++;
    document.getElementById('ttt').innerHTML=totalP;
}
function sushi3(){
    var su = document.querySelectorAll("#sushi3");
    for(var j = 0; j < su.length; j++){
        su[j].style.display = "none";
    }

    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "sushi3");
    text2.setAttribute("id", "sushi3");
    text3.setAttribute("id", "sushi3");

    text1.innerText = "sushi3";
    text2.innerText = sushi33;
    text3.innerText = "9$";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 9;  
    
    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);

    sushi33++;
    document.getElementById('ttt').innerHTML=totalP;
}
function obento1(){
    var ob = document.querySelectorAll("#obento1");
    for(var j = 0; j < ob.length; j++){
        ob[j].style.display = "none";
    }

    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "obento1");
    text2.setAttribute("id", "obento1");
    text3.setAttribute("id", "obento1");

    text1.innerText = "obento1";
    text2.innerText = obento11;
    text3.innerText = "5$";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 5;  
    
    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);

    obento11++;
    document.getElementById('ttt').innerHTML=totalP;
}
function obento2(){
    var ob = document.querySelectorAll("#obento2");
    for(var j = 0; j < ob.length; j++){
        ob[j].style.display = "none";
    }

    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "obento2");
    text2.setAttribute("id", "obento2");
    text3.setAttribute("id", "obento2");

    text1.innerText = "obento2";
    text2.innerText = obento22;
    text3.innerText = "3$";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 3;  
    
    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);

    obento22++;
    document.getElementById('ttt').innerHTML=totalP;
}
function obento3(){
    var ob = document.querySelectorAll("#obento3");
    for(var j = 0; j < ob.length; j++){
        ob[j].style.display = "none";
    }

    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "obento3");
    text2.setAttribute("id", "obento3");
    text3.setAttribute("id", "obento3");

    text1.innerText = "obento3";
    text2.innerText = obento33;
    text3.innerText = "12$";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 12;  
    
    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);

    obento33++;
    document.getElementById('ttt').innerHTML=totalP;
}
function plat1(){
    var pla = document.querySelectorAll("#plat1");
    for(var j = 0; j < pla.length; j++){
        pla[j].style.display = "none";
    }

    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "plat1");
    text2.setAttribute("id", "plat1");
    text3.setAttribute("id", "plat1");

    text1.innerText = "plat1";
    text2.innerText = plat11;
    text3.innerText = "8$";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 8;  
    
    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);

    plat11++;
    document.getElementById('ttt').innerHTML=totalP;
}
function plat2(){
    var pla = document.querySelectorAll("#plat2");
    for(var j = 0; j < pla.length; j++){
        pla[j].style.display = "none";
    }

    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "plat2");
    text2.setAttribute("id", "plat2");
    text3.setAttribute("id", "plat2");

    text1.innerText = "plat2";
    text2.innerText = plat22;
    text3.innerText = "13$";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 13;  
    
    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);

    plat22++;
    document.getElementById('ttt').innerHTML=totalP;
}
function plat3(){
    var pla = document.querySelectorAll("#plat3");
    for(var j = 0; j < pla.length; j++){
        pla[j].style.display = "none";
    }

    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "plat3");
    text2.setAttribute("id", "plat3");
    text3.setAttribute("id", "plat3");

    text1.innerText = "plat3";
    text2.innerText = plat33;
    text3.innerText = "7$";

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    totalP += 7;  
    
    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);

    plat33++;
    document.getElementById('ttt').innerHTML=totalP;
}

function salade1(){
    var coc = document.querySelectorAll("#salade1");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    
    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "salade1");
    text2.setAttribute("id", "salade1");
    text3.setAttribute("id", "salade1");

    text1.innerText = "salade1";
    text2.innerText = salade11;
    text3.innerText = "5.5$";
    totalP+=5.5;

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);
    salade11++;
    document.getElementById('ttt').innerHTML=totalP;
}
function salade2(){
    var coc = document.querySelectorAll("#salade2");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    
    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "salade2");
    text2.setAttribute("id", "salade2");
    text3.setAttribute("id", "salade2");

    text1.innerText = "salade2";
    text2.innerText = salade22;
    text3.innerText = "7.5$";
    totalP+=7,5;

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);
    salade22++;
    document.getElementById('ttt').innerHTML=totalP;
}
function salade3(){
    var coc = document.querySelectorAll("#salade3");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    
    var text1 = document.createElement("p");
    var text2 = document.createElement("p");
    var text3 = document.createElement("p");

    text1.setAttribute("id", "salade3");
    text2.setAttribute("id", "salade3");
    text3.setAttribute("id", "salade3");

    text1.innerText = "salade3";
    text2.innerText = salade33;
    text3.innerText = "6$";
    totalP+=6;

    text1.style.fontWeight = "400";
    text2.style.fontWeight = "400";
    text3.style.fontWeight = "400";

    document.getElementById("items0").appendChild(text1);
    document.getElementById("items1").appendChild(text2);
    document.getElementById("items2").appendChild(text3);
    salade33++;
    document.getElementById('ttt').innerHTML=totalP;
}




//total

