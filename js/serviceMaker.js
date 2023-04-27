var scrollPanel=opp(".scrollPanel");

var htmlSer=`

<div class="lineMargin" m="30px"></div>
<div class="services flex c w100p">
  <h1>Our Expertise..!! <span class="material-symbols-outlined">settings_suggest</span></h1>

  <div class="lineMargin" m="10px"></div>

  <div class="serveBox flex w100p">
`;
for(let val in menuData){
	htmlSer+=`

    <div class="serve4">

      <div class="scrollPanel flex c w100p">
        
        <div class="catName">${val}</div>
        
        <div class="scrBar w100p flex">
    `;
    var cl='active',n=0;

    for(let sal of menuData[val]){
    	htmlSer+=`<div class="scr ${cl}" bnrN='${n++}'>
    		<img src="img/services/${sal}.png" alt="banner ${sal}">
    		<p class="w100p texCen">${sal}</p>
    	</div>`;
    	cl='';
    }
    htmlSer+=`
        </div>
        <div class="handle flex">
          <div class="ico flex" onclick="changescr(-1,this,${n})">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
          <div class="ico flex" onclick="changescr(1,this,${n})">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>

      </div>
    </div>`;
}
htmlSer+=`
  </div>

</div>`;

document.body.insertAdjacentHTML("beforeend",htmlSer);

function changescr(term,elem,total){
	var parent=elem.parentElement.previousElementSibling;
	parent.classList.add('active');

	var elemAry=parent.children;
	log(elemAry);

	var targetPrev=op(".scrBar.active .scr.active"),targetPrevN=Number(targetPrev.getAttribute('bnrN')),
	targetN=(targetPrevN+term)%total;
	if(targetN<0)
		targetN=total-1;

	target=op(`.scrBar.active .scr[bnrN='${targetN}']`);

	log(targetPrevN,targetPrev,target);

	targetPrev.classList.remove("active");
	target.classList.add('active');

	parent.classList.remove('active');
}