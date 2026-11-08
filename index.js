var shades=[
["#ffffff","Sailor white","025"],["#c7a29f","Rosa empolvado","040"],["#e9d4bd","Vainilla","163"],["#edeee5","Love Kiss","092"],
["#000000","Imperial black","040"],["#994c3c","Love song","094"],["#a60123","Imperial Velvet","044"],["#4d1e28","Imperial Shedron","043"],
["#0030b9","Cobalt","128"],["#608bfb","Ciel","164"],["#7bb1e2","Sky","130"],["#e4bb02","Canary","131"],
["#fc77c4","Mermaid Tiara","037"],["#6a1560","Temp Magenta","090"]
];
var list=document.getElementById("shades"),now=document.getElementById("now"),stage=document.getElementById("stage");
function pick(i){
  stage.style.setProperty("--polish",shades[i][0]);
  now.textContent=shades[i][1]+" "+shades[i][2];
  [].forEach.call(list.querySelectorAll("button"),function(b,j){b.setAttribute("aria-pressed",j===i)});
}
shades.forEach(function(s,i){
  var li=document.createElement("li"),b=document.createElement("button"),d=document.createElement("i");
  b.type="button";d.style.background=s[0];
  var t=document.createElement("span");t.innerHTML="<b></b><small></small>";t.firstChild.textContent=s[1];t.lastChild.textContent=s[2]+" · Organic";
  b.appendChild(d);b.appendChild(t);
  b.addEventListener("click",function(){pick(i)});
  li.appendChild(b);list.appendChild(li);
});
function finish(m){
  stage.classList.toggle("matte",m);
  document.getElementById("f-gloss").setAttribute("aria-pressed",!m);
  document.getElementById("f-matte").setAttribute("aria-pressed",m);
}
document.getElementById("f-gloss").addEventListener("click",function(){finish(false)});
document.getElementById("f-matte").addEventListener("click",function(){finish(true)});
function skin(dark){
  stage.style.setProperty("--skin",dark?"#7a4a32":"#f3d5c4");
  document.getElementById("s-light").setAttribute("aria-pressed",!dark);
  document.getElementById("s-dark").setAttribute("aria-pressed",dark);
}
document.getElementById("s-light").addEventListener("click",function(){skin(false)});
document.getElementById("s-dark").addEventListener("click",function(){skin(true)});
pick(0);
