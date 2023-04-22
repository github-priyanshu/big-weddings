

var htmlServe="";
var itN=0;
for(var i=0; i< menuItem.length; i+=4){
	log('c')
	htmlServe+=`<div class="serve4 flex">`
	for(var j=i; j<i+4; j++){
		htmlServe+=`
      <div class="serve">
        <img src="img/services/${menuItem[j][1]}.png" alt="${menuItem[j][1]} service">
        <p class="texCen w100p">${menuItem[j][1]}</p>
      </div>
`
	}	
	htmlServe+=`</div>`;
}

var serveHtml=`
<div class="lineMargin" m="30px"></div>
<div class="services flex c w100p">
  <h1>What we do..!! <span class="material-symbols-outlined">settings_suggest</span></h1>

  <div class="lineMargin" m="10px"></div>

  <div class="serveBox flex">${htmlServe}</div>
</div>
`
document.body.insertAdjacentHTML("beforeend",serveHtml);
resetFormat();